import { UserInputContext } from "@/app/_context/UserInputContext";
import CategoryList from "@/app/_shared/CategoryList";
import Image from "next/image";
import React, { useContext } from "react";

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <div className="px-10 md:px-20">
      <h2 className="my-5 text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Select the Course Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
        {CategoryList.map((item, index) => (
          <div
            key={item.name || index}
            className={`flex flex-col p-6 border items-center rounded-2xl shadow-lg hover:border-purple-500 hover:bg-fuchsia-50 dark:hover:bg-gray-900 cursor-pointer transition-all duration-200 ${
              userCourseInput?.category == item.name
                ? "border-purple-500 bg-fuchsia-50 dark:bg-gray-900"
                : "border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image src={item.icon} width={60} height={60} alt="item icon" />
            <h2 className="mt-3 text-lg font-semibold text-purple-700 dark:text-yellow-200">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
