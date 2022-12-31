import React, { useState } from "react";

const Registrattion = () => {
  const [userType, setUserType] = useState('');

  const userTypeHandler = (e) => {
    // console.log(e.target.value);
    setUserType(e.target.value);
  }

  return (
    <section className="section position-relative">
      <div className="container">
        <div className="row justify-content-center mb-80">
          <div className=" col-md-9 text-center mb-5 mb-md-0">
            <span className="section-title-border mx-auto"></span>
            <h2 className="section-title">Registration</h2>
            <p>
              Welcome to the Model G20 summit registration Page. For
              institutions, students and professionals volunteering to organise
              the Model G20 Events in their campuses, this is where it all
              begins! Just fill in the required details and we will get in touch
              with you
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
          <form action="">
            <div className="row row-cols-1 row-cols-lg-2">
              <div className="col d-flex flex-column">
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="First Name*"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Middle Name"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Last Name"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Number of Members"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Institution/College Name where the event will be organised*"
                />
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Institution/College Address"
                />
              </div>
              <div className="col d-flex flex-column">
                <div className="row row-cols-1 row-cols-lg-2 mb-3">
                  <div className="col mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="State *"
                    />
                  </div>
                  <div className="col mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Pincode *"
                    />
                  </div>
                </div>
                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="form-control mb-3"
                  type="email"
                  placeholder="Confirm Email"
                />
                <input
                  className="form-control mb-3"
                  type="phone"
                  placeholder="Contact Number *"
                />
                <input
                  className="form-control mb-3"
                  type="otp"
                  placeholder="OTP (recieved on mail/phone) *"
                />

                {/* <button type="submit">Register</button> */}
              </div>
              <div className="row">
                <div className="my-3">
                  <h5>Are you a</h5>

                  {/* UserType Selectors */}
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="userTypeRadio" id="radioStudent" 
                    onChange={userTypeHandler}
                    value="student"  />
                    <label class="form-check-label" for="radioStudent">
                      Student
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="userTypeRadio" id="radioRepresentative" 
                    onChange={userTypeHandler}
                    value="representative" />
                    <label class="form-check-label" for="radioRepresentative">
                      Representive of educational institution
                    </label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="userTypeRadio" id="radioProfessional" 
                    onChange={userTypeHandler}
                    value="professional" />
                    <label class="form-check-label" for="radioProfessional">
                      A professional who organises events
                    </label>
                  </div>
                  {/* UserType Selectors */}
                </div>

              </div>
              {
                userType==='student'||userType==='professional' ? <div className="row my-3">
                <h4 className="mb-3">
                  For students and professionals only.
                </h4>
                <div className="mb-3">
                  <label htmlFor="">
                    How did your team came to know about the Model G20 Summit? *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Answer"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">
                    Do you use social media, if yes please mention your current
                    social media platforms! *
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Answer"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="">
                    What are your views on India's G20 Presidency * (minimum 100
                    words)
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    rows="2"
                    placeholder="Answer"
                  />
                </div>
                <div className="mb3">
                  <label htmlFor="">
                    What topics your team would like to address in the model G20
                    summit? * (any 3)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Answer"
                  />
                </div>
              </div> : null
              }
            </div>
            <div className="row">
              <h4 className="mb-3">Model G20 Terms and Conditions *</h4>
              {/* points listed here */}

              <div className="form-check mx-3 mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkAgreement"
                />
                <label className="form-check-label" htmlFor="checkAgreement">
                  I agree all the information provided by me is true and i agree
                  to the terms of conditions.
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary-outline hover-ripple"
            >
              REGISTER NOW
            </button>
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
  );
};

export default Registrattion;
