"use client";
import { IoSunny, IoMoon } from "react-icons/io5";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { TbSocial } from "react-icons/tb";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="py-4 px-4 lg:px-12 bg-white dark:bg-black dark:text-white">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <div className="text-3xl font-bold text-primary">
            <TbSocial size={50} />
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Link
            href={"/create-post"}
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
            {theme === "dark" ? <IoSunny size={30} /> : <IoMoon size={30} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
