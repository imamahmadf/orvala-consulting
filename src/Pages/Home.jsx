import React from "react";
import {
  Box,
  Center,
  Image,
  Container,
  Text,
  Flex,
  SimpleGrid,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import CardContent from "../Components/User/CardContent";
import Photo from "../Components/Photo";
import { artikel, Partners, whyUs, expo } from "../Constants";
import ExpoCard from "../Components/ExpoCard";
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
import { motion } from "framer-motion"; // Import framer-motion
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
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
  const animationVariants = {
    hidden: {
      x: 0,
      y: 100,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,

      opacity: 1,
      transition: {
        type: "tween",
        delay: 1 * 0.3, // Penundaan berdasarkan indeks
        duration: 1.5, // Durasi animasi
        ease: "easeOut",
      },
    },
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box>
      <Box backgroundColor={"background"}>
        <Box
          backgroundColor={"primary"}
          mt={{ ss: "0px", sm: "0px", sl: "80px" }}
        >
          <div className="main">
            <div className="overlay"></div>
            <video src={"/Assets/moskow.mp4"} autoPlay loop muted />
            <div className="content">
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate="show"
              >
                <Text
                  textAlign={"center"}
                  fontSize={{ ss: "28px", sm: "28px", sl: "45px" }}
                  fontWeight="700"
                  mb={1}
                  mx={5}
                >
                  PROGRESSING WITH MIND, BODY, AND SOUL fOR YOUR SUCCESSES
                </Text>{" "}
                <Text
                  textAlign={"center"}
                  fontSize={"18px"}
                  fontWeight="300"
                  mb={5}
                  mx={5}
                >
                  "We are Indonesian value-driven consulting firm that is
                  designed "
                </Text>
                <Center gap={5}>
                  <Link to="/contact">
                    <Button w={"120px"} variant="primary">
                      Contact
                    </Button>
                  </Link>
                  <Link to="/expo">
                    <Button
                      w={"120px"}
                      backgroundColor={"white"}
                      variant="secondary"
                    >
                      Expo
                    </Button>
                  </Link>
                </Center>
              </motion.div>
            </div>
          </div>

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
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {" "}
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
                  affordable and high-qualified services to ovecome most
                  important challenges, deliver inovative solution and define
                  the future.
                </Text>{" "}
              </Box>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Box>
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ub2R3oMJc8o?si=4z8ezleKILz2CsZy&amp;start=261"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </Box>
            </div>
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
        </Container>{" "}
        <Container maxW={"1140px"} mb={"50px"}>
          <Text
            lineHeight={"8"}
            textAlign={"center"}
            fontSize={"33px"}
            fontWeight="700"
            mb={"30px"}
          >
            Expo In Russia
          </Text>
          {expo.map((val, idx) => {
            console.log(val.judul);
            return <ExpoCard data={val} key={idx} />;
          })}
        </Container>
        <Box
          backgroundImage={"/Assets/why.png"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          backgroundRepeat={"no-repeat"}
          backgroundAttachment={"fixed"}
          py={"20px"}
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
                  <div
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
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
                  </div>
                );
              })}
            </SimpleGrid>
          </Container>
        </Box>
        <Container maxWidth={"1140px"} p={0}>
          <Process />
          <Box py={"20px"} mx={"30px"} mt={"50px"}>
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
                      height={{ ss: "50px", sm: "50px", sl: "80px" }}
                    />
                  </Center>
                );
              })}
            </Slider>
          </Box>
        </Container>
      </Box>
      <Photo />
    </Box>
  );
}

export default Home;
