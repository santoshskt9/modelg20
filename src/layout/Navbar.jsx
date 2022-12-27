import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const route = useLocation().pathname;
  function scrollTop() {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    scrollTop();
  }, [route]);

  return (
    <nav className="navbar navbar-expand-lg bg-light bg-opacity-75">
      <div className="container py-3">
        <NavLink className="navbar-brand" to="/">
          <img
            className="img-responsive height-50"
            src={process.env.REACT_APP_MAIN_URL + "images/logo.png"}
            alt="G20india"
          />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Engage
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/model-g20">
                  Model G20
                </NavLink>
                <NavLink
                  className="dropdown-item"
                  to="/life-environment-intiative"
                >
                  LiFE
                </NavLink>
                <NavLink className="dropdown-item" to="/blog-single.html">
                  G20 Genius Certification
                </NavLink>
                <NavLink className="dropdown-item" to="/blog-single.html">
                  Campus Ambassador Program
                </NavLink>
                <NavLink className="dropdown-item" to="/blog-single.html">
                  LiFE 21 day challenge
                </NavLink>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Featured Stories
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                PM Speak
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Topics
              </NavLink>
              <div className="dropdown-menu">
                <NavLink className="dropdown-item" to="/blog-single.html">
                  CDRI
                </NavLink>
                <NavLink className="dropdown-item" to="/blog-single.html">
                  NEP 2020
                </NavLink>
                <NavLink className="dropdown-item" to="/blog-single.html">
                  Startup India
                </NavLink>
                <NavLink className="dropdown-item" to="/blog-single.html">
                  Digital Transformation
                </NavLink>
                <NavLink className="dropdown-item" to="/blog-single.html">
                  Skill Development
                </NavLink>
              </div>
            </li>
          </ul>
          <button className="btn border-0" type="submit">
            <i className="bi bi-search text-dark fs-5"></i>
          </button>
          <NavLink
            to="service.html"
            className="btn btn-primary hover-ripple d-flex align-items-center"
          >
            <i className="bx bx-calendar fs-5"></i>
            &nbsp;Upcoming&nbsp;Events
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
