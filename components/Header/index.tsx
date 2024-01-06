"use client";

import Link from "next/link";
import { MdAdd } from "react-icons/md";

const Header = () => {
  return (
    <div className="py-4 px-12 bg-white text-black">
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold">Logo</div>
        <div>
          <Link
            href={"/create-thread"}
            className="py-3 px-6 flex gap-1 items-center font-semibold text-lg bg-blue-600 text-white rounded-full"
          >
            <MdAdd size={18} />
            Create
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
