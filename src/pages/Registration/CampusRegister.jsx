import React, { useEffect, useLayoutEffect } from "react";

const CampusRegister = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {" "}
      <section className="section position-relative">
        <div className="container">
          <div className="row justify-content-center mb-80">
            <div className=" col-md-9 text-center mb-5 mb-md-0">
              <span className="section-title-border mx-auto"></span>
              <h2 className="section-title">Campus Sherpa Registration</h2>
              <p>
                Welcome to the Model G20 summit registration Page. For
                institutions, students and professionals volunteering to
                organise the Model G20 Events in their campuses, this is where
                it all begins! Just fill in the required details and we will get
                in touch with you
              </p>
            </div>
          </div>
          <div className="row g-3 g-lg-4 g-xl-5">
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="section-title ">
                  Please fill in your team details carefully in in the fields
                  marked as *
                </h4>
              </div>
            </div>

            {/* Registration Form */}
            <form
              action=""
              className="container"
              style={{ maxWidth: "1100px" }}
            >
              <div className="row g-3 gy-2 text-dark">
                <div className="col-12 col-md-6 col-lg-4">
                  <span className="form-label">First Name*</span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <span className="form-label">Middle Name</span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <span className="form-label">Last Name</span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <span className="form-label">Number of Members</span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Institution/College Name where the event will be organised*
                  </span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Institution/College Address
                  </span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-lg-3">
                  <span className="form-label">State *</span>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-12 col-lg-3">
                  <span>Pincode *</span>
                  <input className="form-control" type="text" />
                </div>
                {/* contact Information  */}
                <div className="col-12">
                  <hr className="my-4" />
                  <h5>Contact Information</h5>
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">Email</span>
                  <input className="form-control" type="email" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">Confirm Email</span>
                  <input className="form-control" type="email" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">Contact Number *</span>
                  <input className="form-control" type="phone" />
                </div>
                {/* Additional Information */}
                <div className="col-12">
                  <hr className="my-4" />
                  <h5>Additional Information</h5>
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    How did your team came to know about the Model G20 Summit? *
                  </span>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Answer"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Do you use social media, if yes please mention your current
                    social media platforms! *
                  </span>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Answer"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    What are your views on India's G20 Presidency * (minimum 100
                    words)
                  </span>
                  <textarea
                    type="text"
                    className="form-control p-3"
                    rows="5"
                    style={{ resize: "none" }}
                    placeholder="Answer"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    What topics your team would like to address in the model G20
                    summit? * (any 3)
                  </span>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Answer"
                  />
                </div>
                {/* Model G20 Terms and Conditions * */}
                <div className="col-12">
                  <div className="form-check">
                    <h5>Model G20 Terms and Conditions *</h5>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="checkAgreement"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkAgreement"
                    >
                      I agree all the information provided by me is true and i
                      agree to the terms of conditions.
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    className="btn btn-primary-outline hover-ripple"
                  >
                    REGISTER NOW
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- background shape --> */}
        <img
          className="img-fluid about-bg-shape"
          src="images/backgrounds/about-us-3-bg.png"
          alt="shape"
        />
      </section>
    </div>
  );
};

export default CampusRegister;
