"use client";
import { useState } from "react";
import { useGlobalContext } from "@/helpers/context";
import Image from "next/image";

const Rightbar = () => {
  const { authentic, loggedUser, otherUsers } = useGlobalContext();

  const suggestedUser = otherUsers?.filter(
    (u: any) => u._id !== loggedUser?._id
  );

  return (
    !authentic && (
      <>
        <div className={`lg:grid lg:grid-cols-1 gap-4 hidden h-full `}>
          <section>
            <h3 className="font-bold text-xl mb-2">Requests</h3>
            <div className=" overflow-auto">
              {suggestedUser?.map((res: any) => {
                return (
                  <div
                    key={res._id}
                    className="p-4 w-full mx-auto rounded-2xl bg-white dark:bg-black mb-3"
                  >
                    <div className="flex gap-2 items-center mb-2">
                      <div>
                        <Image
                          src={"/avatar.svg"}
                          alt="Avatar"
                          className="rounded-full"
                          height={48}
                          width={48}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{res.name}</h4>
                        <p className="text-gray-500 text-lg">
                          5 mutual friends
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="p-3 bg-primary text-white rounded-2xl font-semibold flex justify-center items-center gap-1">
                        Accept
                      </button>
                      <button className="p-3 bg-gray-300 dark:bg-stone-900 rounded-2xl font-semibold flex justify-center items-center gap-1">
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
