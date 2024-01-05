"use client";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "@/helper/context";
import Card from "@/components/Card";

export default function Home() {
  const { data } = useSession();
  const { posts } = useGlobalContext();

  console.log("session", data);
  console.log(posts);

  return (
    <div className="home lg:p-8 p-4 py-8 w-full h-full">
      <h2 className="font-bold text-2xl">Home</h2>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {posts.length > 0 &&
          posts.map((p: any) => {
            return <Card post={p} />;
          })}
      </div>
    </div>
  );
}
