import { useGlobalContext } from "global/context";
import React, { Suspense, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import StaticRoute from "StaticRoute";
import StudentRoute from "StudentRoute";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Toaster position="top-right" reverseOrder={true} />
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
        <StaticRoute />
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
