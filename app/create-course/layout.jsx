"use client";
import React, { useState } from "react";
import Header from "../dashboard/_components/Header";
import { UserInputContext } from "../_context/UserInputContext";

function CreateCourseLayout({ children }) {
  const [userCourseInput, setUserCourseInput] = useState([]);

  return (
    <div>
      <UserInputContext value={{ userCourseInput, setUserCourseInput }}>
        <>
          <Header />
          {children}
        </>
      </UserInputContext>
    </div>
  );
}

export default CreateCourseLayout;
