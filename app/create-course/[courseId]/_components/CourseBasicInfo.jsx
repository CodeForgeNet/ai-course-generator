import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlinePuzzle } from "react-icons/hi";
import EditCourseBasicInfo from "./EditCourseBasicInfo";
import Link from "next/link";

function CourseBasicInfo({ course, refreshData, edit = true }) {
  const [selectedFile, setSelectedFile] = useState();

  const saveImageToDb = async (url) => {
    try {
      await fetch("/api/upload/update-banner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course?.courseId,
          imageUrl: url,
        }),
      });
      refreshData(true);
    } catch (error) {
      console.error("Failed to save image to DB:", error);
    }
  };

  const onFileSelected = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data?.url) {
        setSelectedFile(data.url);
        await saveImageToDb(data.url);
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="p-8 md:p-12 rounded-2xl shadow-2xl bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 border border-purple-100 dark:border-gray-800 mt-8 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2 flex items-center gap-2">
            {course?.courseOutput?.courseName}
            {edit && (
              <EditCourseBasicInfo
                course={course}
                refreshData={() => refreshData(true)}
              />
            )}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-3 mb-4">
            {course?.courseOutput?.description}
          </p>
          <h2 className="font-semibold mt-2 flex gap-2 items-center text-purple-700 dark:text-yellow-200 text-lg">
            <HiOutlinePuzzle className="text-2xl" />
            {course?.category}
          </h2>
          {!edit && (
            <Link href={"/course/" + course?.courseId + "/start"}>
              <Button className="w-full mt-8 bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-yellow-500 transition-all">
                Start Learning
              </Button>
            </Link>
          )}
        </div>
        <div className="flex flex-col items-center">
          <label
            htmlFor="upload-image"
            className="w-full cursor-pointer group relative"
          >
            <Image
              src={selectedFile || course?.courseBanner || "/course_cover.svg"}
              alt={
                selectedFile
                  ? "Uploaded course banner"
                  : course?.courseBanner
                  ? "Course banner from database"
                  : "Default course banner"
              }
              width={600}
              height={300}
              className="w-full rounded-2xl h-[250px] object-cover shadow-lg border-2 border-purple-100 dark:border-gray-800 group-hover:scale-105 transition-transform duration-300"
            />
            {edit && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                <span className="text-white font-semibold text-lg">
                  Change Banner
                </span>
              </div>
            )}
          </label>
          {edit && (
            <input
              type="file"
              id="upload-image"
              className="hidden"
              onChange={onFileSelected}
              accept="image/*"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
