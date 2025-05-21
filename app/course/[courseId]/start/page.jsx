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
      {/* <Header /> */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Chapter List Sidebar */}
      <div className="fixed md:w-72 hidden md:block h-screen border-r shadow-sm overflow-y-auto mt-16">
        <h2 className="font-medium text-lg bg-[rgb(135,59,149)] p-4 text-white">
          {course?.courseOutput?.courseName}
        </h2>
        <div>
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
              <ChapterListCard chapter={chapter} index={index} />
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
