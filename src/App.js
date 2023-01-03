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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/campussherpa-registration" element={<CampusRegister />} />
        <Route path="/model-g20" element={<Modelg20Page />} />
        <Route path="/life-environment-intiative" element={<Life />} />
        <Route path="/g20-genius-certification" element={<Course />} />
        <Route path="/g20-campus-sherpa" element={<CampusAmbass />} />
        <Route path="/startup-india" element={<StartupIndia />} />
        <Route path="/g20-presidency" element={<Presidency />} />
        <Route path="/youth-community" element={<Youth />} />
        <Route path="/digital-transform" element={<DigitalTransform />} />
        <Route path="/education-for-all" element={<Education/>} />
        <Route exact path="/blog" element={<AllBlog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/news/:slug" element={<News />} />
        <Route path="/cdri" element={<Cdri />} />
        <Route path="/nep" element={<Nip />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
