import React, { useState } from "react";
import BreadCrumb from "../../layout/BreadCrumb";
import bgImg from "./flag-bg.jpg";

const styles = {
  title: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

const Login = () => {
  const [usertype, setUsertype] = useState(0);
  return (
    <>
      {/* <BreadCrumb heading={"Login"} /> */}
      <div className="p-5 bg-white"></div>

      <div className="container py-5 mt-lg-5 h-100">
        {/* <!-- ========== Start Login ========== --> */}

        <div className="row row-cols-1 row-cols-lg-2 align-items-center">
          <div className="col" style={styles.title}>
            <h1 className="text-center text-black">
              Welcome <br /> to <br /> Yuvamanthan
            </h1>
          </div>
          <div className="col">
            <div>
              <ul
                className="nav nav-tabs justify-content-center nav-pill-design border-0"
                id="myTab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      usertype == 0 ? "active" : ""
                    } btn-primary-outline fw-semibold rounded-pill`}
                    onClick={() => setUsertype(0)}
                  >
                    Student
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${
                      usertype == 1 ? "active" : ""
                    } btn-primary-outline  fw-semibold rounded-pill`}
                    onClick={() => setUsertype(1)}
                  >
                    Institute
                  </button>
                </li>
              </ul>
              <div
                className="login-card container py-5"
                style={{ maxWidth: "450px" }}
              >
                <div className="mb-3">
                  <input
                    type="email"
                    required
                    className="form-control p-4"
                    name="email"
                    id="email"
                    placeholder="Enter your Email ID"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    required
                    className="form-control p-4"
                    name="password"
                    id="password"
                    aria-describedby="passwordHelpId"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mt-3 text-center">
                  <button
                    type="button"
                    name="login-btn"
                    id="login-btn"
                    className="btn btn-primary px-5 btn-primary-outline"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center mt-4">
                  <a className="text-end w-100">Forget Password ?</a> <br />
                  <a className="text-end w-100">Not have an account register</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ========== End Login ========== --> */}
      </div>
    </>
  );
};

export default Login;
