import { User } from "@/models/index";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbconfig";

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { profileImg, profileBio, name } = await req.json();
    await User.create({
      name,
      profileImg,
      profileBio,
    });

    return NextResponse.json({
      message: "ProfilePic And Bio Added Successfully",
      status: 200,
    });
  } catch (err) {
    return NextResponse.json(err);
  }
}
