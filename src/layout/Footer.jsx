import React from "react";

const Footer = () => {
  return (
    <footer>
      {/* main footer */}
      <div className="section bg-secondary">
        <div className="container">
          <div className="row justify-content-between">
            {/* footer content */}
            <div className="col-lg-5 mb-5 mb-lg-0">
              {/* logo */}
              <a className="mb-4 d-inline-block" href="index.html">
                <img
                  className="img-fluid height-75"
                  src={process.env.REACT_APP_MAIN_URL + "images/logo.png"}
                  alt="G20"
                />
              </a>
              <p className="text-white fs-6">
                The official website of Model G20 India event. Engaging the
                youth in a meaningful dialogue on international diplomacy,
                leadership and collective duty; and creating awareness to
                navigate the changing economic scenarios
              </p>
              <p className="text-white mb-5 fs-6">
                Proudly representing India to the world for sustainability,
                peace and growth.
              </p>
              <h4 className="text-white mb-4">Follow Us On</h4>
              {/* social links */}
              <ul className="list-inline social-icon-alt">
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="hover-ripple" href="#">
                    <i className="bi bi-pinterest"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row">
                {/* service list */}
                <div className="col-6 mb-5">
                  <h4 className="text-white mb-4">Engage with us</h4>
                  <ul className="list-styled">
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        Model G20
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        G20 Genius Certification
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        Campus Ambassador Program
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        LiFE 21 day challenge
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        Features Stories
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        PM Speak
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        LiFE
                      </a>
                    </li>
                    <li className="mb-2">
                      <a className="text-white d-block" href="#">
                        Upcoming events
                      </a>
                    </li>
                  </ul>
                </div>
                {/* contact info */}
                <div className="col-6 mb-5">
                  <h4 className="text-white mb-4">Contact Info</h4>
                  <ul className="list-unstyled">
                    <li className="text-light mb-3">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Necessitatibus iste illo incidunt ex aliquid repellendus!
                    </li>
                    <li className="text-light mb-3">+91 999999999999 </li>
                    <li className="text-light mb-3">info@G20india.com</li>
                  </ul>
                </div>
                {/* newsletter */}
                <div className="col-12">
                  <h4 className="text-white mb-4">Subscribe Newsletter</h4>
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
      <div className="bg-secondary-darken py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
              <p className="mb-0 text-white">
                <span className="text-primary">G20 India</span> &copy;
                <script>
                  var CurrentYear = new Date().getFullYear(); var NextYear = new
                  Date().getFullYear() + 1; document.write(CurrentYear + " ~ " +
                  NextYear)
                </script>
                All Right Reserved | <i className="bi bi-cloud-fill"></i>{" "}
                Goverdhan Learning Cloud
              </p>
            </div>
            <div className="col-md-6 text-center text-md-right">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
