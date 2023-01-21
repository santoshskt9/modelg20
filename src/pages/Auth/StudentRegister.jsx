import React from "react";
import CollegeBreadCrumb from "./CollegeBreadCrumb";
import bgImg from "./flag-bg.jpg";
const styles = {
  title: {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
  },
};

const StudentRegister = () => {
  return (
    <div>
      {" "}
      <CollegeBreadCrumb />
      <div className="container py-5 mt-lg-5 h-100">
        {/* <!-- ========== Start Login ========== --> */}
        <div className="row row-cols-1 row-cols-lg-2 align-items-start">
          <div className="col" style={styles.title}>
            <h1 className="text-center text-black">
              Welcome <br /> to <br /> Yuvamanthan
            </h1>
          </div>
          <div className="col">
            <div>
              <p className="fs-3 fw-bold">
                Register for the yuvamanthan programme
              </p>
              <div className="register-card">
                <div className="row g-3">
                  <div className="col-8">
                    <span className="form-label">Profile</span>
                    <input type="file" className="" required />
                  </div>
                  <div className="col-12 col-lg-6">
                    <span className="label">First Name</span>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-lg-6">
                    <span className="label">last Name</span>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-12 col-lg-6">
                    <span className="label">Contact Number</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Contact number"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <span className="label">Email Address</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email address"
                    />
                  </div>
                  <div className="col-12 col-lg-6">
                    <span className="form-label">Date of Birth</span>
                    <input type="date" name="" id="" className="form-control" />
                  </div>
                  <div className="col-12 col-lg-6">
                    <span className="form-label">Father's Name</span>
                    <input type="text" name="" id="" className="form-control" placeholder="Father Name"/>
                  </div>
                  <div className="col-12">
                    <span className="form-label">Gender</span>
                    <div className="d-flex">
                      <div className="form-check m-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault1"
                        >
                          Male
                        </label>
                      </div>
                      <div className="form-check m-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          Female
                        </label>
                      </div>
                      <div className="form-check m-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          for="flexRadioDefault2"
                        >
                          Otherss
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label for="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      className="form-control"
                      name="password"
                      id="password"
                      aria-describedby="passwordHelpId"
                      placeholder="Enter Password"
                    />
                  </div>
                  <div className="col-12">
                    <label for="password" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      required
                      className="form-control"
                      name="password"
                      id="password"
                      aria-describedby="passwordHelpId"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
                <div className="mb-3"></div>
                <a className="text-end w-100">Forget Password?</a>
                <div className="mt-3">
                  <button
                    type="button"
                    name="login-btn"
                    id="login-btn"
                    className="btn btn-primary px-5"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ========== End Login ========== --> */}
      </div>
    </div>
  );
};

export default StudentRegister;
