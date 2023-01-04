import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import NewsContent from "../News/content";

const SingleNews = ({ data }) => {
  return (
    <article className="card border-0 rounded-0 position-relative box-shadow zindex-1 h-100">
      <div className="card-type">News</div>
      <img
        className="card-img-top rounded-0"
        src={data.image}
        // alt={data.imageAlt}
      />
      <div className="card-body">
        <div className="card-meta text-uppercase mb-2">
          on <strong className="text-dark">{data.date}</strong>
        </div>
        <h4 className="card-title">
          <a href={"/news/" + data.slug} className="text-dark">
            {data.title}
          </a>
        </h4>
        <span className="section-title-border"></span>
        <p className="card-text">
          {data.subpara === ""
            ? data.section[0].paragraph[0].slice(0, 85)
            : data.subpara.slice(0, 80)}... 
          <a href={"/news/" + data.slug}> Read More</a>
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
            <p className="subtitle">What’s New</p>
            <h2 className="section-title">
              Latest G20 News and Stories for You.
            </h2>
          </div>
        </div>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={false}
          modules={[Navigation]}
          navigation={true}
          breakpoints={{
            740: {
              slidesPerView: 2,
            },
            1240: {
              slidesPerView: 3,
            },
          }}
        >
          {NewsContent.map((news, index) => {
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
