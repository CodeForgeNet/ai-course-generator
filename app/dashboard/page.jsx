import React from "react";
import AddCourse from "./_components/AddCourse";
import UserCourseList from "./_components/UserCourseList";
import Footer from "../_components/Footer";

function Dashboard() {
  return (
    <div>
      <AddCourse />

      {/* Display List of Course */}
      <UserCourseList />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
