"use client";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import {
  HiHome,
  HiMiniSquare3Stack3D,
  HiMiniShieldCheck,
  HiOutlinePower,
} from "react-icons/hi2";

function SideBar() {
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  );
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiMiniSquare3Stack3D />,
      path: "/dashboard/explore",
    },
  ];

  const path = usePathname();

  return (
    <aside className="fixed h-full md:w-64 p-0 shadow-xl bg-gradient-to-b from-purple-100 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 flex flex-col justify-between z-40 border-r border-purple-100 dark:border-gray-800 transition-all">
      <div>
        <div className="flex flex-col items-center py-8">
          <Link href={"/dashboard"}>
            <Image
              src={"/eduGen.svg"}
              width={120}
              height={80}
              alt="EduGen logo"
              className="drop-shadow-lg"
            />
          </Link>
        </div>
        <hr className="my-4 border-purple-200 dark:border-gray-700" />

        <ul className="px-4">
          {Menu.map((item) => (
            <li key={item.id} className="mb-2">
              <Link href={item.path}>
                <div
                  className={`flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 cursor-pointer rounded-lg transition-all duration-200 font-medium group
                    hover:bg-gradient-to-r hover:from-purple-200 hover:to-yellow-100 hover:text-purple-900 dark:hover:from-purple-900 dark:hover:to-gray-900 dark:hover:text-yellow-200
                    ${
                      item.path == path
                        ? "bg-gradient-to-r from-purple-200 to-yellow-100 text-purple-900 dark:from-purple-900 dark:to-gray-900 dark:text-yellow-200 shadow"
                        : ""
                    }
                  `}
                >
                  <span className="text-2xl transition-transform group-hover:scale-110">
                    {item.icon}
                  </span>
                  <span className="text-base">{item.name}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 pb-8 pt-4">
        <div className="mb-2">
          <Progress
            value={(userCourseList?.length / 10) * 100}
            className="h-2 rounded-full bg-purple-200 dark:bg-gray-800"
          />
        </div>
        <h2 className="text-sm font-semibold my-1 text-purple-800 dark:text-yellow-200">
          {userCourseList?.length} out of 10 Courses created
        </h2>
        <h2 className="text-xs text-gray-500 dark:text-gray-400">
          You can create 10 courses only. <br />
          <b>Upgrade Plan will come soon</b>
        </h2>
        {/* <button className="mt-4 w-full py-2 rounded-lg bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white font-semibold shadow hover:from-purple-600 hover:to-yellow-500 transition-all duration-200 text-sm">
          Upgrade Plan
        </button> */}
      </div>
    </aside>
  );
}

export default SideBar;
