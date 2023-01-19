import React from "react";
import BreadCrumb from "../../layout/BreadCrumb";

const Team = () => {
  return (
    <div>
      <BreadCrumb heading={"Leadership Team"} />
      <div className="container py-5">
        <div className="text-center">
          <h2>Team YMG20</h2>
          <p>
            Our leadership team strives to make YMG20 an impactful summit. Our
            team consists of experts and volunteers who are working closely with
            other stakeholders to ensure that the summit is a resounding
            success. The coordination and efforts span from creating content,
            developing IT infrastructure and promotional strategies to working
            closely with G20 experts and educational institutions.
          </p>
          <p>
            We also have a team of student volunteers who do most of the
            groundwork for the institutional-level events called ‘Campus
            Sherpas’. We especially thank the Teacher Coordinators who
            eventually make it all happen and it goes without saying that Campus
            Sherpas along with Teacher Coordinators are the backbone of YMG20.
          </p>
          <p>
            If you want to engage with us, feel free to drop us an email on
            <a href="mailto:modelg20@yuvamanthan.org">
              {" "}
              modelg20@yuvamanthan.org
            </a>
          </p>
        </div>
        <div className="mt-5">
          <div className="col-12 text-center">
            <span className="section-title-border border-center"></span>
            <h3 className="fs-2 section-title">Leadership Team</h3>
          </div>
          <div className="row g-3 g-lg-4">
            <div className="col-lg-4 col-12">
              <div className="team-member text-center">
                <div className="team-member-img position-relative mb-5">
                  <img
                    className="img-fluid w-100"
                    src="images/team/nitin.jpeg"
                    alt="team-member"
                    style={{
                      objectPosition: "center",
                      height: "450px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="hover-icon py-4">
                    <ul className="list-inline social-icon">
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-8">
              <div>
                <h4 className="fs-3 font-monospace">Nitin Agrawal</h4>
                <p>Managing Director</p>
              </div>
              <p className="text-justify">
                Nitin is a serial entrepreneur and runs multiple social
                enterprise initiatives in the area of education and youth
                development. He works extensively with the government clientele
                which includes NCPCR, NCW, NITI Aayog, AICTE etc, and with
                private-sector players in areas of trainings, e-modules, sector
                reforms and social awareness. His company Govardhan Learning
                Cloud which is incubated with NITI Aayog’s Rambhau Mhalgi
                Prabodhini - Atal Incubation Center has engaged with over 1.5
                million students in India so far. As the Managing Director of
                National Association of School Professionals (NASP) he is
                building a network of high-performance school systems which are
                safe, aware and smart. He is an engineer who holds an MBA from
                Management Development Institute (MDI Gurgaon) and loves to
                explore Indian culture through his travels.
              </p>
            </div>
          </div>
          <div className="row g-3 g-lg-4 ">
            <div className="col-12 col-lg-8">
              <div>
                <h4 className="fs-3 font-monospace">Danish Kamal</h4>
                <p>Director - Strategy and Communications</p>
              </div>
              <p className="text-justify">
                Danish brings with him a vast experience in digital marketing
                and communications strategy. Having worked with big brands like
                Apple, Dentsu, WPP etc. and for multiple startups, he is
                responsible for strategy, communications and development of
                YMG20 platform. He has also been previously associated with
                Energy, Aviation, Security and Defense think tanks and was
                responsible for events, expositions, digital development and
                branding efforts. He has two entrepreneural stints as founder of
                digital agencies. His experience extends beyond building brands
                to public policy and driving social narratives for government
                initiatives. He holds an MBA in International Business and loves
                to explore Indian and international cuisine.
              </p>
            </div>
            <div className="col-lg-4 col-12">
              <div className="team-member text-center">
                <div className="team-member-img position-relative mb-5">
                  <img
                    className="img-fluid w-100"
                    src="images/team/danish.jpeg"
                    alt="team-member"
                    style={{
                      objectPosition: "center",
                      height: "450px",
                      objectFit: "cover",
                    }}
                  />
                  <div className="hover-icon py-4">
                    <ul className="list-inline social-icon">
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-linkedin"></i>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="#" className="hover-ripple ripple-white">
                          <i className="bi bi-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-12 text-center">
                  <span className="section-title-border border-center"></span>
                  <h2 className="fs-1 section-title">
                    WE ARE A YOUNG TEAM AND GROWING
                  </h2>
                </div>
              </div>
              <div className="row justify-content-center">
                {/* <!-- team member --> */}
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="team-member text-center">
                    <div className="team-member-img position-relative mb-5">
                      <img
                        className="img-fluid w-100"
                        src="images/team/sakshi.jpg"
                        alt="team-member"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          clipPath: "circle()",
                        }}
                      />
                    </div>
                    <h4>
                      <a href="team-single.html" className="text-dark">
                        Sakshi Verma
                      </a>
                    </h4>
                    <span>Operations Head</span>
                  </div>
                </div>
                {/* <!-- team member --> */}
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="team-member text-center">
                    <div className="team-member-img position-relative mb-5">
                      <img
                        className="img-fluid w-100"
                        src="images/team/saurabh.jpeg"
                        alt="team-member"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          clipPath: "circle()",
                          objectPosition: "top",
                        }}
                      />
                    </div>
                    <h4>
                      <a href="team-single.html" className="text-dark">
                        Saurabh Sharma
                      </a>
                    </h4>
                    <span>IT Development</span>
                  </div>
                </div>
                {/* <!-- team member --> */}
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="team-member text-center">
                    <div className="team-member-img position-relative mb-5">
                      <img
                        className="img-fluid w-100"
                        src="images/team/santosh.jpeg"
                        alt="team-member"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          clipPath: "circle()",
                        }}
                      />
                    </div>
                    <h4>Santosh Kushwaha</h4>
                    <span>IT Development</span>
                  </div>
                </div>
                {/* <!-- team member --> */}
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="team-member text-center">
                    <div className="team-member-img position-relative mb-5">
                      <img
                        className="img-fluid w-100"
                        src="images/team/tuba.jpeg"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          clipPath: "circle()",
                        }}
                      />
                    </div>
                    <h4>Tuba Ali</h4>
                    <span>Content and Editing</span>
                  </div>
                </div>
                {/* <!-- team member --> */}
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="team-member text-center">
                    <div className="team-member-img position-relative mb-5">
                      <img
                        className="img-fluid w-100"
                        src="images/team/eshanika.jpg"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          clipPath: "circle()",
                        }}
                      />
                    </div>
                    <h4>Eshanika Ray</h4>
                    <span>Content and Editing</span>
                  </div>
                </div>
                {/* <!-- team member --> */}
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="team-member text-center">
                    <div className="team-member-img position-relative mb-5">
                      <img
                        className="img-fluid w-100"
                        src="images/team/rohit.jpeg"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          clipPath: "circle()",
                          objectPosition: "top",
                        }}
                      />
                    </div>
                    <h4>Rohit Dabaas</h4>
                    <span>Graphic Design </span>
                  </div>
                </div>
                {/* <!-- team member --> */}
                <div className="col-lg-3 col-sm-6 mb-5">
                  <div className="team-member text-center">
                    <div className="team-member-img position-relative mb-5">
                      <img
                        className="img-fluid w-100"
                        src="images/team/parushi.jpeg"
                        style={{
                          height: "350px",
                          objectFit: "cover",
                          clipPath: "circle()",
                          objectPosition: "top",
                        }}
                      />
                    </div>
                    <h4>Parushi Madan</h4>
                    <span>Graphic Design </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;
