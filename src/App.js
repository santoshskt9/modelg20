import AdminRoute from "AdminRoute";
import { useGlobalContext } from "global/context";
import InstituteRoute from "InstituteRoute";
import DashboardInstitute from "pages/college/DashboardInstitute";
import AllCourses from "pages/course/AllCourses";
import Certificate from "pages/course/certificate/Certificate";
import CourseDetails from "pages/course/CourseDetails";
import CourseViewPage from "pages/course/CourseViewPage";
import StudentDashboard from "pages/student/StudentDashboard";
import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StaticRoute from "StaticRoute";
import StudentRoute from "StudentRoute";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Auth/Login";
const Course = React.lazy(() => import("./pages/static/Course"));
const Registration = React.lazy(() => import("./pages/Registration"));
const CampusRegister = React.lazy(() =>
  import("./pages/Registration/CampusRegister")
);
function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { userData, token, isLoggedIn } = useGlobalContext();
  console.log("userData", userData);
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-right" reverseOrder={true} />
      <Suspense
        fallback={
          <div className="w-100 d-flex vh-100 align-items-center justify-content-between">
            <img
              src="images/loading.gif"
              alt=""
              className="d-block mx-auto"
              style={{ maxWidth: "100%" }}
            />
          </div>
        }
      >
        {/* <StudentRoute /> */}
          <InstituteRoute />
          {/* <AdminRoute /> */}
        {/* <StaticRoute /> */}
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
