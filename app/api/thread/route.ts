import { connect } from "@/dbconfig/connection";
import Thread from "@/models/threadModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqThread = await req.json();
    const { text, image, author, authorId } = reqThread;
    const thread = new Thread({
      text,
      image,
      author,
      authorId,
    });
    await thread.save();
    console.log(thread);

    return NextResponse.json({
      message: "Thread Added Successfully",
      status: 200,
    });
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const posts = await Thread.find({}).populate("author");
    return NextResponse.json({
      message: "User Posts",
      status: 200,
      data: posts,
    });
  } catch (err: any) {
    return NextResponse.json({ err: err.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
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
  } catch (err: any) {
    console.log(err);

    return NextResponse.json({
      message: "Internal Error",
      status: 500,
    });
  }
}
