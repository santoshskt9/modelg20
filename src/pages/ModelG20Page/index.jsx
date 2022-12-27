import React from "react";
import Announcement from "./Announcement";
import FaqComponent from "./FaqComponent";
import Registrattion from "./Registrattion";
import ResourcesLibrary from "./ResourcesLibrary";
import Testimonial from "./Testimonial";

const Modelg20Page = () => {
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
                <h1 className="text-white mb-3">Model G20</h1>
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
                      Model G20
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /page title --> */}

        {/* <!-- about us --> */}
        <section className="section position-relative">
          <div className="container">
            <div className="row justify-content-between mb-80">
              <div className=" col-md-6 mb-5 mb-md-0">
                <span className="section-title-border"></span>
                <h2 className="section-title">What is Model G20?</h2>
                <p>
                  Model G20 is an impressive mock simulator created to mirror
                  the actual G20 or Group Twenty summit of leaders from
                  developed to emerging economies. It is aimed and designed for
                  young learners, and professionals who wish to ace the art of
                  public speaking and diplomacy
                </p>
                <p>
                  The next model G20 summit is planned to take place next year
                  around July 2023!
                </p>
                <p className="mb-5">
                  G20 experts and active practitioners have collaborated
                  together to design this G20 simulation. It actively offers the
                  youth across India to experience debates, panel discussions,
                  and networking on real global issues.
                </p>
                <div className="d-flex align-items-center">
                  <a
                    href="service.html"
                    className="btn btn-primary hover-ripple me-5"
                  >
                    Get Certified
                  </a>
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
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="images/modelg20/main.jpg"
                  className="w-100 rounded-4"
                  alt=""
                />
              </div>
            </div>
            <div className="row g-3 g-lg-4 g-xl-5">
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
                  Become a G20 Campus Ambassador
                </h3>
                <p className="fs-6">
                  In line with the Model G20 program on our website
                  G20-india.org, we want to engage enthusiastic youth from
                  schools, colleges and universities to become “Campus
                  Ambassadors”. Each institution will have one campus ambassador
                  who will volunteer to undertake a set of activities to
                  promote, manage and execute Model G20 programs within their
                  campus.
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
                  register yourself with us and a representative will reach out
                  to you.
                </p>
                <p>
                  <span className="text-danger fs-4">*</span> Please note that
                  Model G20 India will not pay or sponsor the campus events and
                  the organising committee will have to arrange all funds
                  required to execute the event.
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

        <div
          style={{ zIndex: 1200 }}
          className="d-none d-lg-flex d-flex border bg-primary flex-wrap align-items-center sticky-top justify-content-center"
        >
          <a href="#scrollspySimulation" className="btn btn-light-outline m-2">
            G20&nbsp;Simulation
          </a>
          <a href="#scrollspyTestimonial" className="btn btn-light-outline m-2">
            Testimonial
          </a>
          <a href="#scrollspyFaq" className="btn btn-light-outline m-2">
            FAQs
          </a>
          <a href="#scrollspySummitIndia" className="btn btn-light-outline m-2">
            Model G20 India
          </a>
          <a href="#scrollspyLibrary" className="btn btn-light-outline m-2">
            Resource Library
          </a>
          <a href="#scrollspyRegister" className="btn btn-light-outline m-2">
            Registration
          </a>
        </div>

        {/* <!-- =============G20 Simulation============= --> */}
        <section
          id="scrollspySimulation"
          className="bg-gray section"
          style={{ position: "relative" }}
        >
          <div className="container">
            <div className="section-title">
              <span className="section-title-border"></span>
              <h2 className="section-title">G20 Simulation</h2>
            </div>
            {/* <!-- Overview  --> */}
            <div className="overview">
              <h4>Overview</h4>
              <p className="text-dark mb-2">
                Model G20 simulation is a notable and unique group interaction
                just like a real annual G20 Leaders' summit. As the Indian youth
                forms a majority across the nation, the simulation allows them
                to polish their critical skills in the areas of public speaking,
                diplomacy, negotiation, team strategy building and more.
              </p>
              <p className="text-dark mb-2">
                Moreover, model G20 is apt for young leaders of tomorrow who
                wish to be the drivers of change.
              </p>
              <p className="text-dark mb-2">
                The summit offers youngsters a plethora of opportunities to
                learn, discuss, and act with powerful speakers, learned
                panellists, and skilled professionals on the most burning global
                issues
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- Three Tracks  --> */}
            <div className="three-tracks">
              <h4>Three Tracks of Negotiation</h4>
              <p className="text-dark mb-2">
                Typically, the G20 summit consists of two parallel tracks - The
                Finance track and the Sherpa track. Each track's meeting is held
                separately wherein they discuss and negotiate matters of
                economic and political importance.
              </p>
              <p className="text-dark mb-2">
                The idea is to mirror the actual G20 summit talks which are held
                in a series of meetings throughout the year by the Host G20. Did
                you know, India has bagged the G20 Presidency for 2023.
              </p>
              <p className="text-dark mb-2">
                Remember, the objective of these model track meetings is to
                ideate and discuss pressing issues that can be included in the
                consensus-based communique document.
              </p>
            </div>
            <div>
              <ul
                className="nav nav-pills nav-pill-design g-3 mb-3 justify-content-start rounded-5 border shadow p-2 mt-4"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item m-1" role="presentation">
                  <button
                    className=" btn btn-primary-outline active rounded-pill px-5 py-3"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                  >
                    Leaders Track
                  </button>
                </li>
                <li className="nav-item m-1" role="presentation">
                  <button
                    className=" btn btn-primary-outline rounded-pill px-5 py-3"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                  >
                    Sherpa Track
                  </button>
                </li>
                <li className="nav-item m-1" role="presentation">
                  <button
                    className=" btn btn-primary-outline rounded-pill px-5 py-3"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                  >
                    Finance Track
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container py-4">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-4">
                        <ul className="list-unstyled">
                          {/* <!-- feature item --> */}
                          <li className="d-flex align-items-center mb-5">
                            <div className="text-center me-4">
                              <div className="icon-bg water-wave">
                                {" "}
                                <img
                                  src="https://website.whatfix.com/wp-content/uploads//2021/06/guidance.svg"
                                  className="w-100 p-3"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <h4>Leaders Track</h4>
                            </div>
                          </li>
                        </ul>
                        <h6 className="fs-5 fw-light text-lowercase">
                          This is the highlight of the model G20 summit as it
                          involves leading the delegation and representing your
                          side in the summit. In this segment, the leaders must
                          coherently divide their agenda smartly between Sherpa
                          and Finance tracks. Moreover, here you speak on the
                          global-centric topic that you feel requires the most
                          attention from the Leaders.
                        </h6>
                      </div>
                      <div className="col-12 col-lg-8">
                        <img
                          src="images/tracks2.jpeg"
                          alt=""
                          className="d-block w-100 rounded-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container py-4">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-4">
                        <ul className="list-unstyled">
                          {/* <!-- feature item --> */}
                          <li className="d-flex align-items-center mb-5">
                            <div className="text-center me-4">
                              <div className="icon-bg water-wave">
                                {" "}
                                <img
                                  src="https://website.whatfix.com/wp-content/uploads//2021/06/guidance.svg"
                                  className="w-100 p-3"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <h4>Sherpa Track</h4>
                            </div>
                          </li>
                        </ul>
                        <h6 className="fs-5 fw-light text-lowercase">
                          This track is led by the Sherpas or emissaries of G20
                          leaders. It focuses on the developmental and
                          socio-political agendas of the summit. <br />
                          <br />
                          Under India's presidency, 13 working groups like
                          agriculture, education along with 2 initiatives will
                          work together to provide inputs and recommendations.
                        </h6>
                      </div>
                      <div className="col-12 col-lg-8">
                        <img
                          src="images/tracks.jpeg"
                          alt=""
                          className="d-block w-100 rounded-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  tabIndex="0"
                >
                  <div className="container py-4">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-4">
                        <ul className="list-unstyled">
                          {/* <!-- feature item --> */}
                          <li className="d-flex align-items-center mb-5">
                            <div className="text-center me-4">
                              <div className="icon-bg water-wave">
                                {" "}
                                <img
                                  src="https://website.whatfix.com/wp-content/uploads//2021/06/guidance.svg"
                                  className="w-100 p-3"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div>
                              <h4>Finance Track</h4>
                            </div>
                          </li>
                        </ul>
                        <h6 className="fs-5 fw-light text-lowercase">
                          Finance ministers and Central Bank governors lead the
                          finance track to discuss macroeconomic issues and come
                          up with reforms to monitor global economic threats{" "}
                          <br /> <br />
                          The key factor in these meetings is that the delegates
                          must form a good balance in their debating and
                          negotiations while addressing their issues. <br />{" "}
                          <br />
                          These model sessions are instrumental as here the
                          participants from all tracks come together to
                          re-create an actual G20 Leaders Summit and form a
                          consensus portfolio
                        </h6>
                      </div>
                      <div className="col-12 col-lg-8">
                        <img
                          src="images/tracks3.jpeg"
                          alt=""
                          className="d-block w-100 rounded-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="container">
            {/* <!-- Delegation  --> */}
            <div className="overview">
              <h4>Delegation</h4>
              <p className="text-dark mb-2">
                The model G20 summit comprises 5-7 delegates. Each group is
                required to have a head to lead the delegation into the summit.
              </p>
              <p className="text-dark mb-2">
                For the Sherpa Track, we have a Sherpa and a
                Sous-Sherpa(deputy). For the Finance Track, we have the finance
                minister and Central Bank governor (deputy). The 6th and 7th
                delegates will act as the senior advisors to their teams in both
                tracks. All members of the delegation will be receiving
                certifications at the end of the model summit simulation
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- Delegation  --> */}
            <div className="overview">
              <h4>Awards and Recognition</h4>
              <p className="text-dark mb-2">
                All the delegates who actively take part in the model G20 summit
                will be proud recipients of performance certificates and
                mementoes.
              </p>
              <p className="text-dark mb-2">
                Additionally, the delegates, leaders, and teams with the best
                overall performance will be awarded the following sets of awards
              </p>
              <ul className="ps-0 fs-6 text-dark">
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Best
                  Delegation (1st Prize)
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  All-rounder Delegation (2nd Prize)
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Best
                  Head of Delegation
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Best
                  Delegate in Finance Track
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>Best
                  Delegate in Sherpa Track
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Outstanding Delegation in Finance Track
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Outstanding Delegation in Sherpa Track
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Outstanding Head of Delegation
                </li>
              </ul>
            </div>
            <hr className="my-4" />
            {/* <!-- Venue  --> */}
            <div className="overview">
              <h4>Venue of the Summit</h4>
              <p className="text-dark mb-2">
                The location and the official venue of the model G20 summit will
                be announced shortly.
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- Cultural Night  --> */}
            <div className="overview">
              <h4>Cultural Night</h4>
              <p className="text-dark mb-2">
                As the model G20 summit will take place in the heart of the
                country, the participants will receive a memorable opportunity
                to explore the diverse food flavours and cultural heritage of
                India with an all-sponsored cultural night event. Many
                traditional shows, delectable cuisines, and network exchanges
                are planned by the Indian government for the delegates.
              </p>
              <p className="text-dark mb-2">
                Although this year's events will be announced soon, you must be
                alert for our latest news updates on email.
              </p>
              <p className="text-dark mb-2">
                This once-in-a-lifetime summit will not just offer a global
                outlook into various nations but also provide a vivid Indian
                cultural experience for model G20 participants. So, we hope you
                don't miss your chance!
              </p>
            </div>
            {/* </div> */}
          </div>
        </section>
        {/* // <!-- =============///G20 Simulation============= --> */}

        <Testimonial />

        <FaqComponent />

        {/* G20 Summit India and Announcements  */}
        <div className="row" id="scrollspySummitIndia">
          <div className="col-12 col-lg-7">
            {/* <!-- =============G20 Summit India============= --> */}
            <section className="bg-gray section">
              <div className="container">
                <div className="section-title">
                  <span className="section-title-border"></span>
                  <h2 className="section-title">G20 Summit in India</h2>
                </div>
                {/* <!-- Overview  --> */}
                <div className="overview">
                  <h4>Overview</h4>
                  <p className="text-dark mb-2">
                    The Group of Twenty (20) is one of the premier forums for
                    international economic cooperation. It holds meetings to
                    discuss the most pressing global matters and formulate
                    reforms to strengthen global architecture
                  </p>
                  <p className="text-dark mb-2">
                    India shared a joyous moment of pride with its 1 billion
                    citizens after receiving the G20 presidency for 2023. In the
                    words of honourable Prime Minister, Shri Narendra Modi for
                    the nation’s youth
                  </p>
                  <p
                    className="text-dark mb-2 fs-5 p-3 p-lg-4 bg-warning bg-opacity-50 rounded-4"
                    style={{ maxWidth: "700px" }}
                  >
                    <i className="bx bxs-quote-left"></i> It is the
                    responsibility of the citizens to go beyond the expectations
                    and acquaint the world with India’s capabilities,
                    philosophy, social and intellectual strength.{" "}
                    <i className="bx bxs-quote-right"></i>
                  </p>
                  <p className="text-dark">
                    <b>Fact:</b> India holds the Presidency of the G20 from 1st
                    December 2022 to 30th November 2023.
                  </p>
                  <p className="text-dark ">
                    As part of India’s G20 presidency, many youth-centric
                    organisations and diverse forums have begun the preparations
                    and participation under multiple meeting formats.
                  </p>
                </div>
                <hr className="my-4" />
                {/* <!-- G20 Theme  --> */}
                <div className="three-tracks">
                  <h4>G20 Theme</h4>
                  <p className="text-dark mb-2">
                    The theme for G20 Presidency in India is -{" "}
                    <i className="bx bxs-quote-alt-left"></i>{" "}
                    <i>Vasudhaiva Kutumbakam</i>{" "}
                    <i className="bx bxs-quote-alt-right"></i> which translates
                    into ‘One Earth. One Family. One Future’ – The theme vividly
                    discusses the poignant value of all life forms on earth and
                    their exponential interconnectivity with the future and
                    universe.
                  </p>
                  <p className="text-dark mb-2">
                    The summit theme also highlights the significance of LiFE
                    (Lifestyle for Environment). The key indication to
                    environmental sustainability on individual and national
                    levels.
                  </p>
                </div>
                <hr className="my-4" />
                {/* <!-- G20 Function  --> */}
                <div className="overview">
                  <h4>G20 Function</h4>
                  <p className="text-dark mb-2">
                    India under the G20 presidency will be the torchbearer of
                    moving the G20 agenda forward as a host to the summit.
                    Within the two tracks – Sherpa and Finance – thematically
                    inclined working groups will work laboriously to carry
                    forward the conversations of economic, socio-political and
                    financial importance.
                  </p>
                  <p className="text-dark mb-2">
                    India under the G20 presidency will be the torchbearer of
                    moving the G20 agenda forward as a host to the summit.
                    Within the two tracks – Sherpa and Finance – thematically
                    inclined working groups will work laboriously to carry
                    forward the conversations of economic, socio-political and
                    financial importance.
                  </p>
                </div>
                <hr className="my-4" />
                {/* <!-- Role of Youth in G20  --> */}
                <div className="overview">
                  <h4>Role of Youth in G20</h4>
                  <div
                    className=" mb-2  p-3 p-lg-4 pb-2 pt-5 bg-warning bg-opacity-50 rounded-4"
                    style={{ maxWidth: "700px" }}
                  >
                    <p className="fs-5 text-dark text-center mb-0">
                      <i className="bx bxs-quote-left"></i> Inclusive,
                      ambitious, decisive, and action-oriented.{" "}
                      <i className="bx bxs-quote-right"></i>
                    </p>
                    <div className="text-end">
                      <span className="text-end text-dark">
                        --Hon’ble PM, Narendra Modi
                      </span>
                    </div>
                  </div>
                  <p className="text-dark mb-2">
                    This vision for the youth of India is what the prime
                    minister hopes so as to bring better opportunities for all
                    Indians.
                  </p>
                  <p className="text-dark mb-2">
                    As G20 summit Sherpa meetings will be carried out in every
                    state by representatives of member nations, this will be a
                    unique opportunity for young Indians to share their views,
                    and mission on helping to achieve the PM’s vision.
                  </p>
                  <p className="text-dark mb-2">
                    They can actively participate in model G20 pre-summits, G20
                    branding festivals, quiz and poetry competitions, etc.
                    organised by G20 secretariats to be a part of the global
                    conversation.
                  </p>
                  <p className="text-dark mb-2">
                    Moreover, youth can be part of PM’s “digital transformation
                    in India” discourse by actively taking the narrative forward
                    as representatives for a digital and inclusive India.
                  </p>
                  <p className="text-dark mb-2">
                    Check out the multiple <a href="#">youth events here</a>{" "}
                    that the G20 Secretariat has planned for 2023.
                  </p>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-12 col-lg-6">
                    {/* <!-- G20 Engagement Groups  --> */}
                    <div className="overview">
                      <h4>G20 Engagement Groups</h4>
                      <p className="text-dark mb-2">
                        Engagement groups in the G20 summit are non-government
                        firms that take part in the policy-making process and
                        provide recommendations to the G20 leaders
                      </p>
                      <p className="text-dark mb-2">
                        At present, there are nine engagement groups
                        contributing in the G20 summit which are;
                      </p>
                      <ul className="ps-0 fs-6">
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Business20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Civil20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Labour20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Parliament20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Science20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            SAI20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Startup20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Think20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Urban20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Women20
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Youth20
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    {/* <!-- G20 Finance Track Working Groups  --> */}
                    <div className="overview">
                      <h4>G20 Finance Track Working Groups</h4>
                      <ul className="ps-0 fs-6">
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Development Working Group
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Framework Working Group
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            International Finance Architecture (IFA)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Infrastructure Working Group
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Sustainable Finance Working Group
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Global Partnership for Financial Inclusion (GPFI)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            Joint Finance and Health Task Force
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.g20.org/en/workstreams/engagement-groups/"
                            target="_blank"
                          >
                            <i className="bi bi-arrow-right text-primary me-2"></i>
                            International Taxation Agenda
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- =============///G20 Simulation============= --> */}
          </div>
          <div className="col-12 col-lg-5">
            <div className="sticky-top h-100">
              <Announcement />
            </div>
          </div>
        </div>

        <ResourcesLibrary />

        <section id="scrollspyRegister">
          <Registrattion />
        </section>
      </div>
  );
};

export default Modelg20Page;
