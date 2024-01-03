import User from "@/models/userModel";
import { connect } from "@/dbconfig/connection";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  await connect();

  const session = await getServerSession(authOptions);

  if (session && session.user) {
    const { email } = session.user;
    const main = await User.findOne({ email });
    return NextResponse.json(main);
  } else {
    return NextResponse.json("401 Unauthorized");
  }
}
