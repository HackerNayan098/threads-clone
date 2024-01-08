"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch, IoHeartOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  MdOutlinePostAdd,
  MdPeopleOutline,
  MdOutlineLogout,
} from "react-icons/md";
// import Cookies from "js-cookie";
import { signOut } from "next-auth/react";
import { useGlobalContext } from "@/helper/context";
import Image from "next/image";

const itemlist = [
  {
    id: 1,
    title: "Home",
    icon: <BiHomeAlt2 size={25} />,
    redirect: "/",
  },
  {
    id: 2,
    title: "Search",
    icon: <IoSearch size={25} />,
    redirect: "/search",
  },
  {
    id: 3,
    title: "Activity",
    icon: <IoHeartOutline size={25} />,
    redirect: "/activity",
  },
  {
    id: 4,
    title: "Create Thread",
    icon: <MdOutlinePostAdd size={25} />,
    redirect: "/create-thread",
  },
  {
    id: 5,
    title: "Communities",
    icon: <MdPeopleOutline size={25} />,
    redirect: "/communities",
  },
  {
    id: 6,
    title: "Profile",
    icon: <FaRegUser size={25} />,
    redirect: "/user-profile",
  },
];

const Leftbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const { authentic, userData } = useGlobalContext();

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
              <h4 className="font-bold text-lg">{userData?.name}</h4>
              <p className="text-gray-500 text-lg">@{userData?.username}</p>
            </div>
          </div>
          <div className="nav-list flex flex-col rounded-2xl w-full p-4 mx-auto bg-white dark:bg-black">
            {itemlist.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`flex items-center rounded-2xl font-semibold gap-2 py-5 px-6 cursor-pointer text-[1.1rem] ${
                    pathname === item.redirect ? "bg-primary text-white" : ""
                  }`}
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      setNavOpen(!navOpen);
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
            <MdOutlineLogout />
            <span>Logout</span>
          </div>
        </nav>
        <nav className="fixed bottom-0 left-0 w-full bg-white dark:bg-black p-2 border-t border-gray-300 lg:hidden flex justify-between">
          {itemlist.map((item) => {
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

export default Leftbar;
