import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import React from "react";

const Review = () => {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="bg-primary w-25">Slide 1</SwiperSlide>
        <SwiperSlide className="bg-primary w-25">Slide 2</SwiperSlide>
        <SwiperSlide className="bg-primary w-25">Slide 3</SwiperSlide>
        <SwiperSlide className="bg-primary w-25">Slide 4</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
