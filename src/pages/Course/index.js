import React from "react";

const Course = () => {
  return (
    <>
      <section
        className="section"
        style={{
          background: "url(images/backgrounds/g20.jpg) no-repeat center",
          backgroundSize: "cover",
          boxShadow: "inset 0 0 0 2000px rgba(8, 8, 8, 0.618)",
        }}
      >
        <div className="container pt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="text-white mb-3">
                <span className="" style={{ textStyle: "lowercase" }}>
                  G20 Genius Certification{" "}
                </span>
              </h1>
              {/* <!-- breadcrumb --> */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0">
                  <li className="breadcrumb-item font-weight-semebold">
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item font-weight-semebold active text-primary"
                    aria-current="page"
                  >
                    G20 Genius Certification
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <span className="section-title-border"></span>
          <h3>G20 Genius Certification</h3>
          <div className="row">
            <div className="col-12 col-lg-8 order-2 order-lg-1">
              <div>
                <p className="text-dark fs-5 " style={{ textAlign: "justify" }}>
                  The G20 Genius Certificate is a one-of-a-kind learning module
                  that approaches the history, function, operations, objectives
                  and challenges of G20 as pedagogical knowledge. The 45 minute
                  interactive learning orientation touches on all key aspects
                  that one must know about G20. It engages the user with quirky
                  animations, audio-visuals, quizzes, QnA’s and DYI exercises;
                  and is tailored specifically for young people to understand
                  and find the information they need without getting bored. It
                  aims to create societal influencers and torch bearers of the
                  G20 campaign that is “Vasudhaiva Kutumbakam” and subtly impact
                  the collective conscience by emphasising on showcasing India’s
                  initiatives and culture to the world.
                </p>
                <h4>Course Outline</h4>
                <ul className="list-group border-none bg-gray mt-3">
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>{" "}
                    <span className="ps-2 fs-5">What is G20</span>
                  </li>
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>{" "}
                    <span className="ps-2 fs-5">
                      The economic, political and cultural implications of the
                      group of twenty.{" "}
                    </span>
                  </li>
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>{" "}
                    <span className="ps-2 fs-5">
                      Member countries and a brief overview
                    </span>
                  </li>
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span className="ps-2 fs-5">Aims and objectives</span>
                  </li>
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span className="ps-2 fs-5">Mandate of G20</span>
                  </li>
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span className="ps-2 fs-5">
                      International cooperation on economic challenges,
                      stability and growth, preventing financial crisis and
                      creating new financial architecture.
                    </span>
                  </li>
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span className="ps-2 fs-5">
                      Global cooperation on climate, sustainability, health,
                      digital transformation, women lead development, inclusive
                      shared future, peace, harmony, security etc.
                    </span>
                  </li>
                  <li className="list-group-item border-0 ps-0 d-flex align-items-center">
                    <span className="p-2 bg-primary clip-cicle text-white mt-2">
                      <i className="bi bi-arrow-right"></i>
                    </span>
                    <span className="ps-2 fs-5">India's role in G20.</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-4 order-1 order-lg-2">
              <div>
                <img
                  src="https://res.cloudinary.com/dev-empty/image/upload/v1662282955/uheioegbcm7ghvmpiouh.jpg"
                  alt=""
                  className="w-100"
                />
                <ul className="list-group">
                  <li className="list-group-item p-4 pb-2 border-bottom-0">
                    <h5 className="d-flex justify-content-between">
                      <span>
                        <i className="bi bi-clock text-warning"></i> Duration
                      </span>
                      <span>45min total length</span>
                    </h5>
                  </li>
                  <li className="list-group-item p-4 pt-2 border-top-0">
                    <h5 className="d-flex justify-content-between">
                      <span>
                        <i className="bi bi-globe text-warning"></i> Mode
                      </span>
                      <span className="text-success">Online</span>
                    </h5>
                  </li>
                  <li className="list-group-item p-3 text-center">
                    <button className="btn btn-primary w-100 rounded-3  hover-ripple">
                      Enroll Now
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;