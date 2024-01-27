"use client";
import { useState, useEffect } from "react";
import { useGlobalContext } from "@/helpers/context";
import { PiShareFatLight } from "react-icons/pi";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineMessage,
  AiOutlineSend,
} from "react-icons/ai";
import axios from "axios";
import Image from "next/image";
import Input from "../Input";
import { Comment } from "@/constant";

const Card = ({ post }: any) => {
  const { loggedUser } = useGlobalContext();
  const [commentBox, setCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  // const addComment = (e: any) => {
  //   const { name, value } = e.target;
  //   setComment({ ...comment, [name]: value });
  // };

  const saveComment = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("/api/comments", {
        text: comment,
        author: loggedUser?._id,
        authorId: loggedUser?._id,
        thread: post._id,
        threadId: post._id,
      });
      setComment("");
      setCommentBox(false);
    } catch (err: any) {
      console.log("comment not added", err.message);
    }
  };

  useEffect(() => {
    axios.get("/api/comments").then((res) => {
      setComments(res.data);
    });
  }, [commentBox]);

  return (
    <div className="mx-auto w-full lg:p-6 p-4 bg-white dark:bg-black rounded-2xl">
      <section className="flex items-start gap-4">
        <div>
          <div className="h-12 w-12 relative">
            <Image
              src={`${
                post?.author?.profileImg
                  ? post?.author?.profileImg
                  : "/avatar.svg"
              }`}
              alt="Avatar"
              className="rounded-full"
              fill
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <div className="font-bold">{post.author.username}</div>
          <div>{post.postCaption}</div>
        </div>
      </section>
      <div className="flex gap-4">
        {post.postImage && (
          <div
            className={`h-72 lg:h-[480px] relative bg-gray-300 dark:bg-stone-900 my-6 rounded-2xl ${
              commentBox ? "w-full lg:w-1/2" : "w-full"
            }`}
          >
            <Image
              fill
              objectFit="contain"
              alt={"postimg"}
              src={post.postImage}
            />
          </div>
        )}
      </div>
      <section className="flex gap-4 my-2">
        <AiOutlineHeart size={28} />
        <div className="flex gap-1 items-center">
          <AiOutlineMessage
            className="cursor-pointer"
            size={28}
            onClick={() => setCommentBox(!commentBox)}
          />
          <p className="font-bold">
            {post?.comments?.length > 0 && post?.comments?.length}
          </p>
        </div>
        <PiShareFatLight size={28} />
      </section>
      {commentBox === true && (
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
          {comments?.length > 0 &&
            comments
              ?.filter((c) => c?.threadId === post?._id)
              ?.map((c) => {
                return (
                  <div
                    key={`${c._id}`}
                    className="flex gap-2 items-center mb-2"
                  >
                    <div>
                      <Image
                        src={`${
                          c?.author?.profileImg
                            ? c?.author?.profileImg
                            : "/avatar.svg"
                        }`}
                        alt="Avatar"
                        className="rounded-full"
                        height={25}
                        width={25}
                      />
                    </div>
                    <div className="flex gap-2">
                      <h4 className="font-bold">{c.author.fullname}</h4>
                      <p className="text-gray-500 text-lg">{c.commentText}</p>
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
