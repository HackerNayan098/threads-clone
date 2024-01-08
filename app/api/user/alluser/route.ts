import User from "@/models/userModel";
import { connect } from "@/dbconfig/connection";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  const allUsers = await User.find();
  if (allUsers) {
    return NextResponse.json(allUsers);
  } else {
    return NextResponse.json("500 Internal Server Issue");
  }
}
