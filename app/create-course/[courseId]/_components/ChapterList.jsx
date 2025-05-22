import React from "react";
import { HiOutlineClock, HiOutlineCheckCircle } from "react-icons/hi";
import EditChapters from "./EditChapters";

function ChapterList({ course, refreshData, edit = true }) {
  const chapters = course?.courseOutput?.chapters;

  return (
    <div className="mt-6">
      <h2 className="font-extrabold text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-4 drop-shadow">
        Chapters
      </h2>
      <div className="space-y-5">
        {Array.isArray(chapters) && chapters.length > 0 ? (
          chapters.map((chapter, index) => (
            <div
              key={chapter?.name || index}
              className="flex items-center justify-between p-6 rounded-2xl shadow-lg bg-white/80 dark:bg-gray-900/80 border border-purple-100 dark:border-gray-800 transition-all duration-200 hover:scale-[1.015] hover:shadow-xl"
            >
              <div className="flex gap-5 items-center">
                <div className="flex-none h-12 w-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-400 flex items-center justify-center text-white text-xl font-bold shadow">
                  {index + 1}
                </div>
                <div>
                  <h2 className="font-semibold text-lg flex items-center gap-2">
                    {chapter?.name}
                    {edit && (
                      <EditChapters
                        course={course}
                        index={index}
                        refreshData={refreshData}
                      />
                    )}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {chapter?.about}
                  </p>
                  <p className="flex gap-2 text-purple-700 dark:text-yellow-200 items-center mt-1 text-sm font-medium">
                    <HiOutlineClock />
                    {chapter?.duration}
                  </p>
                </div>
              </div>
              <HiOutlineCheckCircle className="text-3xl text-green-400 dark:text-yellow-300 flex-none" />
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 dark:text-gray-500 py-8">
            No chapters found.
          </div>
        )}
      </div>
    </div>
  );
}

export default ChapterList;
