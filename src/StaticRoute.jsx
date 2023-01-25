import Login from "pages/Auth/Login";
import React from "react";

import { Route, Routes } from "react-router-dom";
import SetPassword from "pages/Auth/SetPassword";
import AdminLogin from "pages/Admin/AdminLogin";
import StudentRegister from "pages/Auth/StudentRegister";
import CourseDetails from "pages/course/CourseDetails";
import AllCourses from "pages/course/AllCourses";
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
const StaticRoute = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/team" element={<Team />} />
      <Route path="/campussherpa-registration" element={<CampusRegister />} />
      <Route path="/model-g20" element={<Modelg20Page />} />
      <Route path="/life-environment-intiative" element={<Life />} />
      <Route path="/g20-genius-certification" element={<Course />} />
      <Route path="/g20-campus-sherpa" element={<CampusAmbass />} />
      <Route path="/startup-india" element={<StartupIndia />} />
      <Route path="/shared-future" element={<SharedFuture />} />
      <Route path="/health-well-being-and-sports" element={<HealthWell />} />
      <Route path="/future-of-work" element={<FutureOfWork />} />
      <Route path="/g20-presidency" element={<Presidency />} />
      <Route path="/youth-community" element={<Youth />} />
      <Route path="/achievements-of-india" element={<IndiaAchivements />} />
      <Route path="/digital-transform" element={<DigitalTransform />} />
      <Route path="/education-for-all" element={<Education />} />
      <Route exact path="/blog" element={<AllBlog />} />
      <Route path="/blog/:slug" element={<Blog />} />
      <Route path="/news/:slug" element={<News />} />
      <Route path="/cdri" element={<Cdri />} />
      <Route path="/woman-empowerment" element={<WomenEmpower />} />
      <Route
        path="/peacebuilding-and-reconciliation"
        element={<PeaceBuilding />}
      />
      <Route
        path="/climate-change-and-disaster-risk-reduction"
        element={<ClimateChange />}
      />
      <Route
        path="/unlearn-relearn-and-reskill"
        element={<UnlearnRelearnReskill />}
      />
      <Route path="/cyber-safety-for-youth" element={<CyberSafety />} />
      <Route path="/nep" element={<Nip />} />
      <Route path="/college/student/register" element={<StudentRegister />} />
      <Route path="/login" element={<Login />} />
      <Route path="/courses" element={<AllCourses />} />
      <Route path="/course/detail/:slug" element={<CourseDetails />} />
      <Route path="/auth/setpassword" element={<SetPassword />} />
      <Route path="/administrator/login" element={<AdminLogin />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default StaticRoute;
