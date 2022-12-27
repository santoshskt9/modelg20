import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Course from "../Course";
import BannerSwiper from "./BannerSwiper";
import BlogsSwiper from "./BlogsSwiper";
import CallToAction from "./CallToAction";
import InstagramFeeds from "./InstagramFeeds";
import NewsSwiper from "./NewsSwiper";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BannerSwiper />

      {/* banner feature */}
      <section
        className="translate-top ***"
        style={{ zIndex: 2, position: "relative" }}
      >
        <div className="container">
          <div className="row features">
            {/* feature item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark active h-100">
                <div className="icon-bg mb-4 water-wave">
                  {/* <i className="bi bi-sun-fill icon text-primary"></i> */}
                  <img
                    src="./images/icons/india2.png"
                    alt=""
                    className="w-100 p-3"
                  />
                </div>
                <h4 className="mb-4">India’s G20 Presidency</h4>
                <p>
                  In a historic turn of events, takes the centre stage at the
                  most significant economic discussions to help strengthen the
                  global architecture and fight unforeseen calamities together
                  with the world.
                </p>

                <Link to={"/model-g20"} className="btn btn-light-outline">Find out more</Link>
              </div>
            </div>
            {/* feature item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark h-100">
                <div className="icon-bg mb-4 water-wave">
                  {/* <i className="bi bi-sun-fill icon text-primary"></i> */}
                  <img
                    src="./images/icons/india3.png"
                    alt=""
                    className="w-100 p-3"
                  />
                </div>
                <h4 className="mb-4">India leads the way</h4>
                <p>
                  India’s innovations and initiatives have captured the
                  imagination of the world. Be it digital transformation, women
                  lead development or success of Indian startups, we are showing
                  the world how it is done.
                </p>
                <Link to={"/model-g20"} className="btn btn-primary-outline">Know more</Link>
              </div>
            </div>
            {/* feature item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark h-100">
                <div className="icon-bg mb-4 water-wave">
                  {/* <i className="bi bi-sun-fill icon text-primary"></i> */}
                  <img
                    src="./images/icons/Life.png"
                    alt=""
                    className="w-100 p-3"
                  />
                </div>
                <h4 className="mb-4">Mission LiFe</h4>
                <p>
                  ‘Lifestyle for Environment’ or LiFe initiative is a call to
                  action for every citizen to practice sustainability and
                  mindful utilisation of resources over ‘mindless destructive
                  consumption.’ Take the 21 day challenge and more.
                </p>
                <Link
                  to={"/life-environment-intiative"}
                  className="btn btn-primary-outline"
                >
                  Start your LiFE
                </Link>
              </div>
            </div>
            {/* feature item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark h-100">
                <div className="icon-bg mb-4 water-wave">
                  <img
                    src="./images/icons/youth2.png"
                    alt=""
                    className="w-100 p-3"
                  />
                </div>
                <h4 className="mb-4">Youth in G20</h4>
                <p>
                  Youth in G20 will be acting as the major attraction and
                  engagement group to facilitate the voice of the country’s
                  socio-political issues and suggest practical solutions in the
                  Leaders summit.
                </p>
                <Link to={"/model-g20"} className="btn btn-primary-outline">Engage Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /banner feature */}

      {/* PM speaks */}
      <section className="section pt-0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 bg-contain">
              {/* PM speaks image*/}
              <img
                className="img-fluid w-100 rounded shadow"
                src="./images/img1.jpeg"
                alt="About Image"
              />
            </div>
            <div className="col-md-6 pt-4">
              <span className="section-title-border"></span>
              <p className="subtitle"></p>
              <h2 className="section-title">PM Speaks</h2>
              <p className="mb-5 fs-5">
                <i className="bx bxs-quote-left text-warning bx-tada"></i> Let
                us join together to make India’s G20 Presidency a presidency of
                Healing, Harmony and Hope. Let us work together to shape the new
                paradigm of human-centric globalisation.{" "}
                <i className="bx bxs-quote-right text-warning bx-tada"></i>
              </p>
              {/* <Link to="/" className="btn btn-primary hover-ripple">
                View more of PM Modi's speeches
              </Link> */}
            </div>
          </div>
        </div>
      </section>
      {/* /PM speaks */}
      {/*Sherpa Speaks */}
      <section className="section pt-0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 bg-contain order-1 order-lg-2">
              {/* Sherpa image*/}
              <img
                className="img-fluid w-100 rounded shadow"
                style={{height:"450px",objectFit:"cover"}}
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/Anniv-Amitabh-Kant-1_1200x768.jpeg?size=690:388"
                alt="About Image"
              />
            </div>
            <div className="col-md-6 pt-4 order-2 order-lg-1">
              <span className="section-title-border"></span>
              <p className="subtitle"></p>
              <h2 className="section-title">Sherpa Speaks</h2>
              <p className=" fs-5">
                <i className="bx bxs-quote-left text-warning bx-tada"></i> As
                G-20 president, India’s Prime Minister Narendra Modi will be
                setting the agenda of the world. This is a huge responsibility
                because we are taking over this at a very challenging time in
                the world.
                <i className="bx bxs-quote-right text-warning bx-tada"></i>
              </p>
              <h6>India's Sherpa and CEO of Niti Aayog  - Amitabh Kant</h6>
              <Link to="/model-g20" className="btn btn-primary hover-ripple mt-4">
                View more from our resources library
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* /PM speaks */}

      {/* ModelG20  */}
      <section className="py-5">
        <div className="container">
          <div className="row gy-4 gx-3 gx-lg-4 gx-xl-5 justify-content-around">
            <div className="col-12">
              <div className="d-flex flex-wrap align-items-center justify-content-between">
                <div className="col-lg-6 text-center text-lg-start">
                  <span className="section-title-border"></span>
                  <div className="d-flex align-items-center">
                    {" "}
                    <img
                      src={
                        process.env.REACT_APP_MAIN_URL + "images/logo-modal.png"
                      }
                      alt=""
                      className="icon-modal-logo"
                    />
                    <h2 className="section-title mb-3">Model G20</h2>
                  </div>
                  <p className="mb-5 fs-5 ">
                    As India prepares for its G20 summit 2023, we invite
                    schools, colleges and universities to participate with us in
                    Model G20 pre-summits.
                  </p>
                </div>
                <div className="text-center text-lg-start pb-4 w-100">
                  <Link to={"/model-g20"} className="btn btn-primary-outline">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </section>
      {/* End ModelG20  */}

      {/* Featured Topics  */}
      <section className="section">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-4 order-2">
              <span className="section-title-border"></span>
              <p className="subtitle">Featured</p>
              <h2 className="section-title mb-2">Featured Topics</h2>
              <p className="mb-5 fs-5">
                Take a deep dive into topics everyone is talking about.
              </p>
              {/* feature item */}
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-5">
                  <div className="text-center me-4">
                    <div className="icon-bg water-wave">
                      {/* <i className="bi bi-cloud icon text-primary"></i> */}
                      <img
                        src="./images/icons/cdri.png"
                        className="w-100 p-3"
                        alt="cdri"
                      />
                    </div>
                  </div>
                  <div>
                    <h4>CDRI</h4>
                    Hon’ble Prime Minister Narendra Modi launched CDRI during
                    his UN Climate Summit speech back in 2019.
                  </div>
                </li>
                {/* feature item */}
                <li className="d-flex align-items-center mb-5">
                  <div className="text-center me-4">
                    <div className="icon-bg water-wave">
                      {/* <i className="bi bi-cloud icon text-primary"></i> */}
                      <img
                        src="./images/icons/book.png"
                        className="w-100 p-2"
                        alt="nep2020"
                      />
                    </div>
                  </div>
                  <div>
                    <h4>NEP 2020</h4>
                    Union cabinet brought about transformative reform in school
                    and higher education system by launching the New National
                    Education Policy (NEP) on 29th July 2020.
                  </div>
                </li>
                {/* <li className=" mb-5">
                  <button className="btn btn-primary-outline">
                    View More Topics
                  </button>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-5 pr-lg-0 order-lg-2 order-1 mb-5 mb-lg-0">
              <div className="feature-img-bg box-shadow">
                {/* <video src="https://youtu.be/7eWPI1tEz3I" controls className="w-100"></video>        */}
                <iframe
                  className="d-block w-100"
                  height="400"
                  src="https://www.youtube.com/embed/7eWPI1tEz3I?controls=0"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* <div className="mt-4">
                <a
                  href="#"
                  className="fs-5 text-primary border-bottom border-warning border-2 fw-semibold"
                >
                  See more featured videos <i className="bi bi-arrow-right"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* End Featured Topics  */}

      <BlogsSwiper />

      <CallToAction />

      <NewsSwiper />

      {/* <Course /> */}

      {/* <InstagramFeeds/> */}
    </>
  );
};

export default Home;
