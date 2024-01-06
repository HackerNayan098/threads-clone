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
          className="lg:hidden w-10 h-10 flex justify-center items-center text-white text-[1.5rem] m-4 border-white border-2 rounded-[8px] absolute z-[2] top-0 right-0"
          onClick={() => setSuggest(!suggest)}
        >
          {suggest ? <IoClose /> : <TbBulb />}
        </div>
        <div
          className={`lg:flex lg:flex-col gap-4 hidden h-full lg:pt-2 pt-12 p-2 ${
            suggest ? "suggest-open" : ""
          }`}
        >
          <section className="h-1/2">
            <h3 className="font-bold text-black text-xl mb-2">
              Suggested Communitites
            </h3>
            <div className="bg-white rounded-2xl p-4 overflow-auto h-80">
              {[1, 2, 3, 4, 5].map((c) => {
                return (
                  <div
                    key={c}
                    className="w-full py-2 mx-auto flex gap-2 items-center"
                  >
                    <div className="h-14 w-14 rounded-full bg-gray-300"></div>
                    <div>
                      <h4 className="text-black font-bold text-lg">Testing</h4>
                      <p className="text-gray-500 text-lg">1000 Follower</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="h-1/2">
            <h3 className="font-bold text-black text-xl mb-2">Requests</h3>
            <div className="h-60 overflow-auto">
              {[1, 2].map((res) => {
                return (
                  <div
                    key={res}
                    className="p-4 w-full mx-auto rounded-2xl bg-white mb-6"
                  >
                    <div className="flex gap-2 items-center mb-2">
                      <div className="h-14 w-14 rounded-full bg-gray-300"></div>
                      <div>
                        <h4 className="text-black font-bold text-lg">
                          User Name
                        </h4>
                        <p className="text-gray-500 text-lg">
                          10 mutual friends
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="p-3 bg-blue-600 rounded-2xl font-semibold flex justify-center items-center gap-1">
                        Accept
                      </button>
                      <button className="p-3 bg-gray-300 text-black rounded-2xl font-semibold flex justify-center items-center gap-1">
                        Decline
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </>
    )
  );
};

export default Rightbar;
