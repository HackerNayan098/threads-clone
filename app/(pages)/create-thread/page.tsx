import React from "react";
import { MdOutlinePhoto } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Create Thread</h1>
      <section className="border-2 p-4 m-2">
        <textarea
          className="w-full outline-0 p-2 rounded"
          rows={10}
          placeholder="What's in your mind ?"
        ></textarea>
        <div className="w-full p-4 bg-white rounded p-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-[#9ca3af]">
            <MdOutlinePhoto size={30} />
            <IoVideocamOutline size={32} />
          </div>
          <div className="text-blue-500 bg-[#f5f5f5] p-2 rounded-xl">
            <GoPaperAirplane className="w-7 h-7 ml-1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
