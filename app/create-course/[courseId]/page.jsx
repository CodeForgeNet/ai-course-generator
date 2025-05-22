"use client";

import { db } from "@/configs/db";
import { Chapters, CourseList } from "@/configs/Schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "@/components/ui/button";
import { GenerateChapterContent_AI } from "@/configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "@/configs/service";
import { useRouter } from "next/navigation";

function CourseLayout({ params }) {
  const courseParams = React.use(params);
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    //   params && GetCourse();
    // }, [params, user]);
    courseParams && GetCourse();
  }, [courseParams, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          // eq(CourseList.courseId, params?.courseId),
          eq(CourseList.courseId, courseParams?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
    console.log("DB result: ", result);
  };

  const GenerateChapterContent = () => {
    setLoading(true);
    const chapters = course?.courseOutput?.chapters;
    chapters.forEach(async (chapter, index) => {
      const PROMPT =
        "Explain the concept in Detail on Topic:" +
        course?.name +
        ", Chapter:" +
        chapter?.name +
        ", in JSON Format with list of array with field as title, explanation on give chapter in detail, Code Example(Code field in <precode> format) if applicable";
      console.log(PROMPT);
      // if (index < 3) {
      try {
        let videoId = "";

        //todo:  Generate Video URL
        service.getVideos(course?.name + ":" + chapter?.name).then((resp) => {
          console.log(resp);
          videoId = resp[0]?.id?.videoId;
        });

        //todo: Generate Chapter Content
        const result = await GenerateChapterContent_AI.sendMessage(PROMPT);
        console.log(result.response?.text());
        const content = JSON.parse(result.response?.text());

        //todo: Save Chapter Content + Video URL
        await db.insert(Chapters).values({
          chapterId: index,
          courseId: course?.courseId,
          content: content,
          videoId: videoId,
        });
        setLoading(false);
      } catch (e) {
        setLoading(false);
        console.log(e);
      }
      await db.update(CourseList).set({
        publish: true,
      });
      router.replace("/create-course/" + course?.courseId + "/finish");
      // }
    });
  };

  return (
    <div className="mt-10 px-7 md:px-20 lg:px-44 ">
      <h2 className="font-bold text-center text-2xl ">Course Layout</h2>

      <LoadingDialog loading={loading} />
      {/* Basic Info */}
      <CourseBasicInfo course={course} refreshData={() => GetCourse()} />

      {/* Course Detail */}
      <CourseDetail course={course} />

      {/* List of Lesson */}
      <ChapterList course={course} refreshData={() => GetCourse()} />

      <Button onClick={GenerateChapterContent} className="my-10">
        Generate Course Content
      </Button>
    </div>
    // <div className="mt-10 px-4 md:px-16 lg:px-32">
    //   <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-10 drop-shadow text-center tracking-tight">
    //     Course Layout
    //   </h2>

    //   <LoadingDialog loading={loading} />

    //   {/* Basic Info */}
    //   <div className="mb-10">
    //     <CourseBasicInfo course={course} refreshData={() => GetCourse()} />
    //   </div>

    //   {/* Course Detail */}
    //   <div className="mb-10">
    //     <CourseDetail course={course} />
    //   </div>

    //   {/* List of Lessons */}
    //   <div className="mb-10">
    //     <ChapterList course={course} refreshData={() => GetCourse()} />
    //   </div>

    //   <div className="flex justify-center">
    //     <Button
    //       onClick={GenerateChapterContent}
    //       className="my-10 px-10 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white shadow-lg hover:from-purple-600 hover:to-yellow-500 transition-all"
    //     >
    //       Generate Course Content
    //     </Button>
    //   </div>
    // </div>
  );
}

export default CourseLayout;
