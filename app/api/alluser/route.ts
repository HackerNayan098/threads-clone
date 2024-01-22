import { User } from "@/models";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../pages/api/auth/[...nextauth]";
import dbConnect from "@/dbconfig";

export async function GET() {
  await dbConnect();

  try {
    const session = await getServerSession(authOptions);
    if (session && session.user) {
      const alluser = await User.find({ email: { $ne: session.user.email } });
      return NextResponse.json(alluser);
    } else {
      return NextResponse.json("401 unauthorized");
    }
  } catch (err: any) {
    return NextResponse.json(err);
  }
}
