"use client";
import React, { useState } from "react";
import { MdOutlinePhoto } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";
import axios from "axios";

const page = () => {
  const [thread, setThread] = useState({
    text: "",
    image: "",
  });

  const addPost = (e: any) => {
    const { name, value } = e.target;
    setThread({ ...thread, [name]: value });
    console.log(name, value);
  };

  const savePost = async (e: any) => {
    e.preventDefault();
    try {
      const saveThread = await axios.post("api/thread/addThread", thread);
      console.log(saveThread);
      setThread({
        text: "",
        image: "",
      });
    } catch (err: any) {
      console.log("post not added", err.message);
    }
  };
  return (
    <div className="lg:p-8 p-4">
      <h1 className="font-bold text-3xl">Create Thread</h1>
      <section className="border-2 p-4 m-2 bg-[#1d1d1d]">
        <textarea
          className="w-full outline-0 p-2 rounded bg-[#1d1d1d] border-[1px] border-white"
          rows={10}
          placeholder="What's in your mind ?"
          name="text"
          value={thread.text}
          onChange={(e) => addPost(e)}
        ></textarea>
        <div className="w-full rounded p-4 flex items-center justify-between border-[1px] border-white">
          <div className="flex items-center gap-4 text-[#9ca3af]">
            <MdOutlinePhoto size={30} />
            <IoVideocamOutline size={32} />
          </div>
          <div className="text-blue-500 bg-[#f5f5f5] p-2 rounded-xl">
            <GoPaperAirplane
              className="w-7 h-7 ml-1 cursor-pointer"
              onClick={(e: any) => savePost(e)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
