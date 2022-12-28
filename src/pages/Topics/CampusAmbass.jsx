import React from "react";

const CampusAmbass = () => {
  return (
    <div>
      {/* <!-- page title --> */}
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
              <h1 className="text-white mb-3">G20 Campus Sherpa Program</h1>
              {/* <!-- breadcrumb --> */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0">
                  <li className="breadcrumb-item font-weight-semebold">
                    <a className="text-white" href="index.html">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item font-weight-semebold active text-primary"
                    aria-current="page"
                  >
                    G20 Campus Sherpa Program
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /page title --> */}
      <section className="section container">
        {" "}
        <h3>G20 Campus Sherpa Program</h3>
        <p className="text-dark fs-5 mb-3">
          In line with the Model G20 program, we want to engage enthusiastic
          youth from schools, colleges and universities to become “Campus
          Sherpa”. Each institution will have one campus sherpa who will
          volunteer to undertake a set of activities to promote, manage and
          execute Model G20 programs within their campus.
        </p>
        <h4>How will they be selected?</h4>
        <p className="text-dark fs-5">
          We need students with prior experience in organising events in their
          institution or outside their institution. Therefore, in order to
          register as a campus sherpas, fill the registration form, which will
          have your details along with a minimum requirement of five G20
          volunteers from your institution
        </p>
        <h4>What will Campus Sherpa’s do?</h4>
        <ul className="list-group border-none bg-gray mt-3">
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Organise Model G20 events in their campus on a yearly basis.
            </span>
          </li>
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Organise and manage Engagement Groups and Finance Track Working
              Groups in their campus on a regular basis.
            </span>
          </li>
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Take necessary permissions from their college authorities to
              organise Model G20 events.
            </span>
          </li>
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Organise funds, sponsors and volunteers towards an institutional
              level Model G20 event.
            </span>
          </li>
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Invite participation from students as delegates to the Model G20
              event.
            </span>
          </li>
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Create awareness about Model G20 in their campus.{" "}
            </span>
          </li>
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Assist National Model G20 staff in planning and execution of the
              yearly summit.{" "}
            </span>
          </li>
          <li className="list-group-item border-0 bg-gray ps-0">
            <span className="p-2 bg-primary clip-cicle text-white mt-2">
              <i className="bi bi-arrow-right"></i>
            </span>{" "}
            <span className="ps-2 fs-5">
              Participate in National Level Events as volunteers, speakers and
              student delegates.{" "}
            </span>
          </li>
        </ul>
        <br /><br />
        <div className="text-dark fs-5">
          <h4>Experience for G20 Sherpa and volunteers</h4>
          <br />
          - Leadership
          <br />
          - Public speaking
          <br />
          - People management
          <br />
          - Event management
          <br />
          - Volunteering experience
          <br />
          - Increased self-awareness in economic matters
          <br />
          - Participation in national events
          <br />
        </div>
        <br /><br />
        <h4>Certifications</h4>
        <p className="text-dark fs-5">
          G20 Campus Sherpa and their 10 volunteers will receive
          certifications from us for their valuable help in promoting and
          organising Model G20 Events in their campus.
        </p>
        <button className="btn btn-primary hover-ripple">
          Register
        </button>
      </section>
    </div>
  );
};

export default CampusAmbass;
