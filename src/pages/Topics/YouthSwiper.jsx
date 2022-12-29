import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination } from "swiper";

const SlideComp = () => {
  return (
    <>
      <div className="border p-3  shadow-lg bg-white rounded-4 ">
        <div className="row">
          <div className="col-12 col-xl-12">
            <img src="./images/youth1.jpg" alt="" className="w-100 rounded-4" />
          </div>
          <div className="col-12 col-xl-12 p-3">
            <blockquote className="fst-normal shadow-none p-2 ps-3 fs-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate doloremque dolorum ab illum nulla sint repellendus
              explicabo nisi blanditiis, quos quia, natus amet eveniet ex fuga
              illo enim rem quis!
            </blockquote>
            <h6 className="fs-4">Ritesh Kumar</h6>
            <p className="text-secondary fst-italic">KVS (Tughlakabad)</p>
          </div>
        </div>
      </div>
    </>
  );
};

const YouthSwiper = () => {
  return (
    <div>
      {" "}
      <>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={0}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            740: {
              slidesPerView: 2,
            },
            1240: {
              slidesPerView: 3,
            },
          }}
          //   style={{height:'550px'}}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="p-4 row justify-content-center">
            <SlideComp />
          </SwiperSlide>
          <SwiperSlide className="p-4 row justify-content-center">
            <SlideComp />
          </SwiperSlide>
          <SwiperSlide className="p-4 row justify-content-center">
            <SlideComp />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default YouthSwiper;
