import { connect } from "@/dbconfig/connection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { name, phone, email, username, password } = reqBody;
    // Check if user already existed....
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "User already exists", status: 400 });
    }
    // hashpassword
    const hashpass = await bcryptjs.hash(password, await bcryptjs.genSalt(10));

    const newUser = new User({
      ...reqBody,
      password: hashpass,
    });
    await newUser.save();

    return NextResponse.json({
      message: "User Registred Successfully !",
      success: true,
      data: newUser,
    });
  } catch (err: any) {
    return NextResponse.json({ err: err.message, status: 500 });
  }
}
