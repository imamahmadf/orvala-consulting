import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Center, Image } from "@chakra-ui/react";
import { photos } from "../Constants";
function Photo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box backgroundColor={"primary"} px={"30px"} pt={"40px"} pb={"40px"}>
      <Slider {...settings}>
        {photos.map((val, idx) => {
          console.log(val);
          return (
            <Center px={{ ss: "0px", sm: "10px", sl: "20px" }} key={idx}>
              <Image
                width="100%"
                overflow="hiden"
                objectFit="cover"
                src={val}
                alt={""}
                height={{ ss: "180px", sm: "180px", sl: "400px" }}
              />
            </Center>
          );
        })}
      </Slider>
    </Box>
  );
}

export default Photo;
