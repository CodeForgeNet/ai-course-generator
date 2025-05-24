"use client";

import { db } from "@/configs/db";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
// import React, { useEffect, useState } from "react";
import React, { useEffect, useState, use } from "react";
import CourseBasicInfo from "../_components/CourseBasicInfo";
import { useRouter } from "next/navigation";
import { CourseList } from "@/configs/Schema";
import { HiClipboardDocumentCheck } from "react-icons/hi2";

// function FinishScreen({ params }) {
function FinishScreen({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { user } = useUser();
  const [course, setCourse] = useState([]);
  const router = useRouter();

  const [host, setHost] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHost(window.location.origin);
    }
    params && GetCourse();
    // eslint-disable-next-line
  }, [params, user]);

  useEffect(() => {
    params && GetCourse();
  }, [params, user]);

  const GetCourse = async () => {
    const result = await db
      .select()
      .from(CourseList)
      .where(
        and(
          eq(CourseList.courseId, params?.courseId),
          eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
      );
    setCourse(result[0]);
    console.log("DB result: ", result);
  };
  return (
    <div className="px-10 md:px-20 lg:px-44 my-7">
      <h2 className="text-center font-bold text-3xl my-6 text-[rgb(135,59,149)]">
        Congrats! Your course is Ready
      </h2>

      <CourseBasicInfo
        course={course}
        refreshData={() => console.log()}
        edit={false}
      />

      {/* <h3 className="mt-4">Course URL: </h3>
      <h2 className="text-center text-gray-400 border p-2 rounded-md flex gap-5 items-center">
        {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
        <HiClipboardDocumentCheck
          className="h-5 w-5 cursor-pointer"
          onClick={async () =>
            await navigator.clipboard.writeText(
              process.env.NEXT_PUBLIC_HOST_NAME +
                "/course/view/" +
                course?.courseId
            )
          }
        />
      </h2> */}
      <h3 className="mt-4">Course URL: </h3>
      <h2 className="text-center text-gray-400 border p-2 rounded-md flex gap-5 items-center">
        {host}/course/{course?.courseId}
        <HiClipboardDocumentCheck
          className="h-5 w-5 cursor-pointer"
          onClick={async () =>
            await navigator.clipboard.writeText(
              `${host}/course/${course?.courseId}`
            )
          }
        />
      </h2>
    </div>
  );
}

export default FinishScreen;
