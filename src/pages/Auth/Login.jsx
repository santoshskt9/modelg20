import { api } from "api";
import { useGlobalContext } from "global/context";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser, setToken } = useGlobalContext();
  const [usertype, setUsertype] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(`auth/login?type=${usertype}`, {
        identifier: email,
        password,
      });
      if (res.status == 200) {
        setUser(res.data.user);
        setToken(res.data.jwt);
        toast.dismiss();
        toast.success(res.data.message);
        if (location?.state?.nextRoute) {
          navigate(location?.state?.nextRoute);
          window.location.reload();
        } else {
          navigate("/dashboard");
          window.location.reload();
        }
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error) {
        toast.dismiss();
        toast.error(
          error.response?.data.message
            ? error.response?.data.message
            : "OOps Something went Wrong"
        );
      }
      setEmail("");
      setPassword("");
    }
  };
  return (
    <>
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
              <form
                onSubmit={handlesubmit}
                className="login-card container py-5"
                style={{ maxWidth: "450px" }}
              >
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control p-4"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email ID"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control p-4"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Password"
                    required
                  />
                </div>
                <div className="mt-3 text-center">
                  <button
                    type="submit"
                    name="login-btn"
                    id="login-btn"
                    className="btn btn-primary px-5 btn-primary-outline"
                  >
                    Login
                  </button>
                </div>
                <div className="text-center mt-4">
                  {/* <a className="text-end w-100">Forget Password ?</a> <br /> */}
                  {usertype == 1 ? (
                    <>
                      Not have an Account?{" "}
                      <Link
                        to={"/registration"}
                        className="text-end w-100 fw-bold"
                      >
                        Register
                      </Link>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- ========== End Login ========== --> */}
      </div>
    </>
  );
};

export default Login;
