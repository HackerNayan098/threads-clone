import { User } from "@/models";
import { NextResponse } from "next/server";
import dbConnect from "@/dbconfig";

dbConnect();

export async function GET() {
  const allUsers = await User.find();
  if (allUsers) {
    return NextResponse.json(allUsers);
  } else {
    return NextResponse.json("500 Internal Server Issue");
  }
}
