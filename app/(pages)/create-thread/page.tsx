import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl">Create Thread</h1>
      <section className="border-2 p-4 m-2">
        <div className="w-full p-4 ">
          <button> add Image +</button>
        </div>
        <textarea className="w-full outline-0 p-2 text-lg" rows={10}></textarea>
      </section>
    </div>
  );
};

export default page;
