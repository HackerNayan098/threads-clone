import { Thread, Comment } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbconfig";

export async function POST(req: NextRequest) {
  dbConnect();
  try {
    const { commentText, author, authorId, thread, threadId } =
      await req.json();
    const comment = await Comment.create({
      commentText,
      author,
      authorId,
      thread,
      threadId,
    });

    await Thread.updateOne(
      { _id: threadId },
      { $push: { comment: comment._id } }
    );

    return NextResponse.json({ message: "Comment Added", status: 200 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ err: error.message, status: 500 });
  }
}

export async function GET() {
  await dbConnect();
  const Comments = await Comment.find({})
    .populate("author")
    .sort({ createdAt: -1 });

  return NextResponse.json(Comments);
}
