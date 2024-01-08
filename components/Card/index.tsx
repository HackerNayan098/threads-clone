"use client";
import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Input from "../Input";
import { PiShareFatLight } from "react-icons/pi";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import { useGlobalContext } from "@/helper/context";

const Card = ({ post }: any) => {
  const { userData, posts } = useGlobalContext();
  const [commentActive, setCommentActive] = useState(false);
  const [comment, setComment] = useState({
    text: "",
  });

  const addComment = (e: any) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const saveComment = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/comments", {
        ...comment,
        author: userData._id,
        authorId: userData._id,
        thread: posts._id,
        threadId: posts._id,
      });
      setComment({ text: "" });
      setCommentActive(false);
    } catch (err: any) {
      console.log("comment not added", err.message);
    }
  };

  return (
    <div className="mx-auto w-full lg:p-6 p-4 bg-white dark:bg-black rounded-2xl ">
      <section className="flex items-start gap-4">
        <div>
          <Image
            src={"/avatar.svg"}
            alt="Avatar"
            className="rounded-full"
            height={48}
            width={48}
          />
        </div>
        <div>
          <div className="font-bold">{post.author.username}</div>
          <div>{post.text}</div>
        </div>
      </section>
      <div className="h-72 lg:h-[480px] bg-gray-300 dark:bg-stone-900 my-6 rounded-2xl"></div>
      <section className="flex gap-4 my-2">
        <AiOutlineHeart size={28} />
        <AiOutlineMessage
          className="cursor-pointer"
          size={28}
          onClick={() => setCommentActive(!commentActive)}
        />
        <PiShareFatLight size={28} />
      </section>
      {commentActive === true && (
        <section className="comment">
          <Input
            type="text"
            placeholder="enter a comment"
            name="text"
            value={comment.text}
            onChange={(e) => addComment(e)}
            elem={
              <AiOutlineSend
                className="w-7 h-7 ml-1 cursor-pointer"
                onClick={(e: any) => saveComment(e)}
              />
            }
          />
        </section>
      )}
    </div>
  );
};

export default Card;
