import React from "react";
import BreadCrumb from "../../layout/BreadCrumb";
import BlogsSwiper from "../Home/BlogsSwiper";
import FaqComponent from "../ModelG20Page/FaqComponent";
import Events from "./Events";
import Faq from "./Faq";
import YouthSwiper from "./YouthSwiper";

const Youth = () => {
  return (
    <div>
      {" "}
      {/* <!-- page title --> */}
      <BreadCrumb
        heading={"Yuvamanthan (The discussion platform for the Indian Youth*)"}
      />
      {/* <!-- /page title --> */}
      {/* <!-- about us --> */}
      <section className="section position-relative">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-80">
            <div className=" col-md-6 mb-5 mb-md-0 order-2 order-lg-1">
              <div className="d-flex align-items-start justify-content-start">
                <div>
                  <span className="section-title-border"></span>
                  <h2 className="section-title">Who we are?</h2>
                </div>
              </div>
              <p>
                This space is created by the youth and for the youth of today.
                It is specifically dedicated to the young, ambitious and
                action-loving youth of India.
              </p>
              <p>
                We at Yuvamanthan believe that India is a land of tradition and
                innovation that mixes well with the impressionable minds of
                today’s youth.
              </p>
              <p>
                Did you know that India has the largest youth concentration in
                the world with almost 430 million citizens in the age group of
                16-35 years. Talk about national pride, right?
              </p>

              <p className="mb-5">
                As youngsters today are more inclined towards Social Awareness,
                Freedom of Change and Digital Transformation, we are here to
                provide a platform that gives them the voice to make a credible
                impact in society.
              </p>
            </div>
            <div className="col-md-6  order-1 order-lg-2">
              <img
                src="images/youth-img1.jpg"
                className="w-100 rounded-4"
                alt=""
              />
            </div>
          </div>

          <div className="row align-items-center justify-content-between mb-80">
            <div className="col-md-6">
              <img
                src="images/youth-img2.webp"
                className="w-100 rounded-4"
                alt=""
              />
            </div>
            <div className=" col-md-6 mb-5 mb-md-0">
              <div className="d-flex align-items-start justify-content-start">
                <div>
                  <span className="section-title-border"></span>
                  <h2 className="section-title">What we do?</h2>
                </div>
              </div>
              <p>
                The team of Yuvamanthan has planned to create an open platform
                for youth to start discussions and open communications via
                multiple channels to connect, contribute and change.
              </p>
              <p>
                According to recent findings, it is inferred that youngsters who
                possess diverse qualities like creativity, and logical intellect
                can have a more positive influence over the masses.
              </p>
              <p>
                Moreover, these findings have further encouraged in growth and
                development of certain proactive interventions and initiatives
                to strengthen youth’s capacity to aspire and inspire.
              </p>

              <p className="mb-5">
                With that in mind, take a look at what we have to offer the
                youth of today:
              </p>
            </div>
          </div>

          <div className="row g-3 g-lg-4 g-xl-4">
            {/* <!-- Confidence Building --> */}
            <div className="col-md-6 col-lg-6">
              <h3>
                {/* <span className="text-primary">01.</span> */}
                Confidence Building
              </h3>
              <p className=" fs-6">
                By actively participating in forum discussions, social media
                events and collaborative workshops, you will certainly take a
                giant leap forward in building and developing your confidence.
              </p>
            </div>
            {/* <!-- Personality Development --> */}
            <div className="col-md-6 col-lg-6">
              <h3>
                {/* <span className="text-primary">02.</span> */}
                Personality Development
              </h3>
              <p className="fs-6">
                Who doesn't like a person who reflects calibre with a strong
                personality? By being present and active in our daily challenges
                on youth-centric activities, you are sure to polish your
                potential towards a better version of yourself.
              </p>
            </div>
            {/* <!-- Awareness in your Pocket – --> */}
            <div className="col-md-6 col-lg-6">
              <h3>
                {/* <span className="text-primary">03.</span> */}
                Awareness in your Pocket
              </h3>
              <p className="fs-6">
                Thanks to the ongoing digital revolution, becoming more alert
                about the current happenings is no more a task. Youngistaan
                tribe too will have access to all the latest updates around the
                nation on various headlines to maintain a sense of awareness.
              </p>
            </div>
            {/* <!-- Speakers of Tomorrow – --> */}
            <div className="col-md-6 col-lg-6">
              <h3>
                {/* <span className="text-primary">04.</span> */}
                Speakers of Tomorrow
              </h3>
              <p className="fs-6 mb-0">
                As a youth of today it is important to voice your opinion on
                matters that have national relevance. With our association, you
                will experience live debates, mock summit sessions and more to
                inspire the speaker within to start the dialogue.
              </p>
            </div>

            {/* <!-- Social Storytelling – --> */}
            <div className="col-md-6 col-lg-6">
              <h3>
                {/* <span className="text-primary">04.</span> */}
                Social Storytelling
              </h3>
              <p className="fs-6 mb-0">
                We believe there’s a story in every bit of thought you think, a
                word you speak. With us, you get to choose and showcase your
                story via multiple social media platforms like IG, FB, Twitter,
                Snapchat, etc
              </p>
            </div>
          </div>
          <blockquote className="mt-4">
            <p className="text-center">
              All in all, we at Yuvamanthan are just mere engines but with you
              as our drivers,{" "}
              <span className="fw-bold">
                together we can create a global community
              </span>{" "}
              that creates and shares a{" "}
              <span className="fw-bold">voice that matters</span>.
            </p>
          </blockquote>
        </div>
        {/* <!-- background shape --> */}
        <img
          className="img-fluid about-bg-shape"
          src="./images/backgrounds/about-us-3-bg.png"
          alt="shape"
        />
      </section>
      {/* <!-- /about us --> */}
      {/* topics */}
      <section className="section position-relative">
        <div className="container">
          <div className="row justify-content-between mb-80">
            <div className=" col-md-6 mb-5 mb-md-0">
              <div className="d-flex align-items-start justify-content-start">
                <div>
                  <span className="section-title-border"></span>
                  <h2 className="section-title">Trending Topics</h2>
                </div>
              </div>
              <p className="mb-5">
                This space will be dedicated to exceptional talking topics that
                cater to youth’s interests. If the idea of the community is to
                provide a forum, then here we will have topics and explanations
                that would allow members to participate and engage freely and
                actively.
              </p>
              <p className="mb-5">
                Some of the mock topics with few starting points to break the
                ice for forum discussion that is as follows.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="images/modelg20/main.jpg"
                className="w-100 rounded-4"
                alt=""
              />
            </div>
          </div>
          {/* <div className="row justify-content-between mb-80">
                <div className="col"> */}
          {/* Cyber Safety */}
          {/* <div className="card mb-3" style={{ maxWidth: '540px' }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={
                                    process.env.REACT_APP_MAIN_URL + "images/topics/cybersafety.jpg"
                                }
                                    className="img-fluid rounded-start"
                                    alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cyber Safety</h5>
                                    <p className="card-text">
                                        1 out of 5 young people has experienced cyber trolling or abuse online
                                    </p>
                                    <p className="card-text">
                                        Almost 95% of young people say they feel safe online while around 4.2 million users have
                                        experienced hateful speech and bullying online.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> */}

          {/* Post-Pandemic Culture */}

          {/* </div> */}
          {/* </div> */}
          <div className="row g-3 g-lg-4 g-xl-5">
            {/* <!-- Cyber Safety --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">01.</span> */}
                Cyber Safety
              </h3>
              <ul className="mb-3">
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>1 out
                  of 5 young people has experienced cyber trolling or abuse
                  online
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Almost 95% of young people say they feel safe online while
                  around 4.2 million users have experienced hateful speech and
                  bullying online.
                </li>
              </ul>
              <p className=" fs-6">
                If these facts are to be believed, then how far is the narrative
                of having great cyber security measures justified?
              </p>
            </div>
            {/* <!-- Post-Pandemic Culture --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">01.</span> */}
                Post-Pandemic Culture
              </h3>
              <ul className="mb-3">
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Almost 1/3 of the Indians faced joblessness or remote working
                  due to Covid19
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Entire corporate structure suffered massive financial and
                  labour loss in only 3 months under Covid lockdowns
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Post-Pandemic, remote working set-up, mental stress and
                  lifestyle challenges have received some traction
                </li>
              </ul>
            </div>
            {/* <!-- G20 in India --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">01.</span> */}
                G20 in India
              </h3>
              <p className=" fs-6">
                As India bags the 2023 G20 presidency, there are a wide array of
                socio-political, financial and economic agendas that will take
                centre stage.
              </p>
              <ul className="mb-3">
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Digital Transformation
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Sustainable transformation
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  Startup India
                </li>
                <li>
                  <i className="bi bi-arrow-right text-primary me-2"></i>
                  One Earth, One Family, One Future – the theme of G20
                </li>
              </ul>
              <p className=" fs-6">
                Youth can take up various G20-related issues as debate topics or
                mock summit simulations to address these matters and form
                creative solutions for the Leader’s meet.
              </p>
            </div>
            {/* <!-- Education For All --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">01.</span> */}
                Education For All
              </h3>
              <p className=" fs-6">
                As education is the foremost necessity for every individual,
                there are about 1.5 million illiterates in the country. With the
                government having initiated new schemes and laws in the scope of
                educational enrichment, why is illiteracy still looming over the
                country?
              </p>
            </div>
            {/* <!-- Women's Empowerment --> */}
            <div className="col-md-6 col-lg-6 mb-4 mb-md-0">
              <h3>
                {/* <span className="text-primary">01.</span> */}
                Women's Empowerment
              </h3>
              <p className=" fs-6">
                There’s nothing a woman can’t do or be, that is the time old
                reiterated quote. However, even today, they are prohibited from
                growing and having a flourishing life for themselves.
              </p>
              <p className=" fs-6">
                Names like Falguni Nayar (Nykka), Priyanka Chopra Jonas, and
                Indra Nooyi (PepsiCo) have laid a formidable example for young
                females across the country to empower their lives and become
                more than a household existence. So, how are we doing to
                strengthen the narrative of women’s empowerment?
              </p>
            </div>

            {/* *There can be other topics in this section added after revisions */}
          </div>
        </div>
      </section>
      {/* topics */}
      {/* Youth Gallery */}
      <section className=" py-5 position-relative layer-bg">
        <div className="container">
          <h3 className="text-white">Youth Gallery</h3>
          <p className="col-lg-7 text-white">
            Showcase your talent, culture or fashion. Post us your pics, videos
            and reels on <br /> <a href="mailto:YouthGallery@yuvamanthan.org">
              <i className="bi bi-envelope"></i> YouthGallery@yuvamanthan.org
            </a> and we will feature them in this section.
          </p>
          <YouthSwiper />
        </div>
      </section>
      {/* Youth Gallery */}
      {/* Social Wall of Fame */}
      <section className="section position-relative">
        <div className="container">
          <h2>Social Wall of Fame</h2>
          <p>
            In this space, we will put up 2-3 social media interface banners
            like IG, FB, and Twitter. Here we will post the latest and trending
            carousel posts or tweets with a comment section to allow youth
            engagement and interest.
          </p>
          <p>
            Also, a separate section will be made under this space in a graphic
            design creative to allow youth to post pictures, selfies or videos
            on trending topics or any contest-related result images.
          </p>
        </div>
      </section>
      {/* Social Wall of Fame */}
      {/* Youth Gallery */}
      <section className="section position-relative">
        <div className="container">
          <h3>Youth Star of the Week</h3>
          {/* Showcase your talent, culture or fashion. Post us your pics, videos and reels on
                YouthGallery@yuvamanthan.org and we will feature them in this section. */}
        </div>
      </section>
      {/* Youth Gallery */}
      <BlogsSwiper />
      {/* Upcoming Events and Initiatives
       */}
      <section className="section position-relative">
        <div className="container">
          <div className="row">
            <div>
              <span className="section-title-border mx-auto"></span>
              <h2 className="section-title text-center">
                Upcoming Events and Initiatives
              </h2>
            </div>
          </div>
          <div class="row justify-content-center g-4">
            <div className="col-12 col-md-6 col-lg-4">
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
                        Jan
                        <br />
                        <span className="fs-2">10</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3">
                    <span className="section-title-border mb-2"></span>
                    <p className="text-dark lh-sm fs-6 fw-semibold">
                      Youth Participation events line up in G20 summit 2023
                    </p>
                    <span>Last updated 23 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
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
                        Jan
                        <br />
                        <span className="fs-2">15</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3">
                    <span className="section-title-border mb-2"></span>
                    <p className="text-dark lh-sm fs-6 fw-semibold">
                      21-day challenge under LiFe initiative
                    </p>
                    <span>Last updated 28 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
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
                        FEB
                        <br />
                        <span className="fs-2">25</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3">
                    <span className="section-title-border mb-2"></span>
                    <p className="text-dark lh-sm fs-6 fw-semibold">
                      Workshops, seminars on issues like women empowerment,
                      startup India, Jan Bhagidaari
                    </p>
                    <span>Last updated 10 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
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
                        MAR
                        <br />
                        <span className="fs-2">22</span>
                      </h5>
                    </div>
                  </div>
                  <div className="px-3">
                    <span className="section-title-border mb-2"></span>
                    <p className="text-dark lh-sm fs-6 fw-semibold">
                      Post a Selfie with a Plant as part of Earth Day
                      celebration contest and more
                    </p>
                    <span>Last updated 3 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Upcoming Events and Initiatives*/}
      {/* How to Join the Community? */}
      <section
        id="scrollspyTestimonial"
        className="section bg-secondary"
        data-background="images/backgrounds/testimonial-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <span className="section-title-border border-center"></span>
              <h2
                className="section-title text-white"
                style={{ color: "white" }}
              >
                How to Join the Community?
              </h2>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center text-center">
            <h3 className="mb-5 fs-2 col-lg-8 text-warning">
              Hi Youngistaan groupie, if you’re looking for a platform that
              listens to you and respects your voice, then you are at the right
              spot.
            </h3>
            <a href="/" className="btn btn-warning-outline text-white w-5 mb-5">
              Sign up or register with us here!
            </a>
            <p className="text-white">See you on the other side!</p>
          </div>
        </div>
      </section>
      {/* How to Join the Community? */}
      <Faq />
    </div>
  );
};

export default Youth;
