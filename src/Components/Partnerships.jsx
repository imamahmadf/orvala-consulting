import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./stylesPartnerships.module.css";
function Partnerships() {
  return (
    <Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <Image
            src="/Assets/logo/Imperia.jpg"
            alt="LogoTour"
            height={{ ss: "30px", sm: "30px", sl: "60px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            src="/Assets/logo/MEC.png"
            alt="LogoTour"
            height={{ ss: "30px", sm: "30px", sl: "60px" }}
          />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </Box>
  );
}

export default Partnerships;
