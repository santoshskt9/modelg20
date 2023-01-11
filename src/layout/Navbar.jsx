import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar py-2  py-lg-2 navbar-expand-lg bg-light bg-opacity-75">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img
              className="img-responsive height-60 pe-2  border-3"
              src={process.env.REACT_APP_MAIN_URL + "images/logo-yuva.png"}
              alt="G20india"
            />
            {/* <img
              className="img-responsive height-50  border-end pe-2  border-3"
              src={process.env.REACT_APP_MAIN_URL + "images/yuva-logo.png"}
              alt="G20india"
            />
            <img
              className="img-responsive height-75"
              src={process.env.REACT_APP_MAIN_URL + "images/logo-modal.png"}
              alt="G20india"
            /> */}
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
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/model-g20">
                  Model G20
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-dark" to="/g20-campus-sherpa">
                  Campus Sherpa
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
              <li className="nav-item"></li>

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
                  <NavLink className="dropdown-item" to="/future-of-work">
                    <span className="text-initial">Future of Work</span>
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/health-well-being-and-sports"
                  >
                    <span className="text-initial">
                      Health, Well-Being, and
                      <br /> Sports : Agenda for Youth
                    </span>
                  </NavLink>
                  <NavLink className="dropdown-item" to="/shared-future">
                    <span className="text-initial">Shared Future</span>
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/life-environment-intiative"
                  >
                    <span className="text-initial">LiFE</span>
                  </NavLink>
                  <NavLink className="dropdown-item" to="/nep">
                    NEP 2020
                  </NavLink>{" "}
                  <NavLink className="dropdown-item" to="/education-for-all">
                    Education For All
                  </NavLink>{" "}
                  <NavLink className="dropdown-item" to="/startup-india">
                    Startup India
                  </NavLink>
                  <NavLink className="dropdown-item" to="/digital-transform">
                    Digital Transformation
                  </NavLink>
                  <NavLink className="dropdown-item" to="/cdri">
                    CDRI
                  </NavLink>
                </div>
              </li>
            </ul>
            <NavLink
              to={"/youth-community"}
              className="btn btn-primary hover-ripple d-flex align-items-center ms-3 text-initial"
            >
              Yuvamanthan
            </NavLink>
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
              className="img-responsive height-75"
              src={process.env.REACT_APP_MAIN_URL + "images/logo-yuva.png"}
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
        <div className="offcanvas-body">
          <ul className="list-group">
            <li
              className="list-group-item p-3 mb-2 rounded-3 "
              data-bs-dismiss="offcanvas"
            >
              <NavLink
                to="/model-g20"
                className="fs-6 text-uppercase text-dark"
              >
                Model G20
              </NavLink>
            </li>
            <li
              className="list-group-item p-3 border rounded-3 "
              data-bs-dismiss="offcanvas"
            >
              <NavLink
                className="fs-6 text-uppercase text-dark"
                to="/g20-genius-certification"
              >
                G20 Genius
              </NavLink>
            </li>
            <li
              className="list-group-item p-3 mt-2 border rounded-3"
              data-bs-dismiss="offcanvas"
            >
              <NavLink
                to="/g20-campus-sherpa"
                className="fs-6 text-uppercase text-dark"
              >
                CAMPUS SHERPA
              </NavLink>
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
              <div className="collapse p-0 m-0" id="collapseTopics">
                <ul className="list-group">
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/future-of-work"
                    >
                      <span className="text-initial">Future of Work</span>
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/health-well-being-and-sports"
                    >
                      <span className="text-initial">
                        Health, Well-Being, and Sports: Agenda for Youth
                      </span>
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/shared-future"
                    >
                      <span className="text-initial">Shared Future</span>
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

                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/nep"
                    >
                      NEP 2020
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/education-for-all"
                    >
                      Education For All
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/startup-india"
                    >
                      Startup India
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/digital-transform"
                    >
                      Digital Transformation
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/cdri"
                    >
                      CDRI
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="list-group-item mt-2 border-0 rounded-3"
              data-bs-dismiss="offcanvas"
            >
              <NavLink
                to={"/youth-community"}
                className="btn btn-primary hover-ripple w-100 text-initial"
              >
                Yuvamanthan
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
