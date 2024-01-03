"use client";
import React, { useState } from "react";
import { TbBulb } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { useGlobalContext } from "@/helper/context";

const Rightbar = () => {
  const [suggest, setSuggest] = useState(false);

  const { authentic } = useGlobalContext();

  return (
    !authentic && (
      <>
        <div
          className="lg:hidden w-10 h-10 flex justify-center items-center bg-[#f5f5f5] text-blue-500 text-[1.5rem] m-2 border-black border-2 rounded-[8px] absolute z-[2] top-0 right-0"
          onClick={() => setSuggest(!suggest)}
        >
          {suggest ? <IoClose /> : <TbBulb />}
        </div>
        <div
          className={`lg:flex lg:flex-col hidden h-full lg:pt-2 pt-12 p-2 bg-[#1d1d1d] ${
            suggest ? "suggest-open" : ""
          }`}
        >
          <section className="h-1/2">
            <h3>Suggested Communitites</h3>
          </section>
          <section className="h-1/2">
            <h3>Suggested People</h3>
          </section>
        </div>
      </>
    )
  );
};

export default Rightbar;
