import { User, Thread } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/dbconfig";

dbConnect();

export async function POST(req: NextRequest) {
  try {
    const { postCaption, postImage, author, authorId } = await req.json();
    const threadPost = await Thread.create({
      postCaption,
      postImage,
      author,
      authorId,
    });
    await User.updateOne(
      { _id: authorId },
      { $push: { threads: threadPost._id } }
    );

    return NextResponse.json({
      message: "Thread Post Added Successfully",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ err: error.message, status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userPosts = await Thread.find({}).populate("author");
    return NextResponse.json({
      data: userPosts,
      message: "User Posts",
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({ err: error.message, status: 500 });
  }
}

export async function DELETE(req: NextResponse) {
  // const router = useRouter();
  try {
    const reqId = await req.json();
    const { id } = reqId;
    // const { id } = router.query;
    await Thread.findByIdAndDelete(id);
    return NextResponse.json({
      message: "Post Deleted Successfully !",
      status: 200,
    });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({
      message: "Internal Error",
      status: 500,
    });
  }
}
