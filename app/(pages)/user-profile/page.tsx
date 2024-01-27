"use client";
import { useState } from "react";
import { useGlobalContext } from "@/helpers/context";
import { FaPen } from "react-icons/fa6";
import { PiSmileySad } from "react-icons/pi";
import Image from "next/image";

const UserProfile = () => {
  const { loggedUser, posts } = useGlobalContext();
  const [activeTab, setActiveTab] = useState("Thread");
  const tabs = ["Thread", "Replies", "Tagged"];

  const userPosts = posts?.filter(
    (up: any) => loggedUser?._id === up.author._id
  );

  return (
    <div>
      <section>
        <div className="flex items-center justify-between py-4 lg:p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="relative h-14 w-14">
              <Image
                src={`${
                  loggedUser.profileImg ? loggedUser.profileImg : "/avatar.svg"
                }`}
                alt="Avatar"
                className="rounded-full"
                fill
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">{loggedUser.fullname}</h3>
              <h5 className="text-gray-500 text-lg font-medium">
                @{loggedUser?.username}
              </h5>
            </div>
          </div>
          <div>
            <button className="py-3 px-6 bg-primary text-white rounded-2xl font-semibold text-xl flex justify-center items-center gap-2">
              <FaPen /> <span className="hidden md:block">Edit</span>
            </button>
          </div>
        </div>
        <div className="p-4 text-lg font-medium">
          <p>Web developer</p>
          <p>javascript dev</p>
        </div>
      </section>
      <section className="grid grid-cols-3 text-center text-lg bg-white dark:bg-black mt-2 mb-4 rounded-2xl">
        {tabs.map((t) => {
          return (
            <div
              key={t}
              className={`cursor-pointer py-4 rounded-2xl font-medium ${
                activeTab === t ? "bg-primary text-white" : ""
              }`}
              onClick={() => setActiveTab(t)}
            >
              {t}
            </div>
          );
        })}
      </section>
      <div>
        {activeTab === "Thread" && (
          <div className="bg-white dark:bg-black rounded-2xl min-h-96 p-2">
            {userPosts.length === 0 ? (
              <div className="text-center py-20">
                <PiSmileySad size={60} className="mx-auto" />
                <h2 className="text-2xl font-semibold">No Post</h2>
              </div>
            ) : (
              <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {userPosts.map((p: any) => {
                  return (
                    <div
                      key={p._id}
                      className="w-full bg-gray-300 dark:bg-stone-900 rounded-2xl h-72"
                    ></div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {activeTab === "Replies" && (
          <div>
            <h3>Replies</h3>
            <p>Paris is the capital of France.</p>
          </div>
        )}

        {activeTab === "Tagged" && (
          <div>
            <h3>Tagged</h3>
            <p>Tokyo is the capital of Japan.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
