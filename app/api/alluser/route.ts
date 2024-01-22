import { User } from "@/models";
import { NextResponse } from "next/server";
import dbConnect from "@/dbconfig";

export async function GET() {
  dbConnect();

  try {
    const allUsers = await User.find();
    return NextResponse.json(allUsers);
  } catch (err: any) {
    return NextResponse.json("500 Internal Server Issue");
  }
}
