"use client";
import { useGlobalContext } from "@/helpers/context";
import Card from "@/components/Card";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const { posts, setPosts, loading, setLoading } = useGlobalContext();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/threadpost")
      .then((res: any) => {
        setPosts(res.data.data);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div className="home w-full h-full">
      <div className="grid grid-cols-1 gap-4 w-full">
        {posts.length > 0 &&
          posts.map((p: any) => {
            return <Card key={p._id} post={p} />;
          })}
      </div>
    </div>
  );
}
