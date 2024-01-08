"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IoSunny, IoMoon } from "react-icons/io5";
import { AiOutlinePlusSquare } from "react-icons/ai";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="py-4 px-4 lg:px-12 bg-white dark:bg-black dark:text-white">
      <div className="flex justify-between items-center">
        <Link href={"/"}>
          <div className="text-3xl font-bold">Logo</div>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={"/create-thread"}
            className="py-3 px-6 flex gap-1 items-center font-semibold text-lg bg-primary text-white rounded-full"
          >
            <AiOutlinePlusSquare size={18} />
            Create
          </Link>
          <button
            className="p-2 lg:p-3"
            onClick={() => {
              if (theme === "light") {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          >
            {theme === "light" ? <IoMoon size={30} /> : <IoSunny size={30} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
