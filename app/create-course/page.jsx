"use client";

import { Button } from "@/components/ui/button";
import React, { useContext, useEffect, useState } from "react";
import {
  HiSquares2X2,
  HiLightBulb,
  HiClipboardDocumentCheck,
} from "react-icons/hi2";
import SelectCategory from "./_components/SelectCategory";
import TopicDescription from "./_components/TopicDescription";
import SelectOption from "./_components/SelectOption";
import { UserInputContext } from "../_context/UserInputContext";
import { GenerateCourseLayout_AI } from "@/configs/AiModel";
import LoadingDialog from "./_components/LoadingDialog";
import { db } from "@/configs/db";
import { CourseList } from "@/configs/Schema";
import uuid4 from "uuid4";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

function CreateCourse() {
  const StepperOption = [
    {
      id: 1,
      name: "Category",
      icon: <HiSquares2X2 />,
    },
    {
      id: 2,
      name: "Topic & Desc",
      icon: <HiLightBulb />,
    },
    {
      id: 3,
      name: "Options",
      icon: <HiClipboardDocumentCheck />,
    },
  ];

  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const [loading, setLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // For debugging
    // console.log(userCourseInput);
  }, [userCourseInput]);

  //? Used to check next button enable or disable status
  const checkStatus = () => {
    if (userCourseInput?.length == 0) {
      return true;
    }
    if (
      activeIndex == 0 &&
      (userCourseInput?.category?.length == 0 ||
        userCourseInput?.category == undefined)
    ) {
      return true;
    }
    if (
      activeIndex == 1 &&
      (userCourseInput?.topic?.length == 0 ||
        userCourseInput?.topic?.length == undefined)
    ) {
      return true;
    } else if (
      activeIndex == 2 &&
      (userCourseInput?.level == undefined ||
        userCourseInput?.duration == undefined ||
        userCourseInput?.displayVideo == undefined ||
        userCourseInput?.noOfChapter == undefined)
    ) {
      return true;
    }
    return false;
  };

  const GenerateCourseLayout = async () => {
    setLoading(true);
    const BASIC_PROMPT =
      "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration:";
    const USER_INPUT_PROMPT =
      "Category: " +
      userCourseInput?.category +
      ", Topic: " +
      userCourseInput?.topic +
      ", Level:" +
      userCourseInput?.level +
      ", Duration: " +
      userCourseInput?.duration +
      ", NoOf Chapters:" +
      userCourseInput?.noOfChapter +
      ", in JSON format";
    const FINAL_PROMPT = BASIC_PROMPT + USER_INPUT_PROMPT;
    // console.log(FINAL_PROMPT);
    const result = await GenerateCourseLayout_AI.sendMessage(FINAL_PROMPT);
    setLoading(false);
    SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
  };

  const SaveCourseLayoutInDb = async (courseLayout) => {
    var id = uuid4(); //course id
    setLoading(true);
    await db.insert(CourseList).values({
      courseId: id,
      name: userCourseInput?.topic,
      level: userCourseInput?.level,
      category: userCourseInput?.category,
      courseOutput: courseLayout,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
      userProfileImage: user?.imageUrl,
    });
    setLoading(false);
    router.replace("/create-course/" + id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-yellow-50 to-pink-50 dark:from-gray-900 dark:via-gray-950 dark:to-purple-950 flex flex-col">
      {/* Stepper */}
      <div className="flex flex-col justify-center items-center mt-10">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow mb-2">
          Create Course
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 text-center max-w-xl">
          Build your personalized AI-powered course in just a few steps!
        </p>
        <div className="flex items-center w-full max-w-2xl">
          {StepperOption.map((item, index) => (
            <React.Fragment key={item.id}>
              <div className="flex flex-col items-center w-[50px] md:w-[100px]">
                <div
                  className={`p-4 md:p-5 rounded-full shadow-lg border-4 transition-all duration-300 text-2xl md:text-3xl
                    ${
                      activeIndex >= index
                        ? "bg-gradient-to-br from-purple-500 via-pink-400 to-yellow-400 text-white border-yellow-300 scale-110"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-400 border-gray-200 dark:border-gray-700"
                    }
                  `}
                >
                  {item.icon}
                </div>
                <h2 className="hidden md:block md:text-sm mt-2 font-semibold text-gray-700 dark:text-gray-200">
                  {item.name}
                </h2>
              </div>
              {index !== StepperOption.length - 1 && (
                <div
                  className={`h-1 w-[40px] md:w-[80px] lg:w-[120px] rounded-full mx-2 transition-all duration-300
                    ${
                      activeIndex - 1 >= index
                        ? "bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400"
                        : "bg-gray-300 dark:bg-gray-700"
                    }
                  `}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-20 lg:px-44 mt-10 flex-1">
        {/* Component */}
        <div className="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-xl border border-purple-100 dark:border-gray-800 p-6 md:p-10 transition-all duration-300">
          {activeIndex === 0 ? (
            <SelectCategory />
          ) : activeIndex === 1 ? (
            <TopicDescription />
          ) : (
            <SelectOption />
          )}

          {/* Next Previous Button */}
          <div className="flex justify-between mt-10">
            <Button
              disabled={activeIndex === 0}
              variant="outline"
              onClick={() => setActiveIndex(activeIndex - 1)}
              className="font-semibold px-6 py-2 rounded-full shadow transition-all"
            >
              Previous
            </Button>
            {activeIndex < 2 && (
              <Button
                disabled={checkStatus()}
                onClick={() => setActiveIndex(activeIndex + 1)}
                className="bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white font-semibold px-8 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-yellow-500 transition-all"
              >
                Next
              </Button>
            )}
            {activeIndex === 2 && (
              <Button
                disabled={checkStatus()}
                onClick={() => GenerateCourseLayout()}
                className="bg-gradient-to-r from-purple-500 via-pink-400 to-yellow-400 text-white font-semibold px-8 py-2 rounded-full shadow-lg hover:from-purple-600 hover:to-yellow-500 transition-all"
              >
                Generate Course Layout
              </Button>
            )}
          </div>
        </div>
      </div>
      <LoadingDialog loading={loading} />
    </div>
  );
}

export default CreateCourse;
