import Login from "pages/Auth/Login";
import StudentRegister from "pages/Auth/StudentRegister";
import DashboardInstitute from "pages/college/DashboardInstitute";
import InstituteEditProfile from "pages/college/InstituteEditProfile";
import React from "react";
import { Route, Routes } from "react-router-dom";

const InstituteRoute = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardInstitute />} />
      <Route path="/dashboard/editprofile" element={<InstituteEditProfile />} />
      <Route path="/college/student/register" element={<StudentRegister />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default InstituteRoute;
