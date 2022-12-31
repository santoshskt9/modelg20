import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import BreadCrumb from "../../layout/BreadCrumb";
import Announcement from "./Announcement";
import Card from "./Card";
import FaqComponent from "./FaqComponent";
import G20India from "./G20India";
import G20Simulation from "./G20Simulation";
import HowDoesItWork from "./HowDoesItWork";
import Registrattion from "./Registrattion";
import ResourceLibrary from "./ResourceLibrary";
import ResourcesLibrary from "./ResourcesLibrary";
import Testimonial from "./Testimonial";

const Modelg20Page = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <BreadCrumb heading={"Model G20"} />

      {/* <!-- about us --> */}
      <section className="section pb-0">
        <div className="container">
          <div className="row justify-content-between mb-80">
            <div className=" col-md-6 mb-5 mb-md-0">
              <div className="d-flex align-items-start justify-content-start">
                <div>
                  <img
                    src={
                      process.env.REACT_APP_MAIN_URL + "images/logo-modal.png"
                    }
                    alt=""
                    className="icon-modal-logo"
                  />
                </div>
                <div>
                  <span className="section-title-border"></span>
                  <h2 className="section-title">What is Model G20?</h2>
                </div>
              </div>
              <p>
                Model G20 is an impressive mock simulator created to mirror the actual G20 or Group of
                Twenty summit of leaders from developed to emerging economies. It is aimed and designed
                for young learners, and professionals who wish to ace the art of public speaking and
                diplomacy.
              </p>
              <p>
                Model G20 in 2023 will mirror the actual G20 event happening under India’s presidency and
                will take place in schools, colleges and universities leading to state level events and finally a
                National Model G20 in August, 2023 in New Delhi. It will offer the youth across India a
                chance to participate in debates, panel discussions, cultural programmes and networking
                centred around real global issues.
              </p>
              {/* <div className="d-flex align-items-center">
                <Link
                  to="/g20-genius-certification"
                  className="btn btn-primary hover-ripple me-5"
                >
                  Get Certified
                </Link>
                <p>
                  As a G20 Genius. Your first step towards knowing everything
                  about G20 India.{" "}
                </p>
              </div>
              <div className="mt-3">
                <h5>
                  Sign up (email Id and submit button) with your emails to
                  receive our news and real-time updates.
                </h5>
                <input
                  type="text"
                  placeholder="Enter your Email Address"
                  className="form-control form-control-lg border-warning rounded-pill"
                />
                <div className="d-flex align-items-center">
                  <button className="btn btn-primary hover-ripple rounded-pill mt-2 me-5">
                    Submit
                  </button>
                </div>
              </div> */}
            </div>
            <div className="col-md-6">
              <img
                src="images/modelg20/main.jpg"
                className="w-100 rounded-4"
                alt=""
              />
            </div>
          </div>
          {/* D-none  */}
          <div className="row g-3 g-lg-4 g-xl-5 d-none">
            {/* <!-- What Will You Learn --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">01.</span> */}
                Your Learning
              </h3>
              <p className=" fs-6">
                As a model G20 delegate, you will learn the art of:
              </p>
              <ul className="ps-0 fs-6">
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  International Diplomacy
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Public Speaking
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Team
                  Leadership
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Strategy Building
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Multilateral Negotiation
                </li>
              </ul>
            </div>
            {/* <!-- Participation --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">02.</span> */}
                Who Can Participate?
              </h3>
              <p className="fs-6">
                Model G20 summit is for school students, university
                undergraduates, and young working professionals within the age
                group of 16-27. You can take part in pre-summit sessions by
                registering within your institution.
              </p>
              <p className="fs-6">
                Find further details <a href="#">here</a>
              </p>
            </div>
            {/* <!-- Campus Ambassador --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">03.</span> */}
                Become a G20 Campus Sherpa
              </h3>
              <p className="fs-6">
                In line with the Model G20 program on our website G20-india.org,
                we want to engage enthusiastic youth from schools, colleges and
                universities to become “Campus Ambassadors”. Each institution
                will have one campus ambassador who will volunteer to undertake
                a set of activities to promote, manage and execute Model G20
                programs within their campus.
              </p>
              <p className="fs-6">
                Interested in knowing more? <a href="#">Click here</a> for
                details
              </p>
            </div>
            {/* <!-- Organising Committeee --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">04.</span> */}
                Model G20 Campus Events Organising Committee
              </h3>
              <p className="fs-6 mb-0">
                If you want to organise a Model G20 event in your campus,
                register yourself with us and a representative will reach out to
                you.
              </p>
              <p>
                <span className="text-danger fs-4">*</span> Please note that
                Model G20 India will not pay or sponsor the campus events and
                the organising committee will have to arrange all funds required
                to execute the event.
              </p>
              <a href="" className="btn btn-primary-outline">
                Register Now
              </a>
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
      {/* <!-- /about us --> */}
      <section className="py-5 pt-0">
        <div className="container">
          <h3>WHAT WILL YOU LEARN?          </h3>
          <p>As a model G20 delegate, you will learn the art of</p>
          <div className="row gy-4 gx-3 gx-lg-4 gx-xl-5 justify-content-around">
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/team-building.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">Team building</h4>
                <p>
                  Work in groups to build friendly rapport to represent the
                  team’s message
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/consensus.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">Discussions with consensus</h4>
                <p>When opinions are shared to insight and learn</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/int-diplomacy.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">International diplomacy</h4>
                <p>Learn the skill of delivering reforms as a diplomat</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/negotiation.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">Multilateral Negotiations</h4>
                <p>Diverse regions come together to debate and negotiate</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/brainstorm.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">Strategy Building</h4>
                <p>Creating strategies for change for a better future for the world
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/macroeconomics.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">Macroeconomics</h4>
                <p>Sharing thoughts on economic matters that influence the world  </p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/analysis.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">Research and Analysis</h4>
                <p>Deep diving into factors that affect</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-3 text-center">
              <div>
                <img
                  src="./images/icons/public-speaking.png"
                  alt=""
                  className="icon-120"
                />
                <h4 className="mb-3 mt-4">Public Speaking</h4>
                <p>Speaking to a large audience and debating on diverse issues</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <h3>
            WHO CAN PARTICIPATE?
          </h3>
          <p>
            Model G20 summit is for school students, university undergraduates, and young working
            professionals within the age group of 16-27 (as on 31st December 2023). You can take part
            in pre-summit sessions by registering within your institution.

          </p>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <h3>
            APPLICATIONS INVITED FROM EDUCATIONAL
            INSTITUTIONS!
          </h3>
          <p>
            If you are an educational institution interested in organising Model G20 summits in your
            campus, you can simply register with us and we will help you with the processes.
          </p>
          <button className="btn btn-primary"
            onClick={() => {
              navigate('/registration');
            }}
          >REGISTER AS AN EDUCATIONAL INSTITUTION</button>
        </div>
      </section>
      <section className="mb-5">
        <div className="container">
          <h3>
            BECOME A G20 CAMPUS SHERPA
          </h3>
          <p>
            In line with the Model G20 programme,, we want to engage enthusiastic youth from schools,
            colleges and universities to become “Campus Sherpas”. Each institution will have one
            campus sherpa who will volunteer to undertake a set of activities to promote, manage
            and execute Model G20 programs within their campus
          </p>
          <p>
            Interested in knowing more?<a href="/g20-campus-sherpa"> Click here</a> for details
          </p>

        </div>
      </section>
            <Card/>
      <div
        style={{ zIndex: 1200 }}
        className="d-none d-lg-flex d-flex border bg-primary flex-wrap align-items-center sticky-top justify-content-center"
      >
        <a href="#scrollSpyG20India" className="btn btn-light-outline m-2">
          Model G20 India
        </a>
        <a href="#scrollSpyG20Simulation" className="btn btn-light-outline m-2">
          G20&nbsp;Simulation
        </a>
        <a href="#scrollspyHowDoesItWork" className="btn btn-light-outline m-2">
          How Does It Work
        </a>
        <a href="#scrollspyLibrary" className="btn btn-light-outline m-2">
          Resource Library
        </a>
        <a href="#scrollspyFaq" className="btn btn-light-outline m-2">
          FAQs
        </a>

        {/* <a href="#scrollspyRegister" className="btn btn-light-outline m-2">
          Registration
        </a> */}
      </div>

      <G20India />

      <G20Simulation />

      <HowDoesItWork />

      <ResourceLibrary />

      <FaqComponent />
    </div>
  );
};

export default Modelg20Page;
