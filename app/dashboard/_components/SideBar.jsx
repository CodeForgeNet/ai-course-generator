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
    {
      id: 3,
      name: "Upgrade",
      icon: <HiMiniShieldCheck />,
      path: "/dashboard/upgrade",
    },
  ];

  const path = usePathname();

  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md  ">
      {/* <Image src={"/eduGen.svg"} width={160} height={100} /> */}
      <Image src={"/eduGen.svg"} width={160} height={100} alt="EduGen logo" />

      <hr className="my-5" />

      <ul>
        {Menu.map((item, index) => (
          // <Link href={item.path}>
          <Link key={item.id} href={item.path}>
            <div
              className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100 hover:text-black rounded-lg mb-2 ${
                item.path == path && "bg-gray-100  text-black"
              } `}
            >
              <div className="text-2xl ">{item.icon}</div>
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </ul>

      <div className="absolute bottom-10 w-[80%] ">
        <Progress value={(userCourseList?.length / 10) * 100} />
        <h2 className="text-sm my-2">
          {userCourseList?.length} out of 10 Course created
        </h2>
        <h2 className="text-xs text-gray-500">
          upgrade your plan for unlimited course generator
        </h2>
      </div>
    </div>
  );
}

export default SideBar;
