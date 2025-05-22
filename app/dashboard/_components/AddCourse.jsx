"use client";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useContext } from "react";
import { HiPlusCircle } from "react-icons/hi2";

function AddCourse() {
  const { user } = useUser();
  const { userCourseList } = useContext(UserCourseListContext);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 m-2 p-6 rounded-2xl bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 shadow-lg border border-purple-100 dark:border-gray-800 mb-8">
      <div>
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-1">
          Hello, <span className="font-bold">{user?.fullName}</span>
        </h2>
        <p className="text-base text-gray-600 dark:text-gray-300 max-w-md">
          Create a new course with AI, share with friends, and earn from it.
          Unlock your teaching potential!
        </p>
        {userCourseList >= 5 && (
          <div className="mt-2 text-sm text-red-500 font-semibold">
            You have reached your free course limit.{" "}
            <Link
              href="/dashboard/upgrade"
              className="underline text-purple-700 dark:text-yellow-200"
            >
              Upgrade now
            </Link>{" "}
            to create more!
          </div>
        )}
      </div>
      <Link
        href={userCourseList >= 5 ? "/dashboard/upgrade" : "/create-course"}
        className="w-full md:w-auto"
      >
        <Button
          className="w-full md:w-auto flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:from-purple-600 hover:to-yellow-500 transition-all text-lg"
          size="lg"
        >
          <HiPlusCircle className="text-2xl" />
          Create AI Course
        </Button>
      </Link>
    </div>
  );
}

export default AddCourse;
