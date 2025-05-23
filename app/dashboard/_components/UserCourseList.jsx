"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { useUser } from "@clerk/nextjs";
import { eq } from "drizzle-orm";
import React, { useContext, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import { UserCourseListContext } from "@/app/_context/UserCourseListContext";

function UserCourseList() {
  const [courseList, setCourseList] = useState([]);
  const { userCourseList, setUserCourseList } = useContext(
    UserCourseListContext
  );
  const { user } = useUser();

  useEffect(() => {
    user && getUserCourses();
  }, [user]);

  const getUserCourses = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
      );
    setCourseList(result);
    setUserCourseList(result);
  };

  return (
    <div className="mt-10 px-2 sm:px-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-6 drop-shadow text-center">
        My AI Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {courseList?.length > 0
          ? courseList?.map((course) => (
              <CourseCard
                course={course}
                key={course.courseId}
                refreshData={() => getUserCourses()}
              />
            ))
          : [1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-full bg-slate-200 animate-pulse rounded-lg h-[280px] mt-5"
              ></div>
            ))}
      </div>
    </div>
  );
  // ...existing code...
}

export default UserCourseList;
