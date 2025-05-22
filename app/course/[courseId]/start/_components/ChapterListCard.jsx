import React from "react";
import { HiOutlineClock } from "react-icons/hi2";

function ChapterListCard({ chapter, index, selected }) {
  return (
    <div
      className={
        "group px-5 py-4 mb-4 rounded-xl border transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl " +
        (selected
          ? "bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-300 border-yellow-300 text-white"
          : "border-purple-100 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90")
      }
    >
      <div className="flex items-center gap-5">
        <span
          className={
            "flex items-center justify-center w-10 h-10 rounded-full font-bold shadow group-hover:scale-110 transition-transform " +
            (selected
              ? "bg-white text-purple-600"
              : "bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-400 text-white")
          }
        >
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <h2
            className={
              "font-semibold text-base truncate " +
              (selected ? "text-white" : "text-purple-800 dark:text-yellow-200")
            }
          >
            {chapter?.name}
          </h2>
          <div
            className={
              "flex items-center gap-2 text-sm mt-1 " +
              (selected
                ? "text-yellow-200"
                : "text-purple-700 dark:text-yellow-300")
            }
          >
            <HiOutlineClock className="text-lg" />
            <span>{chapter?.duration}</span>
          </div>
          {chapter?.about && (
            <p
              className={
                "mt-1 text-sm line-clamp-1 " +
                (selected
                  ? "text-yellow-100"
                  : "text-gray-600 dark:text-gray-300")
              }
            >
              {chapter.about}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChapterListCard;
