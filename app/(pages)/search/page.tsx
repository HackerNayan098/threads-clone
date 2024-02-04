"use client";
import { useState, useEffect } from "react";
import { useGlobalContext } from "@/helpers/context";
import { IoSearch } from "react-icons/io5";
import Input from "@/components/Input";
import Image from "next/image";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { otherUsers } = useGlobalContext();

  const searchUser = () => {};

  console.log(searchUser);

  return (
    <div className="lg:p-8 p-4">
      <h1 className="font-bold text-3xl">Search</h1>
      <Input
        type="text"
        name="search-text"
        placeholder="Search"
        inputClass={"bg-white"}
        elem={<IoSearch size={25} />}
        elemClass="cursor-pointer"
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <section className="">
        {searchTerm.length == null ? (
          "Search User"
        ) : (
          <div className="p-4 w-full mx-auto rounded-2xl bg-white dark:bg-black mb-3">
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
                <h4 className="font-bold text-lg">{}</h4>
              </div>
            </div>
            <div className="">
              <button className="p-3 bg-primary text-white rounded-2xl font-semibold flex justify-center items-center gap-1">
                Send Request
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Search;
