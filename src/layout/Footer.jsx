import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      {/* main footer */}
      <div className="py-5" style={{ background: "#A9A9A9" }}>
        <div className="container">
          <div className="row justify-content-between">
            {/* footer content */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              {/* logo */}
              <Link to={"/"} >
                {/* <img
                  className="img-responsive height-50  border-end pe-2  border-3"
                  src={process.env.REACT_APP_MAIN_URL + "images/yuva-logo.png"}
                  alt="G20india"
                />
                */}
                <img
                  className="img-responsive height-75 "
                  style={{maxWidth: '300px', objectFit: 'contain'}}
                  src={process.env.REACT_APP_MAIN_URL + "images/logo-yuva.png"}
                  alt="G20india"
                />
              </Link> 
              <p className="text-white fs-5 mb-1 lh-sm mt-4">
                Engaging the youth in a global dialogue on international
                diplomacy, leadership and collective duty. A platform to drive
                change by creating awareness on issues that matter and build
                capacity to navigate the changing economic scenarios.
              </p>
              <p className="text-white mb-5 fs-5">
                Proudly representing India to the world for sustainability,
                peace and growth.
              </p>
              <h4 className="text-white mb-4">Follow Us On</h4>
              {/* social links */}
              <ul className="list-inline social-icon-alt">
                <li className="list-inline-item">
                  <a className="hover-ripple" target={"_blank"} href="https://www.facebook.com/profile.php?id=100088850808774">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" target={"_blank"} href="https://www.instagram.com/yuvamanthan_org/">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" target={"_blank"} href="https://twitter.com/Yuvamanthan_org">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" target={"_blank"} href="https://www.linkedin.com/in/yuva-manthan-09aa2025b/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" target={"_blank"} href="https://pin.it/1HUmny3">
                    <i className="bi bi-pinterest"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" target={"_blank"} href="https://www.snapchat.com/add/yuvamanthan?sender_web_id=cc1dcfed-7ef4-4996-9c78-6d5df3acdee6&device_type=desktop&is_copy_url=true">
                    <i className="bi bi-snapchat"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {/* service list */}
                <div className="col-12 col-md-6 mb-5">
                  <h4 className="text-white mb-4">Engage with us</h4>
                  <ul className="list-styled">
                    <li className="mb-2">
                      <a className="text-white d-block" href="/model-g20">
                        Model G20
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-white d-block"
                        href="/g20-genius-certification"
                      >
                        G20 Genius Certification
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        className="text-white d-block"
                        href="/g20-campus-ambassador"
                      >
                        Campus Sherpa Programme
                      </a>
                    </li>
                    {/* <li className="mb-2">
                      <a
                        className="text-white d-block"
                        href="/life-environment-intiative"
                      >
                        LiFE 21 day challenge
                      </a>
                    </li> */}
                    {/* <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        Features Stories
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        PM Speak
                      </a>
                    </li> */}
                    <li className="mb-2">
                      <a
                        className="text-white d-block"
                        href="/life-environment-intiative"
                      >
                        LiFE
                      </a>
                    </li>
                    {/* <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        Upcoming events
                      </a>
                    </li> */}
                  </ul>
                </div>
                {/* contact info */}
                <div className="col-12 col-md-6 mb-5">
                  <h4 className="text-white mb-4">Contact Us</h4>
                  <ul className="list-unstyled">
                    <li className="text-light mb-3">
                      A 92 ( First Floor) South Extension Part II New Delhi-
                      110049
                    </li>
                    <a href="tel:919650631134" className="text-light mb-3">
                      +91 96506 31134
                    </a>{" "}
                    <br />
                    <a
                      href="mailto:modelg20@yuvamanthan.org"
                      className="text-light mb-3"
                    >
                      modelg20@yuvamanthan.org
                    </a>
                  </ul>
                </div>
                {/* newsletter */}
                <div className="col-12">
                  <h4 className="text-white mb-4">
                    Subscribe to our newsletter
                  </h4>
                  <form action="#">
                    <div className="position-relative">
                      <input
                        type="email"
                        className="form-control border-0 text-white newsletter-form"
                        id="newsletter"
                        name="newsletter"
                        placeholder="Enter your email"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary btn-subscribe"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="bg-secondary-darken py-3">
        <div className="container">
          <div className="row">
            <div className=" text-center text-md-left mb-3 mb-md-0">
              <p className="mb-0 text-white fs-6">
                <span className="text-primary fs-6">Model G20 India</span>{" "}
                &copy;
                <script>
                  var CurrentYear = new Date().getFullYear(); var NextYear = new
                  Date().getFullYear() + 1; document.write(CurrentYear + " ~ " +
                  NextYear)
                </script>
                All Rights Reserved | <i className="bi bi-cloud-fill"></i>{" "}
                Govardhan Learning Cloud
              </p>
            </div>
            {/* <div className="col-md-6 text-center text-md-right">
              <ul className="list-inline">
                <li className="list-inline-item mx-0">
                  <a
                    className="d-inline-block px-3 text-white border-right"
                    href="terms-conditions.html"
                  >
                    Terms of Service
                  </a>
                </li>
                <li className="list-inline-item mx-0">
                  <a
                    className="d-inline-block px-3 text-white"
                    href="privacy-policy.html"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
