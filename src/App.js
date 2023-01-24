import AdminRoute from "AdminRoute";
import { useGlobalContext } from "global/context";
import InstituteRoute from "InstituteRoute";
import AdminLogin from "pages/Admin/AdminLogin";
import SetPassword from "pages/Auth/SetPassword";
import StudentRegister from "pages/Auth/StudentRegister";
import DashboardInstitute from "pages/college/DashboardInstitute";
import AllCourses from "pages/course/AllCourses";
import Certificate from "pages/course/certificate/Certificate";
import CourseDetails from "pages/course/CourseDetails";
import CourseViewPage from "pages/course/CourseViewPage";
import PrintCertificate from "pages/course/PrintCertificate/PrintCertificate";
import StudentDashboard from "pages/student/StudentDashboard";
import StudentEditProfile from "pages/student/StudentEditProfile";
import React, { Suspense, useEffect } from "react";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import StaticRoute from "StaticRoute";
import StudentRoute from "StudentRoute";
import Footer from "./layout/Footer";
import GotoTop from "./layout/GotoTop";
import Navbar from "./layout/Navbar";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Auth/Login";
import CyberSafety from "./pages/static/Topics/CyberSafety";
const Home = React.lazy(() => import("./pages/static/Home"));
const Modelg20Page = React.lazy(() => import("./pages/static/ModelG20Page"));
const News = React.lazy(() => import("./pages/static/News"));
const AllBlog = React.lazy(() => import("./pages/static/Blog/AllBlogs"));
const Cdri = React.lazy(() => import("./pages/static/Topics/Cdri"));
const Nip = React.lazy(() => import("./pages/static/Topics/Nip"));
const Course = React.lazy(() => import("./pages/static/Course"));
const CampusAmbass = React.lazy(() =>
  import("./pages/static/Topics/CampusAmbass")
);
const StartupIndia = React.lazy(() =>
  import("./pages/static/Topics/StartupIndia")
);
const DigitalTransform = React.lazy(() =>
  import("./pages/static/Topics/DigitalTransform")
);
const Presidency = React.lazy(() => import("./pages/static/Presidency"));
const Youth = React.lazy(() => import("./pages/static/Topics/Youth"));
const Error = React.lazy(() => import("./pages/Error"));
const Registration = React.lazy(() => import("./pages/Registration"));
const CampusRegister = React.lazy(() =>
  import("./pages/Registration/CampusRegister")
);
const Education = React.lazy(() => import("./pages/static/Topics/Education"));
const IndiaAchivements = React.lazy(() =>
  import("./pages/static/Topics/IndiaAchivements")
);
const SharedFuture = React.lazy(() =>
  import("./pages/static/Topics/SharedFuture")
);
const HealthWell = React.lazy(() => import("./pages/static/Topics/HealthWell"));
const FutureOfWork = React.lazy(() =>
  import("./pages/static/Topics/FutureOfWork")
);
const ClimateChange = React.lazy(() =>
  import("./pages/static/themes/ClimateChange")
);
const PeaceBuilding = React.lazy(() =>
  import("./pages/static/themes/PeaceBuilding")
);
const Team = React.lazy(() => import("./pages/static/Team"));
const WomenEmpower = React.lazy(() =>
  import("./pages/static/Topics/WomenEmpower")
);
const Life = React.lazy(() => import("./pages/static/LifeEnvironment"));
const Blog = React.lazy(() => import("./pages/static/Blog"));
const UnlearnRelearnReskill = React.lazy(() =>
  import("./pages/static/Topics/UnlearnRelearnReskill")
);
function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { userData, token, isLoggedIn } = useGlobalContext();
  console.log('userData', userData);
  const [activeRou, setActiveRou] = useState(3)
  const renderRoute = {
    0: <StudentRoute />,
    1: <InstituteRoute />,
    2: <AdminRoute />,
  };
  useEffect(() => {
    console.log('activated', userData.type)
    if (isLoggedIn) {
      setActiveRou(userData?.type)
    }
  }, [userData])
  // const requireAuthentication = (Component) => {
  //   // console.log("Login Status: ", isLoggedIn());
  //   return true ? <Component /> : <Navigate to="/login" />;
  // };
  // const requireUnAuthenticated = (Component) => {
  //   return !isLoggedIn() ? <Component /> : <Navigate to="/" />;
  // };
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-right"
        reverseOrder={true} />
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
        {isLoggedIn ? renderRoute[activeRou] : <StaticRoute />}
      </Suspense>
      <Footer />
      {/* dndbf */}
    </BrowserRouter>
  );
}

export default App;
