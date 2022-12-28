import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import blogs from "../Blog/content";

const SingleBlog = ({ data }) => {
  return (
    <div className="card border-0 rounded-0 shadow pb-0">
      <img
        className="card-img-top rounded-0"
        src={data.image}
        alt="Card image cap"
      />
      <div className="card-body position-relative">
        <i className={`card-icon bi bi-arrow-right`}></i>
        <h4>
          <a href={"/blog/" + data.slug} className="text-dark">
            {data.title}
          </a>
        </h4>
        <p className="card-text">
          {data.id == 3
            ? "Climate change is defined as drastic temperature shifts and unpredictable..."
            : data.subpara.slice(0, 85) + "..."}
        </p>
        <a href={"/blog/" + data.slug} className="btn btn-secondary btn-arrow">
          Read More
        </a>
      </div>
    </div>
  );
};

const BlogsSwiper = () => {
  return (
    <div>
      <section className="bg-gray-white">
        <div className="section bg-secondary section-bottom-lg">
          <div className="container">
            <div className="row justify-content-around">
              <div className="col-10 col-lg-6 text-center">
                <span className="section-title-border border-center"></span>
                <h2 className="section-title text-white">Featured Blogs</h2>
                <p className="subtitle text-white">
                  Align yourself with the latest on G20. Information, guest
                  posts and articles for sustainability, peace and growth
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="service-wrapper">
          <div className="container">
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
              {blogs.map((blog, index) => {
                return (
                  <SwiperSlide key={index} className="py-4">
                    <SingleBlog data={blog} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="text-center">
            <a href="/blog" className="btn btn-primary hover-ripple">
              View All Blogs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogsSwiper;
