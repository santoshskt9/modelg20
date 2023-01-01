import React, { useEffect, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const route = useLocation().pathname;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light bg-opacity-75">
        <div className="container">
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-around">
              {/* <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/">
                  Home
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/model-g20">
                  Model G20
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-dark"
                  to="/g20-genius-certification"
                >
                  G20 Genius
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/g20-campus-sherpa">
                  Campus Sherpa
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/youth-community">
                  Youth Gallery
                </NavLink>
              </li>
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
                  </NavLink>{" "}
                  <NavLink
                    className="dropdown-item"
                    to="/life-environment-intiative"
                  >
                    <span className="text-initial">LiFE</span>
                  </NavLink>
                  <NavLink className="dropdown-item" to="/startup-india">
                    Startup India
                  </NavLink>
                  <NavLink className="dropdown-item" to="/digital-transform">
                    Digital Transformation
                  </NavLink>
                  {/*<NavLink className="dropdown-item" to="/blog-single.html">
                    Skill Development
                  </NavLink> */}
                </div>
              </li>
            </ul>
            {/* <button className="btn border-0" type="submit">
              <i className="bi bi-search text-dark fs-5"></i>
            </button> */}
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
            {/* <li className="list-group-item p-3 rounded-3 " data-bs-dismiss="offcanvas">
              <NavLink to="/" className="fs-6 text-uppercase text-dark">
                Home
              </NavLink>
            </li> */}
            <li className="list-group-item p-3 mb-2 rounded-3 " data-bs-dismiss="offcanvas">
              <NavLink to="/model-g20" className="fs-6 text-uppercase text-dark" >
                Model G20
              </NavLink>
            </li>
            <li className="list-group-item p-3 rounded-3 " data-bs-dismiss="offcanvas">
              <NavLink

                to="/g20-genius-certification"
              >
                G20 Genius Certification
              </NavLink>
            </li>
            <li className="list-group-item p-3 mt-2 border rounded-3" data-bs-dismiss="offcanvas">
              <NavLink
                to="/g20-campus-sherpa"
                className="fs-6 text-uppercase text-dark"
              >
                CAMPUS SHERPA
              </NavLink>
            </li>
            <li className="list-group-item p-3 mt-2 border rounded-3" >
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
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink className="list-group-item p-3 rounded-3" to="/cdri">
                      CDRI
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink className="list-group-item p-3 rounded-3" to="/nep">
                      NEP 2020
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/life-environment-intiative"
                    >
                      <span className="text-initial">LiFE</span>
                    </NavLink>
                  </li>
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
