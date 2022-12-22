import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

const newsContent = [
  {
    id: 1,
    image: "./images/blog/post-1.jpg",
    imageAlt: "Blogs Top Image",
    date: "1 Sep, 2018",
    heading: "elit duied aiusmod tempor did labore dolory",
    link: "./",
    paragraph: [
      "Excepteur sint ocacat cupidatat non proi dent sunt in culpa qui officia deserunt. mollit anim id est laborum. sed ut pers piciatis unde omnis iste natus error. sit voluptatem.",
    ],
  },
  {
    id: 2,
    image: "./images/blog/post-2.jpg",
    imageAlt: "Blogs TOp Image",
    date: "2 Sep, 2018",
    heading: "Lorem ipsum dolor sit amet",
    link: "./",
    paragraph: [
      "Lorem ipsum dolor sit amet, consecte tur adipis elit sed eiusmod.",
    ],
  },
  {
    id: 3,
    image: "./images/blog/post-3.jpg",
    imageAlt: "Blogs TOp Image",
    date: "3 Sep, 2018",
    heading: "Lorem ipsum dolor sit amet",
    link: "./",
    paragraph: [
      "Lorem ipsum dolor sit amet, consecte tur adipis elit sed eiusmod.",
    ],
  },
];

const SingleNews = ({ data }) => {
  return (
    <article className="card border-0 rounded-0 position-relative box-shadow zindex-1 h-100">
      <div className="card-type">Article</div>
      <img
        className="card-img-top rounded-0"
        src={data.image}
        alt={data.imageAlt}
      />
      <div className="card-body">
        <div className="card-meta text-uppercase mb-2">
          on <strong className="text-dark">{data.date}</strong>
        </div>
        <h4 className="card-title">
          <a href={data.link} className="text-dark">
            {data.heading}
          </a>
        </h4>
        <span className="section-title-border"></span>
        <p className="card-text">
          {data.paragraph[0].slice(0,80)+"..."}<Link to={data.link}>Read More</Link>
        </p>
      </div>
    </article>
  );
};

const NewsSwiper = () => {
  return (
    <section className="section bg-gray-white position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="section-title-border"></span>
            <p className="subtitle">Latest News</p>
            <h2 className="section-title">STAY TUNED WITH LATEST STORIES</h2>
          </div>
        </div>
        <Swiper
              spaceBetween={50}
              slidesPerView={3}
              loop={true}
            >
              {newsContent.map((news, index) => {
                return (
                  <SwiperSlide key={index} className="py-4">
                    <SingleNews data={news} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
      </div>
      {/* background shapes */}
      <img
        className="img-fluid blog-shape-left"
        src="images/backgrounds/blog-bg-left.png"
        alt=""
      />
      <img
        className="img-fluid blog-shape-right"
        src="images/backgrounds/blog-bg-right.png"
        alt=""
      />
    </section>
  );
};

export default NewsSwiper;
