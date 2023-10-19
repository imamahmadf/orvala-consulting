import React from "react";
import {
  Box,
  Center,
  Image,
  Container,
  Text,
  Flex,
  SimpleGrid,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { proses } from "../Constants";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function ProcessCard() {
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
          slidesToShow: 1,
          slidesToScroll: 1,
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
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Box display={{ ss: "none", sm: "none", sl: "inline" }}>
        <SimpleGrid minChildWidth="250px" spacing="10px">
          {proses.map((val, idx) => {
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
                  delay: idx * 0.3, // Penundaan berdasarkan indeks
                  duration: 1.5, // Durasi animasi
                  ease: "easeOut",
                },
              },
            };
            return (
              <Box
                backgroundColor={"background"}
                borderRadius={"5px"}
                boxShadow="md"
              >
                <Box
                  backgroundColor={"background"}
                  borderRadius={"5px"}
                  boxShadow="md"
                  minH={"500px"}
                >
                  <Center
                    backgroundImage={val.foto}
                    backgroundPosition={"center"}
                    backgroundSize={"cover"}
                    backgroundRepeat={"no-repeat"}
                    width="100%"
                    height="220px"
                    borderTopRadius={"5px"}
                    color={"white"}
                    flexDirection={"column"}
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    _hover={{
                      backgroundPosition: "100%",
                      color: "white",
                    }}
                  >
                    <Center
                      border={"2px"}
                      borderColor={"white"}
                      borderRadius={"50%"}
                      width="50px"
                      height="50px"
                      fontSize={"35px"}
                      mb={"15px"}
                    >
                      {idx + 1}
                    </Center>
                    <Text
                      lineHeight={"6"}
                      textAlign={"center"}
                      fontSize={"25px"}
                      fontWeight="700"
                    >
                      {val.judul}
                    </Text>
                  </Center>

                  <UnorderedList fontSize={"18px"} p={"20px"}>
                    {val.step.map((val, idx) => {
                      return <ListItem key={idx}>{val}</ListItem>;
                    })}{" "}
                  </UnorderedList>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
      <Box display={{ ss: "inline", sm: "inline", sl: "none" }}>
        <Box backgroundColor={"primary"} px={"30px"} pb={"40px"}>
          <Slider {...settings}>
            {proses.map((val, idx) => {
              console.log(val);
              return (
                <Center key={idx}>
                  <Box
                    backgroundColor={"background"}
                    borderRadius={"5px"}
                    boxShadow="md"
                  >
                    <Box
                      backgroundColor={"background"}
                      borderRadius={"5px"}
                      boxShadow="md"
                      minH={"500px"}
                      p={"10px"}
                    >
                      <Center
                        backgroundImage={val.foto}
                        backgroundPosition={"center"}
                        backgroundSize={"cover"}
                        backgroundRepeat={"no-repeat"}
                        width="100%"
                        height="220px"
                        borderTopRadius={"5px"}
                        color={"white"}
                        flexDirection={"column"}
                        transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                        _hover={{
                          backgroundPosition: "100%",
                          color: "white",
                        }}
                      >
                        <Center
                          border={"2px"}
                          borderColor={"white"}
                          borderRadius={"50%"}
                          width="50px"
                          height="50px"
                          fontSize={"35px"}
                          mb={"15px"}
                        >
                          {idx + 1}
                        </Center>
                        <Text
                          lineHeight={"6"}
                          textAlign={"center"}
                          fontSize={"25px"}
                          fontWeight="700"
                        >
                          {val.judul}
                        </Text>
                      </Center>

                      <UnorderedList fontSize={"18px"} p={"20px"}>
                        {val.step.map((val, idx) => {
                          return <ListItem key={idx}>{val}</ListItem>;
                        })}{" "}
                      </UnorderedList>
                    </Box>
                  </Box>
                </Center>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </>
  );
}

function Process() {
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1000"
    >
      <Box bg={{ ss: "primary", sm: "primary", sl: "white" }}>
        {" "}
        <Text
          pt={"50px"}
          lineHeight={"8"}
          textAlign={"center"}
          fontSize={"33px"}
          fontWeight="700"
          mb={"30px"}
        >
          Our Process
        </Text>
        <ProcessCard />
      </Box>
    </div>
  );
}

export default Process;
