"use client";
import Image from "next/image";
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import { HiBookOpen, HiMiniEllipsisVertical } from "react-icons/hi2";
import DropdownOption from "./DropdownOption";
import Link from "next/link";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import { eq } from "drizzle-orm";

// 3D Card Context and Hooks
const MouseEnterContext = createContext(undefined);

function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
}

export function CardContainer({ children, className, containerClassName }) {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 18;
    const y = (e.clientY - top - height / 2) / 18;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = () => setIsMouseEntered(true);

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current)
      containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`flex items-center justify-center ${
          containerClassName || ""
        }`}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`relative transition-all duration-200 ease-linear ${
            className || ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function CardBody({ children, className }) {
  const [isMouseEntered] = useMouseEnter();
  return (
    <div
      className={`mt-8 mb-10 w-[340px] h-[430px] flex flex-col justify-between rounded-xl border border-black/10 dark:border-white/20 shadow-md p-4 [transform-style:preserve-3d] ${
        isMouseEntered
          ? // ? "bg-purple-100 dark:bg-gray-900"
            // : "bg-white dark:bg-black"
            "bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 dark:from-purple-900 dark:via-gray-900 dark:to-black"
          : "bg-gradient-to-br from-white via-purple-50 to-yellow-50 dark:from-black dark:via-gray-900 dark:to-purple-950"
      } ${className || ""}`}
    >
      {children}
    </div>
  );
}

export function CardItem({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) {
  const ref = useRef(null);
  const [isMouseEntered] = useMouseEnter();

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [
    isMouseEntered,
    translateX,
    translateY,
    translateZ,
    rotateX,
    rotateY,
    rotateZ,
  ]);

  return (
    <Tag
      ref={ref}
      className={`transition duration-200 ease-linear ${className || ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// The actual CourseCard
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
    <CardContainer>
      <CardBody>
        <CardItem translateZ={40} className="block">
          <Link href={"/course/" + course?.courseId}>
            <Image
              src={course?.courseBanner}
              width={300}
              height={200}
              className="w-full h-[180px] object-cover rounded-lg"
              alt={course?.courseOutput?.courseName || "Course Banner"}
            />
          </Link>
        </CardItem>

        <CardItem translateZ={30} className="mt-3">
          <Link href={"/course/" + course?.courseId}>
            <h2 className="font-medium text-lg flex justify-between items-center">
              {course?.courseOutput?.courseName}
              {!displayUser && (
                <DropdownOption handleOnDelete={() => handleOnDelete()}>
                  <HiMiniEllipsisVertical />
                </DropdownOption>
              )}
            </h2>
          </Link>
        </CardItem>
        <CardItem translateZ={20} className="text-sm text-gray-400 my-1">
          {course?.category}
        </CardItem>
        <div className="flex items-center justify-between mt-2">
          <CardItem
            translateZ={15}
            className="flex gap-2 items-center p-1 bg-purple-50 text-[rgb(135,59,149)] text-sm rounded-sm"
          >
            <HiBookOpen />
            {course?.courseOutput?.noOfChapters} Chapters
          </CardItem>
          <CardItem
            translateZ={15}
            className="text-sm bg-purple-50 text-[rgb(135,59,149)] p-1 rounded-sm"
          >
            {course?.level}
          </CardItem>
        </div>
        {displayUser && (
          <CardItem translateZ={25} className="flex gap-2 items-center mt-2">
            <Image
              src={course?.userProfileImage}
              width={35}
              height={35}
              className="rounded-full"
              alt={course?.userName || "User profile image"}
            />
            <h2 className="text-sm">{course?.userName}</h2>
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  );
}

export default CourseCard;
