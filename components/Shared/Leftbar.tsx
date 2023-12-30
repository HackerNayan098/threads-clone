"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaBars, FaRegUser } from "react-icons/fa6";
import { IoClose, IoSearch, IoHeartOutline } from "react-icons/io5";
import { BiHomeAlt2 } from "react-icons/bi";
import {
  MdOutlinePostAdd,
  MdPeopleOutline,
  MdOutlineLogout,
} from "react-icons/md";
import Cookies from "js-cookie";
import { useGlobalContext } from "@/helper/context";

const itemlist = [
  {
    id: 1,
    title: "Home",
    icon: <BiHomeAlt2 />,
    redirect: "/",
  },
  {
    id: 2,
    title: "Search",
    icon: <IoSearch />,
    redirect: "/search",
  },
  {
    id: 3,
    title: "Activity",
    icon: <IoHeartOutline />,
    redirect: "/activity",
  },
  {
    id: 4,
    title: "Create Thread",
    icon: <MdOutlinePostAdd />,
    redirect: "/create-thread",
  },
  {
    id: 5,
    title: "Communities",
    icon: <MdPeopleOutline />,
    redirect: "/communities",
  },
  {
    id: 6,
    title: "Profile",
    icon: <FaRegUser />,
    redirect: "/user-profile",
  },
];

const Leftbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();
  const { setUser } = useGlobalContext();

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("undefined");
    setUser(undefined);
    // router.push("/");
  };

  return (
    <>
      <div
        className="nav-icon lg:hidden w-10 h-10 flex justify-center items-center bg-[#f5f5f5] text-blue-500 text-[1.5rem] m-2 border-black border-2 rounded-[8px] absolute z-[2] "
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen ? <IoClose /> : <FaBars />}
      </div>
      <nav
        className={` h-full lg:flex flex-col items-center justify-between bg-[#1d1d1d] hidden ${
          navOpen ? "nav-active" : ""
        }`}
      >
        <div className="nav-list flex flex-col gap-8 py-6 mt-12">
          {itemlist.map((item) => {
            return (
              <li
                key={item.id}
                className={`flex items-center gap-2 cursor-pointer text-[1.1rem] ${
                  pathname === item.redirect ? "activated-nav" : ""
                }`}
                onClick={() => {
                  if (window.innerWidth < 1024) {
                    setNavOpen(!navOpen);
                  }
                }}
              >
                <Link href={item.redirect} className="flex items-center gap-2">
                  {item.icon} {item.title}
                </Link>
              </li>
            );
          })}
        </div>
        <div
          onClick={handleLogout}
          className="signout flex cursor-pointer gap-2 items-center p-4"
        >
          <MdOutlineLogout />
          <span>Logout</span>
        </div>
      </nav>
    </>
  );
};

export default Leftbar;
