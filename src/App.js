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

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/model-g20" element={<Modelg20Page />} />
        <Route path="/life-environment-intiative" element={<Life />} />
        <Route path="/g20-genius-certification" element={<Course />} />
        <Route exact path="/blog" element={<AllBlog />} />
        <Route path="/blog/:slug" element={<Blog />} />
        <Route path="/news/:slug" element={<News />} />
        <Route path="/cdri" element={<Cdri />} />
        <Route path="/nep" element={<Nip />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
