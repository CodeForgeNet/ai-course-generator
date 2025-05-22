import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { UserInputContext } from "@/app/_context/UserInputContext";

function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="px-6 md:px-20 lg:px-44 py-6">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-2 drop-shadow">
          Course Options
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Customize your course experience with these options.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-purple-700 dark:text-yellow-200">
            🎓 Difficulty Level
          </label>
          <Select
            onValueChange={(value) => handleInputChange("level", value)}
            defaultValue={userCourseInput?.level}
          >
            <SelectTrigger className="h-14 text-lg rounded-xl shadow border-2 border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-400">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-purple-700 dark:text-yellow-200">
            🕰️ Course Duration
          </label>
          <Select
            onValueChange={(value) => handleInputChange("duration", value)}
            defaultValue={userCourseInput?.duration}
          >
            <SelectTrigger className="h-14 text-lg rounded-xl shadow border-2 border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-400">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 Hours">1 Hour</SelectItem>
              <SelectItem value="2 Hours">2 Hours</SelectItem>
              <SelectItem value="More than 3 Hours">
                More than 3 Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-purple-700 dark:text-yellow-200">
            ▶️ Add Video
          </label>
          <Select
            onValueChange={(value) => handleInputChange("displayVideo", value)}
            defaultValue={userCourseInput?.displayVideo}
          >
            <SelectTrigger className="h-14 text-lg rounded-xl shadow border-2 border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-400">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-base font-semibold text-purple-700 dark:text-yellow-200">
            📖 No of Chapters
          </label>
          <Input
            type="number"
            min={1}
            className="h-14 text-lg rounded-xl shadow border-2 border-purple-100 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-purple-400"
            defaultValue={userCourseInput?.noOfChapter}
            onChange={(event) =>
              handleInputChange("noOfChapter", event.target.value)
            }
            placeholder="Enter number of chapters"
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
