import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modelg20Page from "./pages/ModelG20Page";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Life from "./pages/LifeEnvironment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/model-g20" element={<Modelg20Page />} />
        <Route path="/life-environment-intiative" element={<Life />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
