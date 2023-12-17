import Button from "@/components/Button";
import React from "react";
import profileImg from "@/images/profile-img.jpg";

const page = () => {
  return (
    <div>
      <section className="border-b-[3px]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-20 h-20">
              <img
                src={profileImg.src}
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div>
              <h3 className="font-bold text-xl">Nayan Bhalerao</h3>
              <h5 className="">@nayanb</h5>
            </div>
          </div>
          <div>
            <Button btnTitle="Edit" cssClass="py-2 px-4 bg-[#7272ff] rounded" />
          </div>
        </div>
        <div className="p-4">
          <p>Web developer</p>
          <p>javascript dev</p>
        </div>
      </section>
      <section className="grid grid-cols-3 p-4 text-center">
        <div className="col-span-1">Threads</div>
        <div className="col-span-1">Replies</div>
        <div className="col-span-1">Tagged</div>
      </section>
    </div>
  );
};

export default page;
