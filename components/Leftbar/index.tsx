"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useGlobalContext } from "@/helpers/context";
import { signOut } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineLogout,
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineTeam,
  AiOutlinePlusSquare,
} from "react-icons/ai";

const navList = [
  {
    id: 1,
    title: "Home",
    icon: <AiOutlineHome size={25} />,
    redirect: "/",
  },
  {
    id: 2,
    title: "Search",
    icon: <AiOutlineSearch size={25} />,
    redirect: "/search",
  },
  {
    id: 3,
    title: "Activity",
    icon: <AiOutlineHeart size={25} />,
    redirect: "/activity",
  },
  {
    id: 4,
    title: "Create Post",
    icon: <AiOutlinePlusSquare size={25} />,
    redirect: "/create-post",
  },
  {
    id: 5,
    title: "Communities",
    icon: <AiOutlineTeam size={25} />,
    redirect: "/communities",
  },
  {
    id: 6,
    title: "Profile",
    icon: <AiOutlineUser size={25} />,
    redirect: "/user-profile",
  },
];
const index = () => {
  const pathname = usePathname();
  const { authentic, loggedUser } = useGlobalContext();
  const [openNav, setOpenNav] = useState(false);

  return (
    !authentic && (
      <>
        <nav className={`h-full lg:flex flex-col items-center hidden`}>
          <div className="p-4 w-full mx-auto rounded-2xl bg-white dark:bg-black flex gap-2 items-center mb-6">
            <div>
              <Image
                src={"/avatar.svg"}
                alt="Avatar"
                className="rounded-full"
                height={56}
                width={56}
              />
            </div>
            <div>
              <h4 className="font-bold text-lg">{loggedUser?.name}</h4>
              <p className="text-gray-500 text-lg">@{loggedUser?.username}</p>
            </div>
          </div>
          <div className="nav-list flex flex-col rounded-2xl w-full p-4 mx-auto bg-white dark:bg-black">
            {navList.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`flex items-center rounded-2xl font-semibold gap-2 py-5 px-6 cursor-pointer text-[1.1rem] ${
                    pathname === item.redirect ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setOpenNav(!openNav);
                    }
                  }}
                >
                  <Link
                    href={item.redirect}
                    className="flex items-center gap-2"
                  >
                    {item.icon} {item.title}
                  </Link>
                </li>
              );
            })}
          </div>
          <div
            onClick={() => signOut()}
            className="signout flex cursor-pointer text-white font-semibold gap-2 items-center py-4 px-8 my-6 bg-primary rounded-full"
          >
            <AiOutlineLogout />
            <span>Logout</span>
          </div>
        </nav>
        <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-black p-2 border-t border-gray-300 lg:hidden flex justify-between">
          {navList.map((item) => {
            return (
              <Link
                className={`rounded-2xl p-3 ${
                  pathname === item.redirect ? "bg-primary text-white" : ""
                }`}
                key={item.id}
                href={item.redirect}
              >
                {item.icon}
              </Link>
            );
          })}
        </nav>
      </>
    )
  );
};

export default index;
