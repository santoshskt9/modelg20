import { Avatar } from "@mui/material";
import { useGlobalContext } from "global/context";
import React from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { token, removeToken, removeUser, userData } = useGlobalContext();
  const navigate = useNavigate();
  const handlelogout = () => {
    removeToken();
    removeUser();
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <>
      <nav
        className={`navbar py-2 py-lg-2 navbar-expand-lg bg-light bg-opacity-75 ${
          token ? "logged-navbar" : ""
        }`}
      >
        <div className="container">
          <NavLink
            className="navbar-brand"
            to={token ? "/dashboard" : "/"}
          >
            <img
              className="img-responsive height-60 pe-2  border-3"
              src={process.env.REACT_APP_MAIN_URL + "images/logo-yuva.png"}
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
            {token ? (
              <>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-around"></ul>
                <div class="dropdown">
                  <button
                    class="btn bg-white border-0  p-0"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Avatar
                      alt={userData?.email}
                      src={
                        process.env.REACT_APP_API_BASE_URL + userData?.profile
                      }
                      sx={{ width: 46, height: 46 }}
                      className="ms-4 shadow-lg"
                    />
                  </button>
                  <ul class="dropdown-menu p-2 py-3">
                    <li className="mt-2">
                      <Link class="dropdown-item" to="/dashboard">
                        Dashboard
                      </Link>
                    </li>
                    {userData.type == 0 && (
                      <li className="mt-2">
                        <Link class="dropdown-item" to="/courses">
                          Courses
                        </Link>
                      </li>
                    )}
                    <li className="mt-2">
                      <Link class="dropdown-item" to="/dashboard/editprofile">
                        Edit Profile
                      </Link>
                    </li>
                    <li className="mt-2">
                      <button
                        onClick={handlelogout}
                        className="btn btn-primary-outline hover-ripple d-flex align-items-center ms-3 py-2 text-initial"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-around">
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/model-g20">
                      Model G20
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-dark"
                      to="/g20-campus-sherpa"
                    >
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
                    <div
                      className="dropdown-menu"
                      style={{ width: "500px", right: "-150px", left: "unset" }}
                    >
                      <div className="row row-cols-2">
                        <div className="col">
                          <h5 className="px-3">Main Themes</h5>
                          <NavLink
                            className="dropdown-item"
                            to="/future-of-work"
                          >
                            <span className="text-initial">Future of Work</span>
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/peacebuilding-and-reconciliation"
                          >
                            <span className="text-initial">
                              Peacebuilding and <br /> Reconciliation
                            </span>
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/climate-change-and-disaster-risk-reduction"
                          >
                            <span className="text-initial">
                              Climate Change and <br /> Disaster Risk Reduction
                            </span>
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/health-well-being-and-sports"
                          >
                            <span className="text-initial">
                              Health , Well-Being and
                              <br /> Sports
                            </span>
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/shared-future"
                          >
                            <span className="text-initial">Shared Future</span>
                          </NavLink>
                        </div>
                        <div className="col">
                          <h5 className="px-3">Topics</h5>
                          <NavLink
                            className="dropdown-item"
                            to="/life-environment-intiative"
                          >
                            <span className="text-initial">LiFE</span>
                          </NavLink>
                          <NavLink className="dropdown-item" to="/nep">
                            NEP 2020
                          </NavLink>{" "}
                          <NavLink
                            className="dropdown-item"
                            to="/education-for-all"
                          >
                            Education For All
                          </NavLink>{" "}
                          <NavLink
                            className="dropdown-item"
                            to="/startup-india"
                          >
                            Startup India
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/digital-transform"
                          >
                            Digital Transformation
                          </NavLink>
                          <NavLink className="dropdown-item" to="/cdri">
                            CDRI
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/woman-empowerment"
                          >
                            Woman Empowerment
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/unlearn-relearn-and-reskill"
                          >
                            Unlearn, Relearn and <br /> Reskill
                          </NavLink>
                          <NavLink
                            className="dropdown-item"
                            to="/cyber-safety-for-youth"
                          >
                            Cyber Safety for Youth <br /> & Post-Pandemic
                            Culture
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link text-dark" to="/team">
                      Team
                    </NavLink>
                  </li>
                </ul>
                <NavLink
                  to={"/youth-community"}
                  className="btn btn-primary hover-ripple d-flex align-items-center ms-3 text-initial py-2"
                >
                  Yuvamanthan
                </NavLink>
                <NavLink
                  to={"/login"}
                  className="btn btn-primary-outline hover-ripple d-flex align-items-center ms-3 text-initial py-2"
                >
                  Login
                </NavLink>
              </>
            )}
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
              src={process.env.REACT_APP_MAIN_URL + "images/logo-yuva-1.png"}
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
                className="fs-6 text-uppercase text-dark mb-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThemes"
              >
                Themes
              </p>
              <div className="collapse p-0 m-0 mt-3" id="collapseThemes">
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
                      to="/peacebuilding-and-reconciliation"
                    >
                      <span className="text-initial">
                        Peacebuilding and Reconciliation
                      </span>
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/climate-change-and-disaster-risk-reduction"
                    >
                      <span className="text-initial">
                        Climate Change and Disaster Risk Reduction
                      </span>
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/health-well-being-and-sports"
                    >
                      <span className="text-initial">
                        Health , Well-Being and Sports
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
                </ul>
              </div>
            </li>
            <li className="list-group-item p-3 mt-2 border rounded-3">
              <p
                className="fs-6 text-uppercase mb-0 text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTopics"
              >
                Topics
              </p>
              <div className="collapse p-0 m-0 mt-3" id="collapseTopics">
                <ul className="list-group">
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
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/woman-empowerment"
                    >
                      Women Empowerment
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/unlearn-relearn-and-reskill"
                    >
                      Unlearn, Relearn and Reskill
                    </NavLink>
                  </li>
                  <li data-bs-dismiss="offcanvas" className="mb-2">
                    <NavLink
                      className="list-group-item p-3 rounded-3"
                      to="/cyber-safety-for-youth"
                    >
                      Cyber Safety for Youth and Post-Pandemic Culture
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="list-group-item p-3 mb-2 rounded-3 "
              data-bs-dismiss="offcanvas"
            >
              <NavLink to="/team" className="fs-6 text-uppercase text-dark">
                Team
              </NavLink>
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
