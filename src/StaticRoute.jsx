import Login from 'pages/Auth/Login'
import Home from 'pages/static/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const StaticRoute = () => {
  return (
    <Routes>
          {/* ------------- */}
          {/* Static Routes Started */}
          {/* ------------- */}
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/registration" element={<Registration />} />
          <Route path="/team" element={<Team />} />
          <Route
            path="/campussherpa-registration"
            element={<CampusRegister />}
          />
          <Route path="/model-g20" element={<Modelg20Page />} />
          <Route path="/life-environment-intiative" element={<Life />} />
          <Route path="/g20-genius-certification" element={<Course />} />
          <Route path="/g20-campus-sherpa" element={<CampusAmbass />} />
          <Route path="/startup-india" element={<StartupIndia />} />
          <Route path="/shared-future" element={<SharedFuture />} />
          <Route
            path="/health-well-being-and-sports"
            element={<HealthWell />}
          />
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
          <Route
            path="/college/student/register"
            element={<StudentRegister />}
          />*/}
          <Route path="/login" element={<Login />} />
          {/* <Route path="/courses" element={<AllCourses />} />
          <Route path="/course/detail/:slug" element={<CourseDetails />} />
          <Route path="*" element={<Error />} />  */}
          {/* -------------s */}
          {/* /Static Routes Ended */}
          {/* -------------s */}

        </Routes>
  )
}

export default StaticRoute