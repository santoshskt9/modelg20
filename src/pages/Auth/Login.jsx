import { api } from "api";
import { useGlobalContext } from "global/context";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
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
  const {setUser, setToken} = useGlobalContext();
  const [usertype, setUsertype] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const res = await api.post(`auth/login?type=${usertype}`, {
        identifier: email,
        password,
      });
      console.log("res", res);
      if (res.status == 200) {
        // localStorage.setItem("token", res.data.jwt);
        // localStorage.setItem("user", JSON.stringify(res.data.user));
        setUser(res.data.user);
        setToken(res.data.jwt);
        toast.dismiss();
        toast.success(res.data.message);
        navigate("/dashboard");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      if (error) {
        console.log(error);
        toast.dismiss();
        toast.error(error.response?.data.message);
      }
      setEmail("");
      setPassword("");
    }
  };
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
                  <a className="text-end w-100">Forget Password ?</a> <br />
                  <a className="text-end w-100">Not have an account register</a>
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
