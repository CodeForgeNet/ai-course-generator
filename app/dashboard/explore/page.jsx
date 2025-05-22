"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import React, { useEffect, useState } from "react";
import CourseCard from "../_components/CourseCard";
import { Button } from "@/components/ui/button";
import Footer from "@/app/_components/Footer";

function Explore() {
  const [courseList, setCourseList] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    GetAllCourse();
  }, [pageIndex]);

  const GetAllCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .limit(9)
      .offset(pageIndex * 9);
    setCourseList(result);
    console.log(result);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 ">
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
        <div className="mb-8 text-center">
          <h2 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow mb-2">
            Explore More Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore more projects built with AI by other users.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courseList.map((course, index) => (
            <div key={course.courseId || index}>
              <CourseCard course={course} displayUser={true} />
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center mt-10">
          <Button
            onClick={() => setPageIndex(pageIndex - 1)}
            disabled={pageIndex === 0}
            variant="outline"
            className="rounded-full px-6 py-2 font-semibold shadow transition-all"
          >
            ← Previous
          </Button>
          <span className="text-gray-500 dark:text-gray-400 text-base">
            Page {pageIndex + 1}
          </span>
          <Button
            className="bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white font-semibold px-8 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-yellow-500 transition-all"
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next →
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Explore;
