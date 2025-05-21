import React from "react";
import { HiOutlineClock, HiOutlineCheckCircle } from "react-icons/hi";
import EditChapters from "./EditChapters";

function ChapterList({ course, refreshData, edit = true }) {
  return (
    <div className="mt-3">
      <h2 className="font-semibold text-xl">Chapters</h2>
      <div className="mt-2">
        {course?.courseOutput?.chapters.map((chapter, index) => (
          // <div className="border p-5 rounded-lg mb-4 flex items-center justify-between">
          <div
            key={chapter?.name || index}
            className="border p-5 rounded-lg mb-4 flex items-center justify-between"
          >
            <div className="flex gap-5 items-center">
              <h2 className="bg-[rgb(135,59,149)] flex-none h-10 w-10 text-white rounded-full text-center p-2">
                {index + 1}
              </h2>
              <div>
                <h2 className="font-semibold text-lg">
                  {chapter?.name}
                  {edit && (
                    <EditChapters
                      course={course}
                      index={index}
                      refreshData={refreshData}
                    />
                  )}
                </h2>
                <p className=" text-sm text-gray-600 ">{chapter?.about}</p>
                <p className="flex gap-2 text-[rgb(135,59,149)] items-center">
                  <HiOutlineClock />
                  {chapter?.duration}
                </p>
              </div>
            </div>
            <HiOutlineCheckCircle className="text-4xl text-gray-300 flex-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
