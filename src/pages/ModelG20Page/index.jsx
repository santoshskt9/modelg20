import React from 'react'

const Modelg20Page = () => {
  return (
    <div>
      {/* <!-- page title --> */}
        <section className="section" style={{background:'url(images/banner/bnr1.webp) no-repeat center', backgroundSize:'cover', boxShadow: 'inset 0 0 0 2000px rgba(8, 8, 8, 0.618)'}}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-12">
                <h2 className="text-white mb-3">Model G20</h2>
                {/* <!-- breadcrumb --> */}
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb bg-transparent p-0">
                    <li className="breadcrumb-item font-weight-semebold"><a className="text-white" href="index.html">Home</a></li>
                    <li className="breadcrumb-item font-weight-semebold active text-primary" aria-current="page">Model G20</li>
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
                <p>Model G20 is an impressive mock simulator created to mirror the actual G20 or Group Twenty
                  summit of leaders from developed to emerging economies. It is aimed and designed for young
                  learners, and professionals who wish to ace the art of public speaking and diplomacy</p>
                <p>
                  The next model G20 summit is planned to take place next year around July 2023!
                </p>
                <p className="mb-5">
                  G20 experts and active practitioners have collaborated together to design this G20 simulation. It
                  actively offers the youth across India to experience debates, panel discussions, and networking on
                  real global issues.
                </p>
                <a href="service.html" className="btn btn-primary hover-ripple me-5">Get Certified</a>
                <a href="service.html" className="btn btn-primary-outline hover-ripple">Sign Up</a>
              </div>
              <div className="col-md-6">
                <img src="images/modelg20/main.jpg" className="w-100 rounded-4" alt=""/>
              </div>
            </div>
            <div className="row g-3 g-lg-4 g-xl-5">
              {/* <!-- What Will You Learn --> */}
              <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                <h3><span className="text-primary">01.</span>Your Learning</h3>
                <p className=" fs-6">As a model G20 delegate, you will learn the art of:</p>
                <ul className="ps-0 fs-6">
                  <li><i className="bi bi-arrow-right text-primary me-2"></i>International Diplomacy</li>
                  <li><i className="bi bi-arrow-right text-primary me-2"></i>Public Speaking</li>
                  <li><i className="bi bi-arrow-right text-primary me-2"></i>Team Leadership</li>
                  <li><i className="bi bi-arrow-right text-primary me-2"></i>Strategy Building</li>
                  <li><i className="bi bi-arrow-right text-primary me-2"></i>Multilateral Negotiation</li>
                </ul>
              </div>
              {/* <!-- Participation --> */}
              <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                <h3><span className="text-primary">02.</span>Who Can Participate?</h3>
                <p className="fs-6">Model G20 summit is for school students, university undergraduates, and young working
                  professionals within the age group of 16-27. You can take part in pre-summit sessions by registering
                  within your institution.</p>
                <p className="fs-6">Find further details <a href="#">here</a></p>
              </div>
              {/* <!-- Campus Ambassador --> */}
              <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                <h3><span className="text-primary">03.</span>Become a G20 Campus Ambassador</h3>
                <p className="fs-6">In line with the Model G20 program on our website G20-india.org, we want to engage
                  enthusiastic youth from schools, colleges and universities to become “Campus
                  Ambassadors”. Each institution will have one campus ambassador who will volunteer to
                  undertake a set of activities to promote, manage and execute Model G20 programs within
                  their campus.</p>
                <p className="fs-6">Interested in knowing more? <a href="#">Click here</a> for details</p>
              </div>
              {/* <!-- Organising Committeee --> */}
              <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
                <h3><span className="text-primary">04.</span>Model G20 Campus Events Organising Committee</h3>
                <p className="fs-6 mb-0">If you want to organise a Model G20 event in your campus, register yourself with us and a
                  representative will reach out to you.</p>
                <p><span className="text-danger fs-4">*</span> Please note that Model G20 India will not pay or sponsor the campus events and the organising
                  committee will have to arrange all funds required to execute the event.</p>
                <a href="" className="btn btn-primary-outline">Register Now</a>
              </div>
            </div>
          </div>
          {/* <!-- background shape --> */}
          <img className="img-fluid about-bg-shape" src="images/backgrounds/about-us-3-bg.png" alt="shape"/>
        </section>
        {/* <!-- /about us --> */}
        {/* <!-- testimonial --> */}
        <section className="section bg-secondary" data-background="images/backgrounds/testimonial-bg.jpg">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <h2 className="section-title text-white" style={{color: 'white'}}>What Clients Are Say?</h2>
              </div>
            </div>
            {/* <!-- testimonial slider --> */}
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="testimonial-slider-2">
                  {/* <!-- testimonial slider item --> */}
                  <div className="text-center bg-dark shadow-lg bg-opacity-25 p-3 p-lg-4 py-5 rounded-4" style={{maxWidth: '600px'}}>
                    <p className="fst-italic mb-5 fs-4 text-white fw-semibold"><i className='bx bxs-quote-left me-2 fs-1'></i>Meeting and discussing the issue of demonetization with fellow leaders was insightful</p>
                    <div className="d-flex align-items-start justify-content-center text-start">
                      <img src="images/testimonial/client-1.jpg" alt="" className="rounded-3" style={{width: '80px'}}/>
                      <div className="px-3">
                        <h4 className="text-white">Anjali Chauhan</h4>
                        <span className="text-white fs-6">an undergraduate at John Hopkins University, USA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- /testimonial --> */}

        {/* <!-- =============G20 Simulation============= --> */}
        <section className="bg-gray section">
          <div className="container">
            <div className="section-title">
              <span span className="section-title-border"></span>
              <h2 className="section-title">G20 Simulation</h2>
            </div>
            {/* <!-- Overview  --> */}
            <div className="overview">
              <h4>Overview</h4>
              <p className="text-dark mb-2">
                Model G20 simulation is a notable and unique group interaction just like a real annual G20 Leaders'
                summit. As the Indian youth forms a majority across the nation, the simulation allows them to polish
                their critical skills in the areas of public speaking, diplomacy, negotiation, team strategy building and
                more.
              </p>
              <p className="text-dark mb-2">
                Moreover, model G20 is apt for young leaders of tomorrow who wish to be the drivers of change.
              </p>
              <p className="text-dark mb-2">
                The summit offers youngsters a plethora of opportunities to learn, discuss, and act with powerful
                speakers, learned panellists, and skilled professionals on the most burning global issues
              </p>
            </div>
            <hr className="my-4"/>
            {/* <!-- Three Tracks  --> */}
            <div className="three-tracks">
              <h4>Three Tracks of Negotiation</h4>
              <p className="text-dark mb-2">
                Typically, the G20 summit consists of two parallel tracks - The Finance track and the Sherpa track.
                Each track's meeting is held separately wherein they discuss and negotiate matters of economic and
                political importance.
              </p>
              <p className="text-dark mb-2">
                The idea is to mirror the actual G20 summit talks which are held in a series of meetings throughout
                the year by the Host G20. Did you know, India has bagged the G20 Presidency for 2023.
              </p>
              <p className="text-dark mb-2">
                Remember, the objective of these model track meetings is to ideate and discuss pressing issues that
                can be included in the consensus-based communique document.
              </p>
            </div>
            <div className="container">
              <ul className="nav nav-pills nav-pill-design g-3 mb-3 justify-content-start rounded-5 border shadow p-2 mt-4" id="pills-tab" role="tablist">
                <li className="nav-item m-1" role="presentation">
                  <button className=" btn btn-primary-outline active rounded-pill px-5 py-3" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab">Leaders Track</button>
                </li>
                <li className="nav-item m-1" role="presentation">
                  <button className=" btn btn-primary-outline rounded-pill px-5 py-3" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab">Sherpa Track</button>
                </li>
                <li className="nav-item m-1" role="presentation">
                  <button className=" btn btn-primary-outline rounded-pill px-5 py-3" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab">Finance Track</button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" tabindex="0">
                  <div className="container py-4">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-4">
                        <ul className="list-unstyled">
                          {/* <!-- feature item --> */}
                          <li className="d-flex align-items-center mb-5">
                            <div className="text-center me-4">
                              <div className="icon-bg water-wave"> <img src="https://website.whatfix.com/wp-content/uploads//2021/06/guidance.svg" className="w-100 p-3" alt=""/>
                              </div>
                            </div>
                            <div>
                              <h4>Leaders Track</h4>
                            </div>
                          </li>
                        </ul>
                        <h6 className="fs-5 fw-light text-lowercase">
                          This is the highlight of the model G20 summit as it involves leading the
                          delegation and representing your side in the summit. In this segment, the leaders must
                          coherently divide their agenda smartly between Sherpa and Finance tracks.
                          Moreover, here you speak on the global-centric topic that you feel requires the most
                          attention from the Leaders.
                        </h6>
                      </div>
                      <div className="col-12 col-lg-8">
                        <img src="images/tracks2.jpeg" alt="" className="d-block w-100 rounded-3"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" tabindex="0">
                  <div className="container py-4">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-4">
                        <ul className="list-unstyled">
                          {/* <!-- feature item --> */}
                          <li className="d-flex align-items-center mb-5">
                            <div className="text-center me-4">
                              <div className="icon-bg water-wave"> <img src="https://website.whatfix.com/wp-content/uploads//2021/06/guidance.svg" className="w-100 p-3" alt=""/>
                              </div>
                            </div>
                            <div>
                              <h4>Sherpa Track</h4>
                            </div>
                          </li>
                        </ul>
                        <h6 className="fs-5 fw-light text-lowercase">
                          This track is led by the Sherpas or emissaries of G20 leaders. It focuses on the
                          developmental and socio-political agendas of the summit. <br/><br/>
                          Under India's presidency, 13 working groups like agriculture, education along with 2
                          initiatives will work together to provide inputs and recommendations.
                        </h6>
                      </div>
                      <div className="col-12 col-lg-8">
                        <img src="images/tracks.jpeg" alt="" className="d-block w-100 rounded-3"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" tabindex="0"/>
                  <div className="container py-4">
                    <div className="row align-items-center">
                      <div className="col-12 col-lg-4">
                        <ul className="list-unstyled">
                          {/* <!-- feature item --> */}
                          <li className="d-flex align-items-center mb-5">
                            <div className="text-center me-4">
                              <div className="icon-bg water-wave"> <img src="https://website.whatfix.com/wp-content/uploads//2021/06/guidance.svg" className="w-100 p-3" alt=""/>
                              </div>
                            </div>
                            <div>
                              <h4>Finance Track</h4>
                            </div>
                          </li>
                        </ul>
                        <h6 className="fs-5 fw-light text-lowercase">
                          Finance ministers and Central Bank governors lead the finance track to
                          discuss macroeconomic issues and come up with reforms to monitor global economic
                          threats <br/> <br/>
                          The key factor in these meetings is that the delegates must form a good balance in their
                          debating and negotiations while addressing their issues. <br/> <br/>
                          These model sessions are instrumental as here the participants from all tracks come together
                          to re-create an actual G20 Leaders Summit and form a consensus portfolio
                        </h6>
                      </div>
                      <div className="col-12 col-lg-8">
                        <img src="images/tracks3.jpeg" alt="" className="d-block w-100 rounded-3"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <hr className="my-4"/>
            {/* <!-- Delegation  --> */}
            <div className="overview">
              <h4>Delegation</h4>
              <p className="text-dark mb-2">
                The model G20 summit comprises 5-7 delegates. Each group is required to have a head to lead the
                delegation into the summit.
              </p>
              <p className="text-dark mb-2">
                For the Sherpa Track, we have a Sherpa and a Sous-Sherpa(deputy). For the Finance Track, we have
                the finance minister and Central Bank governor (deputy). The 6th and 7th delegates will act as the
                senior advisors to their teams in both tracks. All members of the delegation will be receiving
                certifications at the end of the model summit simulation
              </p>
            </div>
            <hr className="my-4"/>
            {/* <!-- Delegation  --> */}
            <div className="overview">
              <h4>Awards and Recognition</h4>
              <p className="text-dark mb-2">
                All the delegates who actively take part in the model G20 summit will be proud recipients of
                performance certificates and mementoes.
              </p>
              <p className="text-dark mb-2">
                Additionally, the delegates, leaders, and teams with the best overall performance will be awarded
                the following sets of awards
              </p>
              <ul className="ps-0 fs-6 text-dark">
                <li><i className="bi bi-arrow-right text-primary me-2"></i>Best Delegation (1st Prize)</li>
                <li><i className="bi bi-arrow-right text-primary me-2"></i>All-rounder Delegation (2nd Prize)</li>
                <li><i className="bi bi-arrow-right text-primary me-2"></i>Best Head of Delegation</li>
                <li><i className="bi bi-arrow-right text-primary me-2"></i>Best Delegate in Finance Track</li>
                <li><i className="bi bi-arrow-right text-primary me-2"></i>Best Delegate in Sherpa Track</li>
                <li><i className="bi bi-arrow-right text-primary me-2"></i>Outstanding Delegation in Finance Track</li>
                <li><i className="bi bi-arrow-right text-primary me-2"></i>Outstanding Delegation in Sherpa Track</li>
                <li><i className="bi bi-arrow-right text-primary me-2"></i>Outstanding Head of Delegation</li>
              </ul>
            </div>
            <hr className="my-4" />
            {/* <!-- Venue  --> */}
            <div className="overview">
              <h4>Venue of the Summit</h4>
              <p className="text-dark mb-2">
                The location and the official venue of the model G20 summit will be announced shortly.
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- Cultural Night  --> */}
            <div className="overview">
              <h4>Cultural Night</h4>
              <p className="text-dark mb-2">
                As the model G20 summit will take place in the heart of the country, the participants will receive a
                memorable opportunity to explore the diverse food flavours and cultural heritage of India with an
                all-sponsored cultural night event. Many traditional shows, delectable cuisines, and network
                exchanges are planned by the Indian government for the delegates.
              </p>
              <p className="text-dark mb-2">
                Although this year's events will be announced soon, you must be alert for our latest news updates on
                email.
              </p>
              <p className="text-dark mb-2">
                This once-in-a-lifetime summit will not just offer a global outlook into various nations but also
                provide a vivid Indian cultural experience for model G20 participants. So, we hope you don't miss
                your chance!
              </p>
            </div>
          {/* </div> */}
        </section>
        {/* // <!-- =============///G20 Simulation============= --> */}

        {/* <!-- FAQ  --> */}
        <section className="faq section">
          <div className="container" style={{maxWidth: '1000px'}}>
            <div className=" text-center">
              <span className="section-title-border mx-auto"></span>
              <h2 className="section-title mb-2">Frequently Asked Questions</h2>
              <p className="mb-5 fs-5">Take a look at some of the most asked queries related to model G20 by aspiring participants in this
                section. If you still have more unanswered questions, please <a href="#">contact us</a> here.</p>
            </div>
            <div className="accordion" id="accordionFAQ">
              <div className="accordion-item border-0">
                <h2 className="accordion-header">
                  <button className="accordion-button fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#accord1">
                    What does G20 stand for?
                  </button>
                </h2>
                <div id="accord1" className="accordion-collapse collapse show" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body">
                    <p className="text-dark fs-5">
                      The Group of Twenty (20) is one of the premier forums for international economic
                      cooperation. It holds meetings to discuss the most pressing global matters and formulate
                      reforms to strengthen global architecture.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed  fs-3" type="button" data-bs-toggle="collapse" data-bs-target="#accord2">
                    What is the purpose of the Model G20 Summit?
                  </button>
                </h2>
                <div id="accord2" className="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
                  <div className="accordion-body">
                    <p className="text-dark fs-5">
                      Model G20 summit is a creative stimulation that mirrors the actual G20 summit gatherings. It is
                      designed by actual G20 experts for the youth to give a phenomenal overview of G20 discussions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- =============G20 Summit India============= --> */}
        <section className="bg-gray section">
          <div className="container">
            <div className="section-title">
              <span span className="section-title-border"></span>
              <h2 className="section-title">G20 Summit in India</h2>
            </div>
            {/* <!-- Overview  --> */}
            <div className="overview">
              <h4>Overview</h4>
              <p className="text-dark mb-2">
                The Group of Twenty (20) is one of the premier forums for international economic cooperation. It
                holds meetings to discuss the most pressing global matters and formulate reforms to strengthen
                global architecture
              </p>
              <p className="text-dark mb-2">
                India shared a joyous moment of pride with its 1 billion citizens after receiving the G20 presidency
                for 2023. In the words of honourable Prime Minister, Shri Narendra Modi for the nation’s youth
              </p>
              <p className="text-dark mb-2 fs-5 p-3 p-lg-4 bg-warning bg-opacity-50 rounded-4" style={{maxWidth: '700px'}}>
                <i className='bx bxs-quote-left'></i> It is the responsibility of the citizens to go beyond the expectations and acquaint the world
                with India’s capabilities, philosophy, social and intellectual strength. <i className='bx bxs-quote-right'></i>
              </p>
              <p className="text-dark"><b>Fact:</b> India holds the Presidency of the G20 from 1st December 2022 to 30th November 2023.</p>
              <p className="text-dark ">
                As part of India’s G20 presidency, many youth-centric organisations and diverse forums have begun
                the preparations and participation under multiple meeting formats.
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- G20 Theme  --> */}
            <div className="three-tracks">
              <h4>G20 Theme</h4>
              <p className="text-dark mb-2">
                The theme for G20 Presidency in India is - <i className='bx bxs-quote-alt-left'></i> <i>Vasudhaiva Kutumbakam</i> <i className='bx bxs-quote-alt-right'></i> which translates into ‘One
                Earth. One Family. One Future’ – The theme vividly discusses the poignant value of all life forms on
                earth and their exponential interconnectivity with the future and universe.
              </p>
              <p className="text-dark mb-2">
                The summit theme also highlights the significance of LiFE (Lifestyle for Environment). The key
                indication to environmental sustainability on individual and national levels.
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- G20 Function  --> */}
            <div className="overview">
              <h4>G20 Function</h4>
              <p className="text-dark mb-2">
                India under the G20 presidency will be the torchbearer of moving the G20 agenda forward as a host
                to the summit. Within the two tracks – Sherpa and Finance – thematically inclined working groups
                will work laboriously to carry forward the conversations of economic, socio-political and financial
                importance.
              </p>
              <p className="text-dark mb-2">
                India under the G20 presidency will be the torchbearer of moving the G20 agenda forward as a host
                to the summit. Within the two tracks – Sherpa and Finance – thematically inclined working groups
                will work laboriously to carry forward the conversations of economic, socio-political and financial
                importance.
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- Role of Youth in G20  --> */}
            <div className="overview">
              <h4>Role of Youth in G20</h4>
              <div className=" mb-2  p-3 p-lg-4 pb-2 pt-5 bg-warning bg-opacity-50 rounded-4" style={{maxWidth: '700px'}}>
                <p className="fs-5 text-dark text-center mb-0"><i className='bx bxs-quote-left'></i> Inclusive, ambitious, decisive, and action-oriented. <i className='bx bxs-quote-right'></i></p>
                <div className="text-end">
                  <span className="text-end text-dark">--Hon’ble PM, Narendra Modi</span>
                </div>
              </div>
              <p className="text-dark mb-2">
                This vision for the youth of India is what the prime minister hopes so as to bring better
                opportunities for all Indians.
              </p>
              <p className="text-dark mb-2">
                As G20 summit Sherpa meetings will be carried out in every state by representatives of member
                nations, this will be a unique opportunity for young Indians to share their views, and mission on
                helping to achieve the PM’s vision.
              </p>
              <p className="text-dark mb-2">
                They can actively participate in model G20 pre-summits, G20 branding festivals, quiz and poetry
                competitions, etc. organised by G20 secretariats to be a part of the global conversation.
              </p>
              <p className="text-dark mb-2">
                Moreover, youth can be part of PM’s “digital transformation in India” discourse by actively taking
                the narrative forward as representatives for a digital and inclusive India.
              </p>
              <p className="text-dark mb-2">
                Check out the multiple <a href="#">youth events here</a> that the G20 Secretariat has planned for 2023.
              </p>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div className="col-12 col-lg-6">
                {/* <!-- G20 Engagement Groups  --> */}
                <div className="overview">
                  <h4>G20 Engagement Groups</h4>
                  <p className="text-dark mb-2">
                    Engagement groups in the G20 summit are non-government firms that take part in the policy-making
                    process and provide recommendations to the G20 leaders
                  </p>
                  <p className="text-dark mb-2">
                    At present, there are nine engagement groups contributing in the G20 summit which are;
                  </p>
                  <ul className="ps-0 fs-6">
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Business20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Civil20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Labour20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Parliament20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Science20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>SAI20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Startup20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Think20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Urban20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Women20</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Youth20</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* <!-- G20 Finance Track Working Groups  --> */}
                <div className="overview">
                  <h4>G20 Finance Track Working Groups</h4>
                  <ul className="ps-0 fs-6">
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Development Working Group</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Framework Working Group</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>International Finance Architecture (IFA)</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Infrastructure Working Group</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Sustainable Finance Working Group</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Global Partnership for Financial Inclusion (GPFI)</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>Joint Finance and Health Task Force</a></li>
                    <li><a href="https://www.g20.org/en/workstreams/engagement-groups/" target="_blank"><i className="bi bi-arrow-right text-primary me-2"></i>International Taxation Agenda</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============///G20 Simulation============= --> */}


        {/* <!-- =============G20 Summit Announcements============= --> */}
        <section className=" section" style={{maxWidth: '700px'}}>
          <div className="container">
            <div className="section-title">
              <span span className="section-title-border"></span>
              <h2 className="section-title">Model G20 Summit Announcements</h2>
            </div>
            <div className="overview">
              <p className="text-dark mb-2">
                The Model G20 summit is finally here in India. To begin with the on-campus pre-summit meetings
                will take place across India followed by state level and a national level event. We will keep you
                informed on all the latest events and news on this website.
              </p>
              <p className="text-dark mb-2">
                To receive an email alert on the latest updates on model G20, <a href="#">click here</a>.
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- Announcements  --> */}
            <div className="p-4 border bg-white rounded-4" style={{maxHeight: '550px', overflowY:'auto'}}>
              {/* <!-- Announcement  --> */}
              <a href="#" className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                <h4>Learn the Art of Public Speaking</h4>
                <p className="font-small text-dark mb-2">
                  Model G20 is known to be the apex contributor to those individuals who look to surpass their
                  shyness and march into the arena of public speaking
                </p>
                <p className="font-small text-dark mb-2">
                  By becoming a delegate for model G20 discussions, you will learn how diplomacy works and get a
                  chance to interact with G20 practitioners on your way to becoming confident orators and
                  people-serving leaders
                </p>
              </a>
              {/* <!-- Announcement  --> */}
              <a href="#" className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                <h4>Model G20 Summit Topics</h4>
                <p className="font-small text-dark mb-2">
                  Model G20 summit takes place in two tracks – Sherpa and Finance track. Each track consists of
                  negotiations on socio-political, financial and economic pressing matters. Once these two track
                  meetings are done, the delegates meet for the final “Leaders” track to form a communique
                  consensus.
                </p>
                <p className="font-small text-dark mb-2">
                  All the relevant details of the simulation topics, structure will be shared with registered participants
                  on this website, so keep visiting
                </p>
              </a>
              {/* <!-- Announcement  --> */}
              <a href="#" className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                <h4>Model G20 Summit Schedule</h4>
                <p className="font-small text-dark mb-2">
                  The detailed schedule of the model G20 will be shared here soon.
                </p>
              </a>
            </div>
          </div>
        </section>
        {/* <!-- =============///G20 Summit Announcements============= --> */}


        {/* <!-- =============Resources Library============= --> */}
        <section className="bg-gray section">
          <div className="container">
            <div className="section-title">
              <span span className="section-title-border"></span>
              <h2 className="section-title">Resources Library</h2>
            </div>
            <div className="overview">
              <p className="text-dark mb-2">
                The Model G20 summit organizing committee every time prepares significant resource material that
                is helpful for all the participating delegates. Every year, these resources are updated and revised with
                the latest topics, publications, and regulations to stay parallel with actual G20 summit meetings.
              </p>
              <p className="text-dark mb-2">
                For 2023, under India’s presidency, the participating delegations will get access to newly curated
                resources once they successfully register into the model G20 summit portal.
              </p>
              <p className="text-dark mb-2">
                Read more about India’s G20 presidency <a href="#">here</a>.
              </p>
            </div>
            <hr className="my-4" />
            {/* <!-- REsources Library  --> */}
            <div className="p-4 border bg-white rounded-4">
              <div className="row g-3 g-lg-4">
                <div className="col-12 col-lg-6">
                  {/* <!-- Past Model G30 Announcements  --> */}
                  <div>
                    <div className="mb-4">
                      <h4>Past model G20 Publications</h4>
                      <p>Every member of the delegation will receive a copy of previous Model G20 publications. These copies
                        will carry a detailed thesis of special statements, Track negotiations, Communique documents and
                        reform plans from each G20 member country.</p>
                    </div>
                    {/* <!-- Publications  --> */}
                    <div className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                      <div className="d-flex g-3 justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="pe-3">
                            <img src="images/icons/pdf.png" alt="" className="" style={{height:'50px', objectFit:'contain'}}/>
                          </div>
                          <div className="text-start">
                            <h5>Model G20 Osaka Publication</h5>
                          </div>
                        </div>
                        <div className="text-end">
                          <a href="#"><i className='bx bx-link-external fs-3'></i></a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Publications  --> */}
                    <div className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                      <div className="d-flex g-3 justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="pe-3">
                            <img src="images/icons/pdf.png" alt="" className="" style={{height:'50px', objectFit:'contain'}}/>
                          </div>
                          <div className="text-start">
                            <h5>Model G20 Bali Publication</h5>
                          </div>
                        </div>
                        <div className="text-end">
                          <a href="#"><i className='bx bx-link-external fs-3'></i></a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Publications  --> */}
                    <div className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                      <div className="d-flex g-3 justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="pe-3">
                            <img src="images/icons/pdf.png" alt="" className="" style={{height:'50px', objectFit:'contain'}}/>
                          </div>
                          <div className="text-start">
                            <h5>Model G20 Riyadh Publication</h5>
                          </div>
                        </div>
                        <div className="text-end">
                          <a href="#"><i className='bx bx-link-external fs-3'></i></a>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Publications  --> */}
                    <div className="d-block mb-4 border-start shadow border-end border-4 px-4 py-4 border-primary rounded-4">
                      <div className="d-flex g-3 justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="pe-3">
                            <img src="images/icons/pdf.png" alt="" className="" style={{height:'50px', objectFit:'contain'}}/>
                          </div>
                          <div className="text-start">
                            <h5>Model G20 Buenos Aires Publication</h5>
                          </div>
                        </div>
                        <div className="text-end">
                          <a href="#"><i className='bx bx-link-external fs-3'></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  {/* <!-- Past Model G30 Announcements  --> */}
                  <div>
                    <div className="mb-4">
                      <h4>Model G20 Delegation E-Handbook</h4>
                      <p>Our Model G20 team keeps a close overwatch on past G20 proceedings with the objective to
                        formulate a detailed delegation e-handbook. Every registered delegate receives the access code of
                        the e-handbook via email.</p>
                      <p>Model G20 aims to provide personalised guidance via these e-handbooks to all participants with or
                        without a summit simulation overview. To get an idea how what the e-handbook looks like,<a href="#">click
                          here</a>.</p>
                    </div>
                  </div>
                  {/* <!-- Model G20 Scholar Dossier --> */}
                  <div>
                    <div className="mb-4">
                      <h4>Model G20 Scholar Dossier</h4>
                      <p>Delegates can head start their negotiation preps by gaining access to 20+ scholarly documents,
                        research papers, past G20 summit translated reports on the Model G20 scholar dossier <a href="#">here</a>.
                        Additionally, they can view The G20 Leaders declaration and India’s presidency-related <a href="#">resources
                          here</a>.</p>
                      <p>Other sources that delegates can use are:</p>
                      <a href="#" className="d-block">G20 Secretariat Website</a>
                      <a href="#" className="d-block">G20 India Official website</a>
                      <a href="#" className="d-block">University/College/ Model G20 Newsletters</a>
                    </div>
                  </div>

                </div>
                {/* <!-- G20 Summit History Newsletter --> */}
                <div className="col-12">
                  <div className="mb-4">
                    <h4>G20 Summit History Newsletter</h4>
                    <p>Participants of the model G20 summit will receive a special edition of G20 History newsletter that
                      chronologically elaborates on the inception of G20, how its members work, how it tackles the
                      economic and financial conversations on a global scale.</p>
                    <p>Moreover, the newsletter will have facts, timelines and updated G20 communique documents for the
                      participants to prepare their arguments readily.</p>
                    <p>This year, a new section is added in the newsletter describing India’s 2023 G20 presidency summit
                      workstreams.</p>
                    <p>All these resources will be made available to delegates via email after the team registration process.</p>
                    <p>If you have any queries regarding the Model G20 resources, please <a href="#">contact us</a> here.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- =============///Resources Library============= --> */}

        {/* <!-- customer --> */}
        <section className="section bg-secondary position-relative">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                <span className="section-title-border"></span>
                <p className="subtitle text-white">Customer</p>
                <h2 className="section-title text-white">We are happy to work with them</h2>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eius tempor incididunt ut labore.</p>
              </div>
              {/* <!-- customer logo --> */}
              <div className="col-md-6">
                <div className="d-flex">
                  <div className="flex-basis-33 clients-logo border border-muted">
                    <a className="white" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-1-alt.png" alt="clients-logo" /></a>
                    <a className="primary" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-1.png" alt="clients-logo" /></a>
                  </div>
                  <div className="flex-basis-33 clients-logo border border-muted">
                    <a className="white" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-2-alt.png" alt="clients-logo" /></a>
                    <a className="primary" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-2.png" alt="clients-logo" /></a>
                  </div>
                  <div className="flex-basis-33 clients-logo border border-muted">
                    <a className="white" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-3-alt.png" alt="clients-logo" /></a>
                    <a className="primary" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-3.png" alt="clients-logo" /></a>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="flex-basis-33 clients-logo border border-muted">
                    <a className="white" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-4-alt.png" alt="clients-logo" /></a>
                    <a className="primary" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-4.png" alt="clients-logo" /></a>
                  </div>
                  <div className="flex-basis-33 clients-logo border border-muted">
                    <a className="white" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-5-alt.png" alt="clients-logo" /></a>
                    <a className="primary" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-5.png" alt="clients-logo" /></a>
                  </div>
                  <div className="flex-basis-33 clients-logo border border-muted">
                    <a className="white" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-6-alt.png" alt="clients-logo" /></a>
                    <a className="primary" href="#"><img className="img-fluid" src="images/clients-logo/clients-logo-6.png" alt="clients-logo" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- background shape --> */}
          <img src="images/backgrounds/customer-bg.png" alt="shape" className="customer-bg-shape img-fluid"/>
        </section>
        {/* <!-- /customer --> */}

        {/* <!-- team --> */}
        <section className="section bg-gray-white">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <span className="section-title-border border-center"></span>
                <p className="subtitle">Our Team</p>
                <h2 className="section-title">We Are Dynamic Team and<br/>Business Agency</h2>
              </div>
            </div>
            <div className="row">
              {/* <!-- team member --> */}
              <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                <div className="team-member text-center">
                  <div className="team-member-img position-relative mb-5">
                    <img className="img-fluid w-100" src="images/team/team-1.jpg" alt="team-member"/>
                    <div className="hover-icon py-4">
                      <ul className="list-inline social-icon">
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-pinterest"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4><a href="team-single.html" className="text-dark">MONICA HELLEONA</a></h4>
                  <span>Designer</span>
                </div>
              </div>
              {/* <!-- team member --> */}
              <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                <div className="team-member text-center">
                  <div className="team-member-img position-relative mb-5">
                    <img className="img-fluid w-100" src="images/team/team-2.jpg" alt="team-member"/>
                    <div className="hover-icon py-4">
                      <ul className="list-inline social-icon">
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-pinterest"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4><a href="team-single.html" className="text-dark">ALEX
                      Monatinmo</a></h4>
                  <span>Project Manager</span>
                </div>
              </div>
              {/* <!-- team member --> */}
              <div className="col-lg-4 col-sm-6 mb-5 mb-lg-0">
                <div className="team-member text-center">
                  <div className="team-member-img position-relative mb-5">
                    <img className="img-fluid w-100" src="images/team/team-3.jpg" alt="team-member"/>
                    <div className="hover-icon py-4">
                      <ul className="list-inline social-icon">
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-linkedin"></i></a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" className="hover-ripple ripple-white"><i className="fa fa-pinterest"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h4><a href="team-single.html" className="text-dark">JENNIFER GARNER</a></h4>
                  <span>Developer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Modelg20Page