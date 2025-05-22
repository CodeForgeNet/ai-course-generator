import React from "react";
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlinePlay,
} from "react-icons/hi";

function CourseDetail({ course }) {
  return (
    <div className="bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 border border-purple-100 dark:border-gray-800 p-8 rounded-2xl shadow-xl mt-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 dark:from-purple-800 dark:via-gray-900 dark:to-black shadow">
            <HiOutlineChartBar className="text-3xl text-purple-700 dark:text-yellow-200" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Skill Level
            </h2>
            <h2 className="font-bold text-lg text-purple-800 dark:text-yellow-100">
              {course?.level}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 dark:from-purple-800 dark:via-gray-900 dark:to-black shadow">
            <HiOutlineClock className="text-3xl text-purple-700 dark:text-yellow-200" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Duration
            </h2>
            <h2 className="font-bold text-lg text-purple-800 dark:text-yellow-100">
              {course?.courseOutput?.duration}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 dark:from-purple-800 dark:via-gray-900 dark:to-black shadow">
            <HiOutlineBookOpen className="text-3xl text-purple-700 dark:text-yellow-200" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              No. of Chapters
            </h2>
            <h2 className="font-bold text-lg text-purple-800 dark:text-yellow-100">
              {course?.courseOutput?.noOfChapters}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 dark:from-purple-800 dark:via-gray-900 dark:to-black shadow">
            <HiOutlinePlay className="text-3xl text-purple-700 dark:text-yellow-200" />
          </div>
          <div>
            <h2 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              Video Included
            </h2>
            <h2 className="font-bold text-lg text-purple-800 dark:text-yellow-100">
              {course?.includeVideo}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
