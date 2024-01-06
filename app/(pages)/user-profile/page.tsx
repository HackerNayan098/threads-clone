"use client";
import React, { useState } from "react";
import Button from "@/components/Button";
import profileImg from "@/images/profile-img.jpg";
import { useGlobalContext } from "@/helper/context";
import Card from "@/components/Card";

const page = () => {
  const [activeTab, setActiveTab] = useState("Thread");
  const { userData, posts } = useGlobalContext();

  const tabs = [
    { id: 1, title: "Thread" },
    { id: 2, title: "Replies" },
    { id: 3, title: "Tagged" },
  ];

  const userPost = posts.filter((up: any) => userData?._id === up.author._id);

  return (
    <div className="lg:p-8 p-4">
      <section className="border-b-[3px]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-20">
              <img
                src={profileImg.src}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">{userData?.name}</h3>
              <h5 className="">@{userData?.username}</h5>
            </div>
          </div>
          <div>
            <Button btnTitle="Edit" cssClass="py-2 px-4 bg-[#7272ff] rounded" />
          </div>
        </div>
        <div className="p-4">
          <p>Web developer</p>
          <p>javascript dev</p>
        </div>
      </section>
      <section className="grid grid-cols-3 p-4 text-center text-lg bg-[#1d1d1d] mt-2">
        {tabs.map((t) => {
          return (
            <div
              key={t.id}
              className="col-span-1 cursor-pointer"
              onClick={() => setActiveTab(t.title)}
            >
              <span
                className={`relative  ${
                  activeTab === t.title ? "tabs-title" : ""
                }`}
              >
                {t.title}
              </span>
            </div>
          );
        })}
      </section>
      <div className={` ${activeTab === "Thread" ? "block" : "hidden"}`}>
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
          {userPost.length === 0
            ? "NO Posts"
            : userPost.map((p: any) => {
                return <Card post={p} />;
              })}
        </div>
      </div>

      <div className={` ${activeTab === "Replies" ? "block" : "hidden"}`}>
        <h3>Replies</h3>
        <p>Paris is the capital of France.</p>
      </div>

      <div className={` ${activeTab === "Tagged" ? "block" : "hidden"}`}>
        <h3>Tagged</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
    </div>
  );
};

export default page;
