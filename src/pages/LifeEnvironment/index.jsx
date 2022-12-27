import React from "react";
import Pointers from "./Pointers";

const daysChallenge = [
  {
    day: 1,
    task: "Carry a non-plastic bottle while steeping out of homes",
  },
  {
    day: 2,
    task: "Use cloth bags for grocery shopping instead of plastic bags",
  },
  {
    day: 3,
    task: "Use stairs instead of an elevator",
  },
  {
    day: 4,
    task: "Donate old clothes and books",
  },
  {
    day: 5,
    task: "Practice segregation of wet and dry waste at home",
  },
  {
    day: 6,
    task: "Switch off appliances from plug plants when not in use",
  },
  {
    day: 7,
    task: "Use of public transport",
  },
  {
    day: 8,
    task: "Switch off vehicle engine at signals and railroad crossing",
  },
  {
    day: 9,
    task: "Plant trees to reduce the impact of pollution",
  },
  {
    day: 10,
    task: "Feed unused and uncooked leftovers to cattle/pets/street animals",
  },
  {
    day: 11,
    task: "Pre-soak heavy pots and pans before washing them",
  },
  {
    day: 12,
    task: "Use steel/recyclable plastic lunch boxes and water bottles",
  },
  {
    day: 13,
    task: "Cut the packaging bags used for plastic items",
  },
  {
    day: 14,
    task: "Defrost fridge or freezer regularly",
  },
  {
    day: 15,
    task: "Create kitchen, school, and terrace gardens",
  },
  {
    day: 16,
    task: "Reuse water for cleaning and watering plants",
  },
  {
    day: 17,
    task: "Set printer default to double- side printing",
  },
  {
    day: 18,
    task: "Encourage the use of herbs and indigenous plants",
  },
  {
    day: 19,
    task: "Initiate or join green clubs",
  },
  {
    day: 20,
    task: "Participate in and mobilize participation for clean-up drives of cities and water bodies",
  },
  {
    day: 21,
    task: "Discard gadgets in nearest e-recycling bins",
  },
];

const Life = () => {
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
              <h1 className="text-white mb-3">
                <span className="" style={{textStyle:"lowercase"}}>LiFE </span>
                <span className="fs-5">
                  (Lifestyle for Environment) Initiative
                </span>
              </h1>
              {/* <!-- breadcrumb --> */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent p-0">
                  <li className="breadcrumb-item font-weight-semebold">
                    <a className="text-white" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item font-weight-semebold active text-primary"
                    aria-current="page"
                  >
                    LiFE
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- /page title --> */}

      <section className="bg-gray section">
        <div className="container">
          <div className="section-title">
            <span span className="section-title-border"></span>
            <h2 className="section-title">Overview</h2>
          </div>
          {/* <!-- Overview  --> */}
          <div className="overview">
            <p className="text-dark mb-2 fs-5">
              'Lifestyle for Environment' or LiFe initiative is a campaign
              envisioned by honourable Prime Minister Narendra Modi with a prime
              focus on environmentally conscious living. It was globally
              introduced at the 26th United Nations Climate Change Conference of
              the Parties (COP26) in Glasgow in 2021.
            </p>
            <p className="text-dark mb-2 fs-5">
              LiFe is a call to action for every citizen to practice
              sustainability and mindful utilisation of resources over ‘mindless
              destructive consumption.’
            </p>
            <p className="text-dark mb-2 fs-5">
              Through this initiative, Hon’ble PM Modi wishes to tackle the
              menace that is climate change and distinctively vows to do away
              with the ‘use-and-throw’ economy among the masses by advocating to
              take deliberate measures to uplift Pro Planet lifestyle.
            </p>
          </div>
          <hr className="my-4" />
          {/* <!-- Mission  --> */}
          <div>
            <h4 className="fs-2">Mission</h4>
            <p className="text-dark mb-2 fs-5">
              PM Modi green-flagged mission LiFe this year for changing
              citizens’ collective approach towards sustainability. The mission
              has three simple strategies.
            </p>
            <ul className="list-group border-none bg-gray mt-3">
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  Change in Demand – People undertaking easy and efficient
                  eco-friendly steps in daily lives
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  Change in Supply – Industries and business markets alter
                  supply patterns to changing demand
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  Change in Policy – Government lawmakers set influential norms
                  to support sustainable lifestyle and production
                </span>
              </li>
            </ul>
            <p className="text-dark mt-3 fs-5">
              The mission also empowers the spirit of the P3 model, that is,
              Pro-Planet-People. In simple terms, it aims to unite those people
              under the initiative who think, act in unity while consuming
              Earth’s gifted resources
            </p>
            <p
              className="text-dark mb-2 fs-5 p-3 p-lg-4 fs-5 bg-warning bg-opacity-50 rounded-4"
              style={{ maxWidth: "700px" }}
            >
              <i className="bx bxs-quote-left"></i> It functions on the basic
              principle, a lifestyle of the planet, for the planet and by the
              planet. <i className="bx bxs-quote-right"></i> <br />
              <div className="text-end">
                <span className="ms-auto">- PM Narendra Modi</span>
              </div>
            </p>
            <p className="text-dark mt-3 fs-5">
              Mission LiFe makes the fight against climate change historically
              democratic where every citizen plays a key role. Life in itself is
              a circular existence where a person is born, lives and then dies.
              However, how life is lived in regard to earth’s finite resources
              is what counts.
            </p>
            <p className="text-dark mt-3 fs-5">
              Taking a hint from the above thought comes the idea of the
              circular economy. A model of production and consumption that
              entails industries and markets adopting the concept of ‘reduce,
              reuse, recycle.’ It majorly involves leasing, sharing,
              refurbishing, repairing and recycling existing models or products
              to a realistic end rather than scrapping them off in single use.
            </p>
            <p className="text-dark mt-3 fs-5">
              Overall, through the LiFe initiative, PM Modi hopes to walk in
              harmony with nature. The expectation is to change individual as
              well as community behaviour towards the environment and take the
              smallest of measures to fight the biggest battles of the global
              climate crisis.
            </p>
          </div>
          <hr className="my-4" />
          <div>
            <h4 className="fs-2">21 Days Challenge</h4>
            <p className="text-dark mb-2 fs-5">
              Under the LiFe Mission, the government has initiated has a 21-day
              challenge which lists out activities and measures that one can
              undertake to minimize the wasteful consumption of resources. The
              aim is to act consciously while undergoing day-to-day activities
              with care and consideration.
            </p>
            <p className="text-dark mb-2 fs-5">
              Each day’s activity is based on a person’s habit of using
              elevators, and plastic bags or forgetting to switch off electrical
              appliances when not in use. If small steps are taken by each
              individual to avoid wastage, then it could create a bigger impact.
            </p>
          </div>
          <div className="day-challenges">
            <div className="row g-3 g-lg-4 mt-4">
              {daysChallenge.map((challenge) => {
                return (
                  <div
                    className="col-12 col-sm-6 col-md-4 col-lg-4"
                    key={challenge.day}
                  >
                    <div className="calendar-box p-3 border rounded h-100 border-warning">
                      <div className="d-flex align-items-center h-100">
                        <div className="p-relative">
                          <img
                            src="./images/icons/calendar.png"
                            alt=""
                            className="icon-calendar"
                          />
                          <div
                            className="p-absolute w-100 h-100 d-flex align-items-center justify-content-center"
                            style={{ top: 0, left: 0 }}
                          >
                            <h5 className="text-center lh-1">
                              Day
                              <br />
                              <span className="fs-2">{challenge.day}</span>
                            </h5>
                          </div>
                        </div>
                        <div className="px-3">
                          <span className="section-title-border mb-2"></span>
                          <p className="text-dark lh-sm fs-6 fw-semibold">
                            {challenge.task}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <hr className="my-4" />
          <Pointers />
          <hr className="my-4" />
          {/* <!-- Key Performance Indicators and Targets  --> */}
          <div>
            <h4 className="fs-2">Key Performance Indicators and Targets</h4>
            <p className="text-dark mb-2 fs-5">
              The key performance indicators and corresponding targets of
              Mission LiFE, from 2022–28, are as follows. These are indicative
              targets and may be subject to change.
            </p>
            <img
              src="./images/table/table.jpg"
              className="w-100 d-block"
              alt=""
            />
          </div>
          <hr className="my-4" />
          {/* <!-- Impact  --> */}
          <div className="py-4">
            <h4 className="fs-2 text-center">Impact</h4>
            <p className="text-dark mb-2 fs-5 text-center col-12 col-lg-10 mx-auto">
              When estimated against a business-as-usual scenario by 1 billion
              Indians in 2022-23 to 2027-28, the impact of LiFE actions can be
              significant, as demonstrated below with select examples:
            </p>
            <div className="row g-2 g-lg-3 justify-content-center">
              <div className="col-12 col-md-6 col-lg-2">
                <div className="box text-center bg-light  border p-3 rounded-4 h-100">
                  <div className="p-4 d-inline-block rounded-circle border border-warning">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3176/3176298.png"
                      alt=""
                      className="icon-pointer"
                    />
                  </div>
                  <h6 className="mt-4">
                    Switching off the car / scooter engines at traffic lights /
                    railway crossings can save up to 22.5 billion kWh of energy.
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-2">
                <div className="box text-center bg-light  border p-3 rounded-4 h-100">
                  <div className="p-4 d-inline-block rounded-circle border border-warning">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4497/4497450.png"
                      alt=""
                      className="icon-pointer"
                    />
                  </div>
                  <h6 className="mt-4">
                    Turning off running taps when not in active use can save
                    upto 9 trillion litres of water.
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-2">
                <div className="box text-center bg-light  border p-3 rounded-4 h-100">
                  <div className="p-4 d-inline-block rounded-circle border border-warning">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4478/4478384.png"
                      alt=""
                      className="icon-pointer"
                    />
                  </div>
                  <h6 className="mt-4">
                    Using a cloth bag instead of a plastic bag while shopping
                    can save up to 375 million tonnes of solid waste from
                    entering the landfill.
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-2">
                <div className="box text-center bg-light  border p-3 rounded-4 h-100">
                  <div className="p-4 d-inline-block rounded-circle border border-warning">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3427/3427844.png"
                      alt=""
                      className="icon-pointer"
                    />
                  </div>
                  <h6 className="mt-4">
                    Discarding non-functioning gadgets in the nearest
                    e-recycling unit can recycle upto 0.75 million tonnes of
                    e-waste.
                  </h6>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-2">
                <div className="box text-center bg-light  border p-3 rounded-4 h-100">
                  <div className="p-4 d-inline-block rounded-circle border border-warning">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/6905/6905282.png"
                      alt=""
                      className="icon-pointer"
                    />
                  </div>
                  <h6 className="mt-4">
                    Composting waste food at home can save up to 15 billion
                    tonnes of food from going to landfills.
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          {/* <!-- Youth’s Role in LiFe  --> */}
          <div>
            <h4 className="fs-2">Youth’s Role in LiFe</h4>
            <p className="text-dark mb-2 fs-5">
              As India comprises more than 65% in the youth majority, they can
              actively contribute to the Lifestyle for Environment (LiFe)
              initiative.
            </p>{" "}
            <p className="text-dark mb-2 fs-5">
              The digital transformation of India under PM Modi’s leadership has
              given rise to multiple social platforms, and viral culture in
              India where youngsters can take part and spread the LiFe message
              to remote corners of the country all with a touch on their
              smartphones and screens.
            </p>{" "}
            <p className="text-dark mb-2 fs-5">
              There are many initiatives and programmes that the youth can
              organise in groups or individual levels in
              schools/colleges/universities that would get better traction for
              the LiFe initiative.
            </p>
            <ul className="list-group border-none bg-gray mt-3">
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b>Organise workshops, seminars,</b> and speech sessions in
                  association with government bodies to start awareness drives
                  in institutions and localised communities.
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b> Planning and organising campaigns</b> online like – making
                  posters, drawings, handicrafts etc. to receive creative
                  results for the mission.
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b> Taking part in Youth centric corps like NCC, NSS,</b> and
                  youth congress events in universities/colleges to stay updated
                  on latest news
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b> Organising environmental friendly events</b> in
                  localities, and institutions like{" "}
                  <b> green drives, peace march,</b>
                  planting trees, waste collection drive to get community
                  participation.
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b> Inviting famous social personalities for talks,</b> and
                  panel discussions and getting good inputs from their
                  experience to further initiate the mission’s message
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b> Observing an eco-friendly hour around the clock</b> like
                  Gadget Free hour, Green Hour or Earth Hour to save resources.
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b> Engaging students, teachers in various contests</b> like
                  quizzes, debates, article writing, skits, theatre, dramas set
                  on LiFe’s message or strategized 75 pointers
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b> Taking part in 21-day challenge to make it a habit.</b>
                </span>
              </li>
              <li className="list-group-item border-0 bg-gray ps-0">
                <span className="p-2 bg-primary clip-cicle text-white mt-2">
                  <i className="bi bi-arrow-right"></i>
                </span>{" "}
                <span className="ps-2 fs-5">
                  <b>Posting on social media</b> with trendy and viral content
                  related to LiFe initiative
                </span>
              </li>
            </ul>
          </div>
          <hr className="my-4" />
        </div>
      </section>
    </div>
  );
};

export default Life;
