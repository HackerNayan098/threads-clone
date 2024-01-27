import { NextResponse } from "next/server";
import { User } from "@/models";
import dbConnect from "@/dbconfig";

export async function PUT(req: Request, content: any) {
  await dbConnect();
  const { id } = content.params;
  const body = await req.json();
  const updateProfile = await User.findOneAndUpdate({ _id: id }, body);

  return NextResponse.json(updateProfile);
}
