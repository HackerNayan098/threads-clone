import { connect } from "@/dbconfig/connection";
import Thread from "@/models/threadModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(req: NextRequest) {
  try {
    const reqThread = await req.json();
    const { text, image } = reqThread;
    const thread = new Thread({
      text,
      image,
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

export async function DELETE(req: NextRequest) {
  try {
    const reqId = await req.json();
    const { id } = reqId;
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
