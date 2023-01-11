import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modelg20Page from "./pages/ModelG20Page";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Life from "./pages/LifeEnvironment";
import Blog from "./pages/Blog";
import News from "./pages/News";
import AllBlog from "./pages/Blog/AllBlogs";
import Cdri from "./pages/Topics/Cdri";
import Nip from "./pages/Topics/Nip";
import Course from "./pages/Course";
import CampusAmbass from "./pages/Topics/CampusAmbass";
import StartupIndia from "./pages/Topics/StartupIndia";
import DigitalTransform from "./pages/Topics/DigitalTransform";
import Presidency from "./pages/Presidency";
import Youth from "./pages/Topics/Youth";
import Error from "./pages/Error";
import Registration from "./pages/Registration";
import CampusRegister from "./pages/Registration/CampusRegister";
import Education from "./pages/Topics/Education";
import GotoTop from "./layout/GotoTop";
import IndiaAchivements from "./pages/Topics/IndiaAchivements";
import { Toaster } from "react-hot-toast";
import SharedFuture from "./pages/Topics/SharedFuture";
import HealthWell from "./pages/Topics/HealthWell";
import FutureOfWork from "./pages/Topics/FutureOfWork";
import ClimateChange from "./pages/themes/ClimateChange";
import PeaceBuilding from "./pages/themes/PeaceBuilding";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
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
        <Route path="/peacebuilding-and-reconciliation" element={<PeaceBuilding />} />
        <Route path="/climate-change-and-disaster-risk-reduction" element={<ClimateChange />} />
        <Route path="/nep" element={<Nip />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
