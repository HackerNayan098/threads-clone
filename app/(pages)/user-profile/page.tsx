"use client";
import Button from "@/components/Button";
import React from "react";
import profileImg from "@/images/profile-img.jpg";
import { useGlobalContext } from "@/helper/context";

const page = () => {
  const { userData } = useGlobalContext();

  console.log(userData);

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
        <div className="col-span-1">Threads</div>
        <div className="col-span-1">Replies</div>
        <div className="col-span-1">Tagged</div>
      </section>
    </div>
  );
};

export default page;
