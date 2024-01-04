"use client";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "@/helper/context";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { PiShareFatLight } from "react-icons/pi";

export default function Home() {
  const { data } = useSession();
  const { posts } = useGlobalContext();

  console.log("session", data);
  console.log(posts);

  return (
    <div className="home lg:p-8 p-4 w-full h-full">
      <h2 className="font-bold text-2xl">Home</h2>
      {posts.length > 0 &&
        posts.map((p: any) => {
          return (
            <div className="lg:w-fit mx-auto my-4 lg:p-6 p-4 bg-[#1d1d1d] rounded-xl ">
              <section className="flex items-start gap-4">
                <div className="rounded-full w-12 h-12 bg-blue-500"></div>
                <div className="w-[250px]">
                  <div>Username</div>
                  <div>{p.text}</div>
                </div>
              </section>
              <div className="lg:w-80 h-80 bg-[#f5f5f5] my-6 rounded-xl"></div>
              <section className="flex gap-4 my-2">
                <IoMdHeartEmpty size={28} />
                <IoChatbubbleEllipsesOutline size={28} />
                <PiShareFatLight size={28} />
              </section>
            </div>
          );
        })}
    </div>
  );
}
