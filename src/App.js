import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Modelg20Page from "./pages/ModelG20Page";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modelg20" element={<Modelg20Page />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
