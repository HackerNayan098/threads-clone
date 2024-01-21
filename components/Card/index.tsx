"use client";
import { useEffect, useState } from "react";
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
  const { userData } = useGlobalContext();
  const [commentActive, setCommentActive] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<any[]>([]);

  const saveComment = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/comments", {
        text: comment,
        author: userData._id,
        authorId: userData._id,
        thread: post._id,
        threadId: post._id,
      });
      setComment("");
      setCommentActive(false);
    } catch (err: any) {
      console.log("comment not added", err.message);
    }
  };

  useEffect(() => {
    axios.get("/api/comments").then((res) => {
      setComments(res.data);
    });
  }, [commentActive]);

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
      <div className={`flex gap-2`}>
        {post.image && (
          <div
            className={`h-72 lg:h-[480px] relative bg-gray-300 dark:bg-stone-900 my-6 rounded-2xl ${
              commentActive ? "w-full lg:w-1/2" : "w-full"
            }`}
          >
            <Image fill objectFit="contain" alt={"postimg"} src={post.image} />
          </div>
        )}
        {commentActive === true && (
          <section className="comment w-1/2 hidden lg:block">
            <Input
              type="text"
              placeholder="enter a comment"
              name="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              elem={
                <AiOutlineSend
                  className="w-7 h-7 ml-1 cursor-pointer"
                  onClick={(e: any) => saveComment(e)}
                />
              }
            />
            {comments
              .filter((c) => c?.threadId === post._id)
              .map((c) => {
                return (
                  <div className="flex gap-2 items-center mb-2">
                    <div>
                      <Image
                        src={"/avatar.svg"}
                        alt="Avatar"
                        className="rounded-full"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div className="flex gap-2">
                      <h4 className="font-bold">{c.author.name}</h4>
                      <p className="text-gray-500 text-lg">{c.text}</p>
                    </div>
                  </div>
                );
              })}
          </section>
        )}
      </div>
      <section className="flex gap-4 mt-6 mb-2">
        <AiOutlineHeart size={28} />
        <div className="flex gap-1 items-center">
          <AiOutlineMessage
            className="cursor-pointer"
            size={28}
            onClick={() => setCommentActive(!commentActive)}
          />
          <p className="font-bold">
            {post?.comments?.length > 0 && post?.comments?.length}
          </p>
        </div>
        <PiShareFatLight size={28} />
      </section>
      {commentActive === true && (
        <section className="comment w-full lg:w-1/2 lg:hidden">
          <Input
            type="text"
            placeholder="enter a comment"
            name="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            elem={
              <AiOutlineSend
                className="w-7 h-7 ml-1 cursor-pointer"
                onClick={(e: any) => saveComment(e)}
              />
            }
          />
          {comments
            .filter((c) => c?.threadId === post._id)
            .map((c) => {
              return (
                <div className="flex gap-2 items-center mb-2">
                  <div>
                    <Image
                      src={"/avatar.svg"}
                      alt="Avatar"
                      className="rounded-full"
                      height={25}
                      width={25}
                    />
                  </div>
                  <div className="flex gap-2">
                    <h4 className="font-bold">{c.author.name}</h4>
                    <p className="text-gray-500 text-lg">{c.text}</p>
                  </div>
                </div>
              );
            })}
        </section>
      )}
    </div>
  );
};

export default Card;
