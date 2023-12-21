import React from "react";
import Input from "@/components/Input";

const page = () => {
  return (
    <div className="lg:p-8 p-4">
      <h1 className="font-bold text-3xl">Communities</h1>
      <section className="">
        <Input type="text" name="search-text" placeholder="Search" />
      </section>
    </div>
  );
};

export default page;
