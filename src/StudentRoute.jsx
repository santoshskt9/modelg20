import StudentDashboard from "pages/student/StudentDashboard";
import PrintCertificate from "pages/course/PrintCertificate/PrintCertificate";
import StudentEditProfile from "pages/student/StudentEditProfile";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Auth/Login";
import CourseViewPage from "pages/course/CourseViewPage";
import AllCourses from "pages/course/AllCourses";
import CourseDetails from "pages/course/CourseDetails";

const StudentRoute = () => {
  return (
    <Routes>
      <Route exact path="/dashboard" element={<StudentDashboard />} />
      <Route path="/dashboard/editprofile" element={<StudentEditProfile />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/course/detail/:slug" element={<CourseDetails />} />
      <Route path="/dashboard/courseview/:courseId" element={<CourseViewPage />} />
      <Route path="/dashboard/certificate/:courseId" element={<PrintCertificate />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default StudentRoute;
