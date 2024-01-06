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
    <div className="home px-4 lg:px-0 w-full h-full">
      <div className="grid grid-cols-1 gap-4 w-full">
        {posts.length > 0 &&
          posts.map((p: any) => {
            return <Card post={p} />;
          })}
      </div>
    </div>
  );
}
