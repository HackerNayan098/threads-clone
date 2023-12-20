import { connect } from "@/dbconfig/connection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, username, password } = reqBody;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({
        error: "User does not exist",
        status: 400,
      });
    }

    //   check password
    const validPass = await bcryptjs.compare(password, user.password);
    if (!validPass) {
      return NextResponse.json({
        error: "Invalid Password",
        status: 500,
      });
    }

    //   Generate Token
    const token = await jwt.sign(
      { id: user._id, username: user.username },
      process.env.TOKEN_KEY!,
      { expiresIn: "24h" }
    );

    const response = NextResponse.json({
      message: "Login Successfully !",
      success: true,
      token,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}
