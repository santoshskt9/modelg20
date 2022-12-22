import React from "react";

const CallToAction = () => {
  return (
    <section
      className="section bg-fixed bg-inset-75"
      style={{ backgroundImage: "url(./images/backgrounds/chairs-bg.jpg)" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 col-11 text-center mx-auto">
            <h2 className="title text-white">G20 Campus Ambassador Program</h2>
            <p className="fs-5 fw-semibold text-white">
              We are looking for young, savvy, informed, collaborative
              volunteers from schools, colleges and universities to become
              “Campus Ambassadors” for G20 events in their institution. Public
              speakers, student leaders, young diplomats and creative
              individuals, holler at us! We are interested in knowing you
              better!
            </p>
            <a href="contact.html" className="btn btn-primary hover-ripple">
              Know more!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
