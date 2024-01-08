"use client";
import { useState } from "react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiShareFatLight } from "react-icons/pi";
import { GoPaperAirplane } from "react-icons/go";
import Image from "next/image";
import Input from "../Input";

const Card = ({ post }: any) => {
  const [commentActive, setCommentActive] = useState(false);
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
        <IoMdHeartEmpty size={28} />
        <IoChatbubbleEllipsesOutline
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
            name="comment"
            elem={<GoPaperAirplane className="w-7 h-7 ml-1 cursor-pointer" />}
          />
        </section>
      )}
    </div>
  );
};

export default Card;
