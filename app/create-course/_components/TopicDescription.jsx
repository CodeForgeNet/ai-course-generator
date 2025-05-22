import { UserInputContext } from "@/app/_context/UserInputContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useContext } from "react";

function TopicDescription() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="mx-4 md:mx-20 lg:mx-44 py-8">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2 drop-shadow">
          Course Topic & Description
        </h2>
      </div>
      {/* Input Topic */}
      <div className="mt-5">
        <label className="block mb-2 text-base font-semibold text-purple-700 dark:text-yellow-200">
          💡 Write the topic for which you want to generate a course (e.g.,
          Python Course, Yoga, etc.):
        </label>
        <Input
          placeholder="Topic"
          className="h-14 text-xl rounded-xl shadow border-2 border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-400"
          defaultValue={userCourseInput?.topic}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>

      <div className="mt-8">
        <label className="block mb-2 text-base font-semibold text-purple-700 dark:text-yellow-200">
          📝 Tell us more about your course, what you want to include in the
          course <span className="italic text-gray-400">(Optional)</span>
        </label>
        <Textarea
          placeholder="About your course"
          className="h-24 text-xl rounded-xl shadow border-2 border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-400"
          defaultValue={userCourseInput?.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </div>
    </div>
  );
}

export default TopicDescription;
