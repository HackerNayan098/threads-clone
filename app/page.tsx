"use client";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  console.log("session", data);

  return (
    <div className="home lg:p-8 p-4 font-bold text-2xl w-full h-full">
      Homepage
    </div>
  );
}
