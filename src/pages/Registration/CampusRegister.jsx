import React from "react";
import GotoTop from "../../layout/GotoTop";

const CampusRegister = () => {
  return (
    <div>
      <GotoTop />{" "}
      <section className="section position-relative">
        <div className="container">
          <div className="row justify-content-center mb-80">
            <div className=" col-md-9 text-center mb-5 mb-md-0">
              <span className="section-title-border mx-auto"></span>
              <h2 className="section-title">Campus Sherpa Registration</h2>
              <p>
                Welcome to the Model G20 Campus Sherpa Registration Page. This
                is the beginning for student volunteers to organise the Model
                G20 Events on their campuses. Get involved and participate with
                us in making India proud! Just fill in the required details and
                we will get in touch with you.
              </p>
            </div>
          </div>
          <div className="row g-3 g-lg-4 g-xl-5">
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="section-title ">
                  PLEASE FILL IN YOUR DETAILS CAREFULLY IN IN THE FIELDS MARKED
                  AS FOLLOWS
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
                  <span className="form-label">
                    First Name <b className="text-danger">*</b>
                  </span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <span className="form-label">Middle Name </span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-md-6 col-lg-4">
                  <span className="form-label">
                    Last Name <b className="text-danger">*</b>
                  </span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Institution/College Name where the event will be organised{" "}
                    <b className="text-danger">*</b>
                  </span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Institution/College Address <b className="text-danger">*</b>
                  </span>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-12 col-lg-3">
                  <span className="form-label">
                    State <b className="text-danger">*</b>
                  </span>
                  <input className="form-control" type="text" />
                </div>
                <div className="col-12 col-lg-3">
                  <span className="form-label">
                    Pincode <b className="text-danger">*</b>
                  </span>
                  <input className="form-control" type="text" />
                </div>
                {/* contact Information  */}
                <div className="col-12">
                  <hr className="my-4" />
                  <h5>Contact Information</h5>
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Email <b className="text-danger">*</b>
                  </span>
                  <input className="form-control" type="email" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Confirm Email <b className="text-danger">*</b>
                  </span>
                  <input className="form-control" type="email" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Contact Number <b className="text-danger">*</b>
                  </span>
                  <input className="form-control" type="phone" />
                </div>
                {/* Additional Information */}
                <div className="col-12">
                  <hr className="my-4" />
                  <h5>Additional Information</h5>
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    Enter G20 Certification Number{" "}
                    <b className="text-danger">*</b>
                  </span>
                  <input type="text" className="form-control p-3" />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    How did your team came to know about the Model G20 Summit?{" "}
                    <b className="text-danger">*</b>
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
                    social media platforms! <b className="text-danger">*</b>
                  </span>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Answer"
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <span className="form-label">
                    What are your views on India's G20 Presidency{" "}
                    <b className="text-danger">*</b> (minimum 100 words)
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
                    summit? <b className="text-danger">*</b> (any 3)
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
                      agree to the{" "}
                      <span
                        className="text-primary"
                        style={{ cursor: "pointer" }}
                        data-bs-toggle="modal"
                        data-bs-target="#g20campusModal"
                      >
                        terms of conditions.
                      </span>
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
          {/* terms and conditions pop  */}
          <div
            className="modal fade"
            id="g20campusModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Terms and Conditions
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <h5>THE EVENT</h5>
                  <p>
                    Model G20 or (the “Event”) is a voluntary exercise designed
                    for young learners and professionals who wish to ace the art
                    of public speaking and diplomacy.
                  </p>
                  <p>
                    GLC holds no patents or copyrights for (the “Event”) and is
                    merely a coordinator/agency to help organize (the “Event”)
                    in educational institutions and venues decided by their
                    authorities
                  </p>
                  <h5>APPLICATION TERMS</h5>
                  <p>
                    The volunteer (the “Applicant”) is a student who is
                    currently legally enrolled in his/her institution and will
                    remain so until the date of the (the “Event”).
                  </p>
                  <p>
                    GLC or its associates do not know (the “Applicant”)
                    personally and expect all information shared by the
                    applicant to be true and fair. Any liability arising out of
                    the falsification of information will be the sole
                    responsibility of the applicant.
                  </p>
                  <p>
                    GLC and its associates will not be responsible to pay any
                    amount of remuneration or money to (the “Applicant”) or
                    their associates to organize (the “Event”).
                  </p>
                  <p>
                    The applicant understands that he/she is “Volunteering” to
                    organize the event on their campus and all responsibility
                    for the same lies with the “Volunteer”.
                  </p>
                  <p>
                    (the “Applicant”) will be free to arrange sponsorships for
                    the (the “Event”) from sources they deem fit for the same.
                    GLC or its associates will have no role in this, nor will
                    they be responsible for any financial or physical loss due
                    to the same.
                  </p>
                  <p>
                    This and the acknowledgment email received hereafter are
                    just processes and not a confirmation from GLC for the
                    appointment of (the “Applicant”).
                  </p>
                  <h5>PARTICIPATION</h5>
                  <p>
                    Unless otherwise defined in the special terms of the event
                    as outlined on the event webpage or as communicated at or in
                    connection with the event itself (the “Special Terms”):{" "}
                    <br />
                    Everyone who is of legal age (i.e. 18 years old) is eligible
                    to participate in the event (the “Event”). <br />
                    Participation in the Event is free of charge and does not
                    require the purchase of a product or service. <br />
                    By participating, you agree to the Special Terms and to
                    these general terms of participation (the “GTP”; Special
                    Terms and GTP equal the “Terms”) fully and unconditionally.
                    On reserves the right to exclude any participant from
                    partaking in the Event without providing any reasons.
                  </p>

                  <h5>RECORDINGS</h5>
                  <p>
                    By participating in the Event, you consent to interview(s),
                    photography, audio recording, video recording, or any other
                    recordings (the “Recordings”) and the release, publication,
                    exhibition, or reproduction of these Recordings can be used
                    for news, webcasts, promotional purposes, telecasts,
                    advertising, inclusion on websites, social media, or any
                    other purpose (the “Release”) by GLC and its affiliates.{" "}
                    <br />
                    Recordings may be used to promote similar events in the
                    future, to highlight the Event, or to exhibit the
                    capabilities of GLC (or any of its partners). You release
                    GLC and all persons involved from any liability and waive
                    all rights you may have to any claims for payment or
                    royalties in connection with the Recordings and/or the
                    Release (including any claims connected with the taking,
                    recording, digitizing, or publicizing of the Recordings)
                  </p>
                  <h5>LIABILITY</h5>
                  <p>
                    GLC accepts no responsibility for any damage, loss,
                    liabilities, injury, or disappointment incurred or suffered
                    by any participant as a result of entering and participating
                    in the Event. Nothing in these Terms shall exclude the
                    liability of GLC for fraud or fraudulent misrepresentation
                    or for death or personal injury resulting from GLC’s
                    negligence. <br />
                    You agree to indemnify, defend, and hold harmless GLCS from
                    and against any loss, expense, liability, damage, or claim
                    (including reasonable attorneys’ fees) which may be asserted
                    by a third party arising from your negligence or willful
                    misconduct and omission. GLC or its affiliates will not be
                    responsible for any loss (as mentioned above)
                  </p>
                  <h5>DATA PROTECTION</h5>
                  <p>
                    By registering for or participating in the Event, you
                    acknowledge and consent to the processing of your personal
                    data in accordance with GLC’s Privacy Notice.
                  </p>
                  <h5>MISCELLANEOUS</h5>
                  <p>
                    There shall be no correspondence relating to this Event or
                    the Terms. GLC has the right to cancel or terminate the
                    relationship at any time without prior notice and without
                    providing any reasons. On reserves the right to change or
                    amend the Terms at any time. The laws of India will govern
                    the Event and the Terms without regard to its conflict of
                    laws provisions.
                  </p>
                  <p>
                    The exclusive place of jurisdiction for all controversies
                    and claims is Faridabad, Haryana INDIA.
                  </p>
                </div>
              </div>
            </div>
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
