import React, { useEffect, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const route = useLocation().pathname;

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light bg-opacity-75">
        <div className="container py-3">
          <NavLink className="navbar-brand" to="/">
            <img
              className="img-responsive height-50  border-end pe-2  border-3"
              src={process.env.REACT_APP_MAIN_URL + "images/logo.png"}
              alt="G20india"
            />
            <img
              className="img-responsive height-75"
              src={process.env.REACT_APP_MAIN_URL + "images/logo-modal.png"}
              alt="G20india"
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link tet-dark" to="/model-g20">
                  Model G20
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Engage
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink
                    className="dropdown-item"
                    to="/life-environment-intiative"
                  >
                    LiFE
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/g20-genius-certification"
                  >
                    G20 Genius Certification
                  </NavLink>
                  {/* <NavLink className="dropdown-item" to="/blog-single.html">
                    Campus Ambassador Program
                  </NavLink> */}
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark"
                  to="/g20-campus-ambassador"
                >
                  Campus Sherpa
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  PM Speak
                </NavLink>
              </li> */}
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle text-dark"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Themes
                </NavLink>
                <div className="dropdown-menu">
                  <NavLink className="dropdown-item" to="/cdri">
                    CDRI
                  </NavLink>
                  <NavLink className="dropdown-item" to="/nep">
                    NEP 2020
                  </NavLink>
                  {/* <NavLink className="dropdown-item" to="/blog-single.html">
                    Startup India
                  </NavLink>
                  <NavLink className="dropdown-item" to="/blog-single.html">
                    Digital Transformation
                  </NavLink>
                  <NavLink className="dropdown-item" to="/blog-single.html">
                    Skill Development
                  </NavLink> */}
                </div>
              </li>
            </ul>
            <button className="btn border-0" type="submit">
              <i className="bi bi-search text-dark fs-5"></i>
            </button>
            <button className="btn btn-primary hover-ripple d-flex align-items-center">
              <i className="bx bx-calendar fs-5"></i>
              &nbsp;Upcoming&nbsp;Events
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar  */}
      <div
        className="offcanvas offcanvas-start d-lg-none"
        tabIndex={-1}
        id="mobileSidebar"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <NavLink className="navbar-brand" to="/">
            <img
              className="img-responsive height-50"
              src={process.env.REACT_APP_MAIN_URL + "images/logo.png"}
              alt="G20india"
            />
          </NavLink>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body vw-100 ">
          <ul className="list-group">
            <li className="list-group-item p-3 rounded-3 ">
              <a href="/" className="fs-6 text-uppercase text-dark">
                Home
              </a>
            </li>
            <li className="list-group-item p-3 rounded-3 ">
              <a href="/model-g20" className="fs-6 text-uppercase text-dark">
                Model G20
              </a>
            </li>
            <li className="list-group-item p-3 mt-2 border rounded-3 pb-0">
              <p
                className="fs-6 text-uppercase text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEngage"
              >
                Engage
              </p>
              <div class="collapse p-0 m-0" id="collapseEngage">
                <ul className="list-group">
                  <NavLink
                    className="list-group-item p-3 rounded-3"
                    to="/life-environment-intiative"
                  >
                    LiFE
                  </NavLink>
                  <NavLink
                    className="list-group-item p-3 rounded-3"
                    to="/g20-genius-certification"
                  >
                    G20 Genius Certification
                  </NavLink>
                  {/* <NavLink
                    className="list-group-item p-3 rounded-3"
                    to="/blog-single.html"
                  >
                    Campus Ambassador Program
                  </NavLink>
                  <NavLink
                    className="list-group-item p-3 rounded-3"
                    to="/blog-single.html"
                  >
                    LiFE 21 day challenge
                  </NavLink> */}
                </ul>
              </div>
            </li>
            <li className="list-group-item p-3 mt-2 border rounded-3">
              <a
                href="/g20-campus-ambassador"
                className="fs-6 text-uppercase text-dark"
              >
                CAMPUS SHERPA
              </a>
            </li>
            <li className="list-group-item p-3 mt-2 border rounded-3">
              <p
                className="fs-6 text-uppercase text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTopics"
              >
                Themes
              </p>
              <div class="collapse p-0 m-0" id="collapseTopics">
                <ul className="list-group">
                  <NavLink className="list-group-item p-3 rounded-3" to="/cdri">
                    CDRI
                  </NavLink>
                  <NavLink className="list-group-item p-3 rounded-3" to="/nep">
                    NEP 2020
                  </NavLink>
                  {/* <NavLink
                    className="list-group-item p-3 rounded-3"
                    to="/blog-single.html"
                  >
                    Startup India
                  </NavLink>
                  <NavLink
                    className="list-group-item p-3 rounded-3"
                    to="/blog-single.html"
                  >
                    Digital Transformation
                  </NavLink>
                  <NavLink
                    className="list-group-item p-3 rounded-3"
                    to="/blog-single.html"
                  >
                    Skill Development
                  </NavLink> */}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
