"use client";
import { useSession } from "next-auth/react";
import { useGlobalContext } from "@/helper/context";
import Card from "@/components/Card";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  // const { data } = useSession();
  const { posts, loading, setLoading, setPosts } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/thread")
      .then((res: any) => {
        setPosts(res.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-2xl text-center py-12">Loading...</div>;
  }

  return (
    <div className="home w-full h-full">
      <div className="grid grid-cols-1 gap-4 w-full">
        {posts.length > 0 &&
          posts.map((p: any) => {
            return <Card post={p} />;
          })}
      </div>
    </div>
  );
}
