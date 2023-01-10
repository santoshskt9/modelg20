import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BannerSwiper from "./BannerSwiper";
import BlogsSwiper from "./BlogsSwiper";
import CallToAction from "./CallToAction";
import NewsSwiper from "./NewsSwiper";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>{"Yuvamanthan Model G20 India"}</title>
        <link rel="canonical" href={"https://www.yuvamanthan.org/"} />
      </Helmet>
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
                <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                  <div>
                    <div className="icon-bg mb-4 water-wave">
                      {/* <i className="bi bi-sun-fill icon text-primary"></i> */}
                      <img
                        src="./images/icons/india2.png"
                        alt="feature"
                        className="w-100 p-3"
                      />
                    </div>
                    <h4 className="mb-4">India’s G20 Presidency</h4>
                    <p>
                      In 2023, India takes the centre stage on the G20 forum for
                      economic discussions and financial outlook to help build a
                      better world of peace and harmony.
                    </p>
                  </div>
                  <button className="btn btn-light-outline">
                    Find out more
                  </button>
                </div>
              </div>
            </div>
            {/* feature item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark h-100">
                <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                  <div>
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
                      India’s innovations and initiatives will be on full
                      display. From digital transformation, women
                      led-development to the rise of Indian startups, we will
                      show the world how it’s done.
                    </p>
                  </div>
                  <Link
                    to={"/achievements-of-india"}
                    className="btn btn-primary-outline"
                  >
                    Know more
                  </Link>
                </div>
              </div>
            </div>
            {/* feature item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark h-100">
                <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                  <div>
                    <div className="icon-bg mb-4 water-wave">
                      {/* <i className="bi bi-sun-fill icon text-primary"></i> */}
                      <img
                        src="./images/icons/Life.png"
                        alt=""
                        className="w-100 p-3"
                      />
                    </div>
                    <h4 className="mb-4" style={{ textTransform: "initial" }}>
                      LiFE <span className="text-uppercase">Mission</span>
                    </h4>
                    <p>
                      ‘Lifestyle for Environment’ initiative is a call to action
                      for every citizen to choose sustainability and mindful
                      utilisation of resources.
                    </p>
                  </div>
                  <Link
                    to={"/life-environment-intiative"}
                    className="btn btn-primary-outline text-initial"
                  >
                    START YOUR LiFE
                  </Link>
                </div>
              </div>
            </div>
            {/* feature item */}
            <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0">
              <div className="bg-white py-5 px-4 text-center box-shadow transition hover-bg-dark h-100">
                <div className="d-flex flex-column justify-content-between h-100 align-items-center">
                  <div>
                    <div className="icon-bg mb-4 water-wave">
                      <img
                        src="./images/icons/youth2.png"
                        alt=""
                        className="w-100 p-3"
                      />
                    </div>
                    <h4 className="mb-4">Youth in G20</h4>
                    <p>
                      Youth in G20 is a major attraction and one of the
                      engagement groups to facilitate the voice of the country’s
                      socio-political issues and suggest solutions for the G20
                      Leaders.
                    </p>
                  </div>
                  <Link
                    to={"/youth-community"}
                    className="btn btn-primary-outline"
                  >
                    Engage Now
                  </Link>
                </div>
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
                alt="About"
                style={{ height: "450px", objectFit: "cover" }}
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
      <section className="section pt-0 pb-0">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 bg-contain order-1 order-lg-2">
              {/* Sherpa image*/}
              <img
                className="img-fluid w-100 rounded shadow"
                style={{ height: "450px", objectFit: "cover" }}
                src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202012/Anniv-Amitabh-Kant-1_1200x768.jpeg?size=690:388"
                alt="About"
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
              <h6>India's G20 Sherpa - Mr. Amitabh Kant</h6>
            </div>
          </div>
        </div>
      </section>
      {/* /PM speaks */}

      {/* Featured Topics  */}
      <section className="section pb-4">
        <div className="container-fluid">
          <div className="row align-items-center justify-content-around">
            <div className="col-lg-4 order-2">
              <span className="section-title-border"></span>
              <p className="subtitle">Themes</p>
              <h2 className="section-title mb-2">Featured Topics</h2>
              <p className="mb-5 fs-5">
                Take a deep dive into topics everyone is talking about.
              </p>
              {/* feature item */}
              <ul className="list-unstyled">
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
                  <a href="/nep" className="text-dark">
                    <h4>New Education Policy (NEP) 2020</h4>
                  </a>
                </li>
                {/* <li className="d-flex align-items-center mb-5">
                  <div className="text-center me-4">
                    <div className="icon-bg water-wave">
                      <img
                        src="./images/icons/Life.png"
                        className="w-100 p-2"
                        alt="nep2020"
                      />
                    </div>
                  </div>
                  <a href="/life-environment-intiative" className="text-dark">
                    <h4>
                      Lifestyle for Environment Initiative{" "}
                      <span className="text-initial">(LiFE)</span>{" "}
                    </h4>
                  </a>
                </li> */}
                <li className="d-flex align-items-center mb-5">
                  <div className="text-center me-4">
                    <div className="icon-bg water-wave">
                      {/* <i className="bi bi-cloud icon text-primary"></i> */}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/683/683527.png"
                        className="w-100 p-3"
                        alt="cdri"
                      />
                    </div>
                  </div>
                  <a href="/startup-india" className="text-dark">
                    <h4>Start-up India</h4>
                  </a>
                </li>
                <li className="d-flex align-items-center mb-5">
                  <div className="text-center me-4">
                    <div className="icon-bg water-wave">
                      {/* <i className="bi bi-cloud icon text-primary"></i> */}
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/1814/1814562.png"
                        className="w-100 p-3"
                        alt="cdri"
                      />
                    </div>
                  </div>
                  <a href="/digital-transform" className="text-dark">
                    <h4>Digital Transformation</h4>
                  </a>
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
                  src="https://www.youtube.com/embed/RdqNad4-i1g"
                  title="G20 University Connect - Engaging Young Minds (December 1, 2022)"
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
