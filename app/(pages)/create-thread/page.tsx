"use client";
import React, { useState } from "react";
import { MdOutlinePhoto } from "react-icons/md";
import { IoVideocam, IoVideocamOutline } from "react-icons/io5";
import { GoPaperAirplane } from "react-icons/go";
import axios from "axios";
import { useGlobalContext } from "@/helper/context";
import { BiSolidImageAdd } from "react-icons/bi";

const page = () => {
  const { userData } = useGlobalContext();
  const [mediaType, setMediaType] = useState("");
  const [thread, setThread] = useState({
    text: "",
    image: "",
  });

  const addPost = (e: any) => {
    const { name, value } = e.target;
    setThread({ ...thread, [name]: value });
  };

  const savePost = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/thread", {
        ...thread,
        author: userData._id,
        authorId: userData._id,
      });
      setThread({
        text: "",
        image: "",
      });
    } catch (err: any) {
      console.log("post not added", err.message);
    }
  };
  return (
    <div>
      <section className="p-4 bg-white rounded-2xl dark:bg-black">
        <textarea
          className="w-full outline-0 dark:bg-transparent p-4 rounded-2xl text-lg border-[1px] border-gray-400"
          rows={10}
          placeholder="What's in your mind ?"
          name="text"
          value={thread.text}
          onChange={(e) => addPost(e)}
        ></textarea>
        <div className="my-6">
          {mediaType === "image" && (
            <label className="text-center  flex justify-center items-center rounded-2xl border-2 text-gray-400 border-dashed border-gray-400 h-60 w-60 cursor-pointer">
              <input type="file" hidden />
              <div>
                <BiSolidImageAdd size={35} className="mx-auto" />
                <h5 className="text-xl font-medium">Add Image</h5>
              </div>
            </label>
          )}
          {mediaType === "video" && (
            <label className="text-center  flex justify-center items-center rounded-2xl border-2 text-gray-400 border-dashed border-gray-400 h-60 w-60 cursor-pointer">
              <input type="file" hidden />
              <div>
                <IoVideocam size={35} className="mx-auto" />
                <h5 className="text-xl font-medium">Add Video</h5>
              </div>
            </label>
          )}
        </div>
        <div className="w-full px-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                if (mediaType === "image") {
                  setMediaType("");
                } else {
                  setMediaType("image");
                }
              }}
              className={`p-2 rounded-2xl ${
                mediaType === "image" && "bg-primary text-white"
              }`}
            >
              <MdOutlinePhoto size={30} />
            </button>
            <button
              onClick={() => {
                if (mediaType === "video") {
                  setMediaType("");
                } else {
                  setMediaType("video");
                }
              }}
              className={`p-2 rounded-2xl ${
                mediaType === "video" && "bg-primary text-white"
              }`}
            >
              <IoVideocamOutline size={32} />
            </button>
          </div>
          <div className="text-white bg-primary p-2 rounded-xl">
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
