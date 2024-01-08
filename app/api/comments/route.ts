import { connect } from "@/dbconfig/connection";
import Comment from "@/models/commentModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    // const reqComment = req.json();
    const { text, author, authorId, thread, threadId } = await req.json();
    const comment = new Comment({ text, author, authorId, thread, threadId });
    await comment.save();

    return NextResponse.json({
      message: "Comment Added",
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ err: error.message, status: 500 });
  }
}
