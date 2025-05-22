"use client";

import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/Schema";
import { and, eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
import React, { use, useEffect, useState } from "react";
import ChapterListCard from "./_components/ChapterListCard";
import ChapterContent from "./_components/ChapterContent";
import Header from "@/app/_components/Header";

function CourseStart({ params }) {
  const { courseId } = use(params);
  const [course, setCourse] = useState();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState();

  useEffect(() => {
    GetCourse();
  }, []);

  //?   Used to get Course Info by course Id
  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      // .where(eq(CourseList?.courseId, params?.courseId));
      .where(eq(CourseList?.courseId, courseId));

    setCourse(result[0]);
  };

  const GetSelectedChapterContent = async (chapterId) => {
    const result = await db
      .select()
      .from(Chapters)
      .where(
        and(
          eq(Chapters.chapterId, chapterId),
          eq(Chapters.courseId, course?.courseId)
        )
      );

    setChapterContent(result[0]);
    console.log(result);
  };

  return (
    <div>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Chapter List Sidebar */}
      <div className="fixed top-30 left-0 md:w-72 hidden md:block h-[calc(100vh-4rem)] border-r shadow-sm overflow-y-auto bg-white dark:bg-gray-900 z-40">
        <div className="sticky top-0 z-20 bg-white dark:bg-gray-900 border-b border-purple-200 dark:border-gray-800 shadow-lg rounded-b-2xl">
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent px-6 py-5 text-center">
            {course?.courseOutput?.courseName}
          </h2>
        </div>
        <div className="pb-6">
          {" "}
          {course?.courseOutput?.chapters.map((chapter, index) => (
            <div
              key={index}
              className={`cursor-pointer hover:bg-purple-50 ${
                selectedChapter?.name == chapter?.name && "bg-purple-100"
              }`}
              onClick={() => {
                setSelectedChapter(chapter);
                GetSelectedChapterContent(index);
              }}
            >
              <ChapterListCard
                chapter={chapter}
                index={index}
                selected={selectedChapter?.name === chapter?.name}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content Div */}
      <div className="md:ml-72 mt-16">
        <ChapterContent chapter={selectedChapter} content={chapterContent} />
      </div>
    </div>
  );
}

export default CourseStart;
