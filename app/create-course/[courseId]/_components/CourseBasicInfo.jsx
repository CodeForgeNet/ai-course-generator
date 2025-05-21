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
      // await fetch("/api/update-banner", {
      await fetch("/api/upload/update-banner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          courseId: course?.courseId,
          imageUrl: url,
        }),
      });
      refreshData(true); // optionally refresh data after update
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
        setSelectedFile(data.url); // Use Cloudinary URL
        await saveImageToDb(data.url); // Persist to Drizzle ORM
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="p-10 border rounded-xl shadow-sm mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h2 className="text-2xl font-bold gap-2">
            {course?.courseOutput?.courseName}
            {edit && (
              <EditCourseBasicInfo
                course={course}
                refreshData={() => refreshData(true)}
              />
            )}
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            {course?.courseOutput?.description}
          </p>
          <h2 className="font-medium mt-2 flex gap-2 items-center text-[rgb(199,59,238)]">
            <HiOutlinePuzzle />
            {course?.category}
          </h2>

          {!edit && (
            <Link href={"/course/" + course?.courseId + "/start"}>
              <Button className="w-full mt-5">Start</Button>
            </Link>
          )}
        </div>
        <div>
          {/* <label htmlFor="upoad-image">
            <Image
              src={
                selectedFile
                  ? selectedFile
                  : course?.courseBanner || "/course_cover.svg"
              }
              alt={
                selectedFile
                  ? "Uploaded course banner"
                  : course?.courseBanner
                  ? "Course banner from database"
                  : "Default course banner"
              }
              width={300}
              height={300}
              className="w-full rounded-xl h-[250px] object-cover cursor-pointer"
            />
          </label> */}

          <label htmlFor="upload-image">
            <Image
              // src={selectedFile ? selectedFile : "/course_cover.svg"}
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
              className="w-full rounded-xl h-[250px] object-cover cursor-pointer"
            />
          </label>

          {edit && (
            <input
              type="file"
              id="upload-image"
              className="opacity-0 "
              onChange={onFileSelected}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseBasicInfo;
