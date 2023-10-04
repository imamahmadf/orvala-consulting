import React from "react";
import {
  Box,
  Center,
  Image,
  Container,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import { Swiper, SwiperSlide } from "swiper/react";
import CardContent from "../Components/User/CardContent";
import { artikel, Partners, whyUs } from "../Constants";
import Slider from "react-slick";
import Process from "../Components/Process";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

function Home() {
  const settings = {
    className: "slider variable-width",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 100,
    variableWidth: true,
    swipeToSlide: true,
    cssEase: "linear",
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
    <Box>
      <Box backgroundColor={"background"}>
        <Box
          backgroundColor={"primary"}
          mt={{ ss: "0px", sm: "0px", sl: "80px" }}
        >
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
          >
            <div
              slot="container-start"
              className="parallax-bg"
              style={{
                "background-image": "url(/Assets/pendaftaran.jpg)",
                "background-attachment": "fixed",
              }}
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              <Container maxWidth={"1140px"}>
                <div className="title" data-swiper-parallax="-300">
                  Slide 1
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                    suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem
                    at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
                    ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                    Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container maxWidth={"1140px"}>
                <div className="title" data-swiper-parallax="-300">
                  Slide 2
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                    suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem
                    at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
                    ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                    Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
              </Container>
            </SwiperSlide>
            <SwiperSlide>
              <Container maxWidth={"1140px"}>
                <div className="title" data-swiper-parallax="-300">
                  Slide 3
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  Subtitle
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                    nec. Nulla laoreet justo vitae porttitor porttitor.
                    Suspendisse in sem justo. Integer laoreet magna nec elit
                    suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem
                    at elit facilisis rutrum. Ut at ullamcorper velit. Nulla
                    ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero.
                    Aenean feugiat non eros quis feugiat.
                  </p>
                </div>
              </Container>
            </SwiperSlide>
          </Swiper>
          {/* <Image src="/Assets/pendaftaran.jpg" width="100%" height="60vh" /> */}
          <Container maxWidth={"1140px"} py={5} px={20}>
            <Flex justifyContent={"space-between"} alignItems="center">
              <Image
                src="/Assets/LogoArsipelago.png"
                alt="LogoArsipelago"
                height={{ ss: "30px", sm: "30px", sl: "60px" }}
              />
              <Image
                src="/Assets/LogoTour.png"
                alt="LogoTour"
                height={{ ss: "30px", sm: "30px", sl: "60px" }}
              />
              <Image
                src="/Assets/LogoTour.png"
                alt="LogoTour"
                height={{ ss: "30px", sm: "30px", sl: "60px" }}
              />
            </Flex>
          </Container>
        </Box>{" "}
        <Container maxWidth={"1140px"} py={10}>
          <SimpleGrid minChildWidth="300px" spacing="20px">
            <Box>
              <Text
                lineHeight={"8"}
                textAlign={"center"}
                fontSize={"33px"}
                fontWeight="700"
                mb={10}
              >
                Enter the Russian market and beyond
              </Text>
              <Text
                textAlign={"justify"}
                fontSize={"18px"}
                lineHeight={"8"}
                fontWeight={"light"}
              >
                Orvala Consulting are Indonesian value-driven consulting firm
                that is designed to help change and improvement makers with
                affordable and high-qualified services to ovecome most important
                challenges, deliver inovative solution and define the future.
              </Text>
            </Box>
            <Box>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/ub2R3oMJc8o?si=4z8ezleKILz2CsZy&amp;start=261"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <Box my={"30px"}>
        <Container maxWidth={"1140px"}>
          <SimpleGrid minChildWidth="300px" spacing="20px" mb={"50px"}>
            {artikel.map((val, idx) => {
              return <CardContent data={val} key={idx} />;
            })}
          </SimpleGrid>
        </Container>
        <Box
          backgroundImage={"/Assets/why.png"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundAttachment={"fixed"}
          py={"20px"}
          mb={"50px"}
        >
          <Container maxWidth={"1140px"} py={"60px"}>
            {" "}
            <Text
              color={"white"}
              lineHeight={"8"}
              textAlign={"center"}
              fontSize={"33px"}
              fontWeight="700"
              mb={"30px"}
            >
              Why Choose Us?
            </Text>
            <SimpleGrid minChildWidth="300px" spacing="20px">
              {whyUs.map((val, idx) => {
                return (
                  <Box
                    key={idx}
                    borderRadius={"5px"}
                    backgroundColor={"primary"}
                    p={"20px"}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    _hover={{
                      bg: "#262626",
                      color: "white",
                    }}
                  >
                    <Center
                      backgroundColor={"#262626"}
                      borderRadius={"5px"}
                      p={"5px"}
                      width={"60px"}
                    >
                      <Image
                        src={val.icon}
                        height="50px"
                        overflow="hiden"
                        objectFit="cover"
                      />
                    </Center>
                    <Text
                      lineHeight={"6"}
                      fontSize={"20px"}
                      fontWeight="700"
                      my={"10px"}
                    >
                      {val.judul}
                    </Text>
                    <Text lineHeight={"6"} fontSize={"15px"} fontWeight="400">
                      {val.isi}
                    </Text>
                  </Box>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>
        <Container maxWidth={"1140px"}>
          <Text
            lineHeight={"8"}
            textAlign={"center"}
            fontSize={"33px"}
            fontWeight="700"
            mb={"30px"}
          >
            Our Process
          </Text>

          <Process />
          <Box py={"20px"} mt={"50px"}>
            <Text
              textAlign={"center"}
              fontSize={"33px"}
              fontWeight="700"
              mb={"10px"}
            >
              Our Partners
            </Text>
            <Slider {...settings}>
              {Partners.map((val, idx) => {
                return (
                  <Center mx={"20px"} key={idx}>
                    <Image
                      src={val.nama}
                      alt={val.logo}
                      height={{ ss: "30px", sm: "30px", sl: "60px" }}
                    />
                  </Center>
                );
              })}
            </Slider>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
