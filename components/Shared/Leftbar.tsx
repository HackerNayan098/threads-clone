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
// import Cookies from "js-cookie";
import { signOut } from "next-auth/react";
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
  const { authentic, userData } = useGlobalContext();

  return (
    !authentic && (
      <>
        <div
          className="nav-icon lg:hidden w-10 h-10 flex justify-center items-center text-[1.5rem] m-4 border-white border-2 rounded-[8px] absolute z-[2] "
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <IoClose /> : <FaBars />}
        </div>
        <nav
          className={` h-full lg:flex flex-col items-center hidden ${
            navOpen ? "nav-active" : ""
          }`}
        >
          <div className="p-4 w-full mx-auto rounded-2xl bg-white flex gap-2 items-center mb-6">
            <div className="h-14 w-14 rounded-full bg-gray-300"></div>
            <div>
              <h4 className="text-black font-bold text-lg">{userData?.name}</h4>
              <p className="text-gray-500 text-lg">@{userData?.username}</p>
            </div>
          </div>
          <div className="nav-list flex flex-col rounded-2xl w-full p-4 mx-auto text-black bg-white">
            {itemlist.map((item) => {
              return (
                <li
                  key={item.id}
                  className={`flex items-center rounded-2xl font-semibold gap-2 py-5 px-6 cursor-pointer text-[1.1rem] ${
                    pathname === item.redirect ? "bg-blue-600 text-white" : ""
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
            className="signout flex cursor-pointer font-semibold gap-2 items-center py-4 px-8 my-6 bg-blue-600 rounded-full"
          >
            <MdOutlineLogout />
            <span>Logout</span>
          </div>
        </nav>
      </>
    )
  );
};

export default Leftbar;
