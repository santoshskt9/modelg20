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
                        <a href="https://www.linkedin.com/in/nitinagarwaleducator/" className="hover-ripple ripple-white">
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
                <h4 className="fs-3 font-monospace">Nitin Agarwal</h4>
                <p>Director</p>
              </div>
              {/* <p className="text-justify">
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
              </p> */}

              <p className="text-justify">
                Nitin is CEO of <a href="https://glcloud.in" target="_blank" rel="noopener noreferrer">Govardhan Learning Cloud (GLC)</a>, an organization focused on solving societal issues through learning based intervention among students. GLC is working with the government on issues such as Women Empowerment, <a href="https://safeinschool.in" target="_blank" rel="noopener noreferrer">Child Safety</a>, Financial Literacy, Environment Protection etc.
              </p>
              <p>
                He is also the Convenor of <a href="https://nasp.in" target="_blank" rel="noopener noreferrer">National Association of School Professionals</a>, an NGO working towards bringing a fresh impact-based approach to Learning Beyond Curriculum in India.
              </p>
              <p>
                He is also a Director at <a href="https://pahleindia.org/about-us/" target="_blank" rel="noopener noreferrer">Pahle India Foundation (PIF)</a> . PIF undertakes analytical research and disseminates its findings both to policy makers and in the public domain. The driving vision in all that we do is “Putting India First to make India First.”
              </p>
              <p>
                He is an engineer who holds an MBA from Management Development Institute (MDI Gurgaon) and loves to explore Indian culture through his travels. He is a prolific author and has written 4 bestsellers Viz. <a href="https://www.amazon.in/Leadership-Lessons-Narendra-Damodardas-Modi/dp/9381841489/" target="_blank" rel="noopener noreferrer">21 Leadership Lessons of Narendra Damodardas Modi</a>, <a href="https://www.amazon.in/Indias-Greatest-Speeches-Nitin-Agarwal-ebook/dp/B00Q9RN4K6/" target="_blank" rel="noopener noreferrer">India's Greatest Speeches</a>, <a href="https://www.amazon.in/Do-You-Know-Narendra-Modi/dp/9381841594/" target="_blank" rel="noopener noreferrer">Do You Know Narendra Modi?</a>, and <a href="https://www.amazon.in/Narendra-Modi-Ke-Netritva-Sutra/dp/9381841993/" target="_blank" rel="noopener noreferrer">Narendra Modi Ke Netritva ke 21 Sutra</a>.
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
                        <a href="https://www.linkedin.com/in/danish-kamal-9130b05/" className="hover-ripple ripple-white">
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
                    Our Advisors
                  </h2>
                </div>
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
                    <h4 className="fs-3 font-monospace">Amit Kapoor</h4>
                    {/* <p>Honorary Chairman at Institute for Competitiveness</p> */}
                  </div>


                  <p className="text-justify fs-6">
                    Amit Kapoor, PhD, is Honorary Chairman at Institute for Competitiveness, India. He is an
                    affiliate faculty for the Microeconomics of Competitiveness & Value-Based Health Care
                    Delivery courses of the Institute of Strategy and Competitiveness, Harvard Business School
                    and an instructor with Harvard Business Publishing in the area of Strategy, Competitiveness
                    and Business Models. He has been inducted into the Competitiveness Hall of Fame which is
                    administered by the Institute for Strategy and Competitiveness at Harvard Business School.

                  </p>

                  <p className="fs-6">
                    Amit is the author of bestsellers “Riding the Tiger”, which he has co-authored with Wilfried
                    Aulber and “The Age of Awakening: The Story of the Indian Economy Since Independence”
                    published by Penguin Random House.

                  </p>
                  <p className="fs-6">
                    He is also a columnist with IANS in addition to his contributions being published by
                    Economic Times, Hindu, Business Insider, Hindu Business Line, Mint, Financial Express,
                    Outlook Business, Governance Now, Business Today et al. In all, he has written over 500
                    opinion pieces apart from publishing academic research (cases and articles).

                  </p>

                </div>
              </div>
              <div className="row g-3 g-lg-4 ">
                <div className="col-12 col-lg-8">
                  <div>
                    <h4 className="fs-3 font-monospace">Ravi Pokharna</h4>

                  </div>
                  <div className="fs-6">
                    <p className="text-justify fs-6">
                    Ravi is currently Joint Coordinator at NITI Aayog’s Standing Committee on Civil Society
                    Organisation. He is also the member of the Working Group for the New National Policy for
                    Voluntary Sector constituted by NITI Aayog.
                  </p>
                  <p className="fs-6">
                    Previously, he had served as the Chief Executive Officer at the UN-ECOSOC recognized
                    leadership and training think tank, Rambhau Mhalgi Prabodhini (RMP). He had also served
                    as the Deputy Dean at the Indian Institute of Democratic Leadership and the Chief Mentor at
                    the Atal Incubation Centre- RMP Foundation

                  </p>
                  <p className="fs-6">
                    Ravi was also part of the Committee on Developing the ranking framework for Gram
                    Panchayats for the Ministry of Panchayati Raj.
                  </p>
                  <p className="fs-6">
                    Ravi is an alumnus of the prestigious Indian Institute of Management, Ahmedabad, Faculty
                    of Management Studies, University of Delhi and Dhirubhai Ambani Institute of Information
                    Communication and Technology, Gandhinagar. Earlier he has held several leadership
                    assignments in the field of Education, Training and Skill Development like Director, PT
                    Education; Vice President Lok Bharti Skilling Solution Pvt Ltd, Founder and Director Phoenix
                    International Business School.

                  </p>
                  <p className="fs-6">
                    Few publications by Ravi include Creativity in Cooperation (2012), One Nation One Election
                    (2018) published by Rambhau Mhalgi Prabodhini.

                  </p>
                  </div>
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
                    <h4 className="fs-3 font-monospace">Pankaj Sharma</h4>
                    {/* <p>Honorary Chairman at Institute for Competitiveness</p> */}
                  </div>


                  <p className="text-justify fs-6">
                    Based out of New York, USA, Pankaj Sharma is a public policy and management consultant.
                    He is an alumnus of the prestigious international Visitors Leadership Program( Deptt of
                    State, Government of USA) Alumnus, Ex Civil Rights Commissioner, State of Colorado and
                    Ex Advisor on Sustainability and Technology Initiatives, City of Boulder, Colorado. His
                    passion lies in the advancement of education, youth empowerment and international affairs.

                  </p>

                </div>
              </div>
            </div>
          </section>

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
