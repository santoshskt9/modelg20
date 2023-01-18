import React, { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import GotoTop from "./layout/GotoTop";
import Navbar from "./layout/Navbar";
const Home = React.lazy(() => import("./pages/Home"));
const Modelg20Page = React.lazy(() => import("./pages/ModelG20Page"));
const News = React.lazy(() => import("./pages/News"));
const AllBlog = React.lazy(() => import("./pages/Blog/AllBlogs"));
const Cdri = React.lazy(() => import("./pages/Topics/Cdri"));
const Nip = React.lazy(() => import("./pages/Topics/Nip"));
const Course = React.lazy(() => import("./pages/Course"));
const CampusAmbass = React.lazy(() => import("./pages/Topics/CampusAmbass"));
const StartupIndia = React.lazy(() => import("./pages/Topics/StartupIndia"));
const DigitalTransform = React.lazy(() =>
  import("./pages/Topics/DigitalTransform")
);
const Presidency = React.lazy(() => import("./pages/Presidency"));
const Youth = React.lazy(() => import("./pages/Topics/Youth"));
const Error = React.lazy(() => import("./pages/Error"));
const Registration = React.lazy(() => import("./pages/Registration"));
const CampusRegister = React.lazy(() =>
  import("./pages/Registration/CampusRegister")
);
const Education = React.lazy(() => import("./pages/Topics/Education"));
const IndiaAchivements = React.lazy(() =>
  import("./pages/Topics/IndiaAchivements")
);
const SharedFuture = React.lazy(() => import("./pages/Topics/SharedFuture"));
const HealthWell = React.lazy(() => import("./pages/Topics/HealthWell"));
const FutureOfWork = React.lazy(() => import("./pages/Topics/FutureOfWork"));
const ClimateChange = React.lazy(() => import("./pages/themes/ClimateChange"));
const PeaceBuilding = React.lazy(() => import("./pages/themes/PeaceBuilding"));
const Team = React.lazy(() => import("./pages/Team"));
const WomenEmpower = React.lazy(() => import("./pages/Topics/WomenEmpower"));
const Life = React.lazy(() => import("./pages/LifeEnvironment"));
const Blog = React.lazy(() => import("./pages/Blog"));
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Suspense
        fallback={
          <div className="w-100 d-flex vh-100 align-items-center justify-content-between">
           <img src="images/loading.gif" alt="" className="d-block mx-auto" style={{maxWidth:"100%"}}/>
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
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
          <Route path="/nep" element={<Nip />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
