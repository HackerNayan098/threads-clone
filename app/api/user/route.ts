import dbConnect from "@/dbconfig";
import { User } from "@/models";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  dbConnect();
  const session = await getServerSession(authOptions);
  if (session && session.user) {
    const { email } = session.user;
    const user = await User.findOne({ email });
    return NextResponse.json({ user });
  } else {
    return NextResponse.json("401 unautorized");
  }
}
