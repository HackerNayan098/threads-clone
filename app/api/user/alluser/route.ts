import { User } from "@/models";
import { NextResponse } from "next/server";
import dbConnect from "@/dbconfig";

dbConnect();

export async function GET() {
  const allUsers = await User.find();
  try {
    return NextResponse.json(allUsers);
  } catch (err: any) {
    return NextResponse.json("500 Internal Server Issue");
  }
}
