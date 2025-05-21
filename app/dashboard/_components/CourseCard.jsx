import Image from "next/image";
import React from "react";
import { HiBookOpen, HiMiniEllipsisVertical } from "react-icons/hi2";
import DropdownOption from "./DropdownOption";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";
import Link from "next/link";

function CourseCard({ course, refreshData, displayUser = false }) {
  const handleOnDelete = async () => {
    const resp = await db
      .delete(CourseList)
      .where(eq(CourseList.id, course?.id))
      .returning({ id: CourseList?.id });

    if (resp) {
      refreshData();
    }
  };

  return (
    <div className="mt-4 shadow-sm rounded-lg border-2 p-3 cursor-pointer hover:border-[rgb(135,59,149)]">
      <Link href={"/course/" + course?.courseId}>
        <Image
          src={course?.courseBanner}
          width={300}
          height={200}
          className="w-full h-[200px] object-cover rounded-lg"
          alt={course?.courseOutput?.courseName || "Course Banner"}
        />
      </Link>
      <div className="p-2">
        <h2 className="font-medium text-lg flex justify-between items-center">
          {course?.courseOutput?.courseName}
          {!displayUser && (
            <DropdownOption handleOnDelete={() => handleOnDelete()}>
              <HiMiniEllipsisVertical />
            </DropdownOption>
          )}
        </h2>
        <p className="text-sm text-gray-400 my-1">{course?.category}</p>
        <div className="flex items-center justify-between">
          <h2 className="flex gap-2 items-center p-1 bg-purple-50 text-[rgb(135,59,149)] text-sm rounded-sm">
            <HiBookOpen />
            {course?.courseOutput?.noOfChapters} Chapters
          </h2>
          <h2 className="text-sm bg-purple-50 text-[rgb(135,59,149)] p-1 rounded-sm">
            {course?.level}
          </h2>
        </div>
        {displayUser && (
          <div className="flex gap-2 items-center mt-2">
            <Image
              src={course?.userProfileImage}
              width={35}
              height={35}
              className="rounded-full"
              alt={course?.userName || "User profile image"}
            />
            <h2 className="text-sm">{course?.userName}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseCard;
