import { connect } from "@/dbconfig/connection";
import Comment from "@/models/commentModel";
import Thread from "@/models/threadModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    // const reqComment = req.json();
    const { text, author, authorId, thread, threadId } = await req.json();
    const comment = await Comment.create({
      text,
      author,
      authorId,
      thread,
      threadId,
    });

    await Thread.updateOne(
      { _id: threadId },
      { $push: { comments: comment._id } }
    );

    return NextResponse.json({
      message: "Comment Added",
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ err: error.message, status: 500 });
  }
}

export async function GET() {
  const Comments = await Comment.find({})
    .populate("author")
    .sort({ createdAt: -1 });

  return NextResponse.json(Comments);
}
