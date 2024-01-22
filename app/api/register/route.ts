import dbConnect from "@/dbconfig";
import { User } from "@/models";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const reqBody = await req.json();
    const { name, phone, email, username, password } = reqBody;
    // Check if user already exist
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: "User already exist !", status: 500 });
    }
    // Hashing Password
    const hashPass = await bcryptjs.hash(password, await bcryptjs.genSalt(10));

    const registerUser = new User({
      ...reqBody,
      password: hashPass,
    });
    await registerUser.save();
    return NextResponse.json({
      message: "User Registred Successfully !",
      success: true,
      data: registerUser,
    });
  } catch (err: any) {
    return NextResponse.json({ err: err.message, status: 500 });
  }
}
