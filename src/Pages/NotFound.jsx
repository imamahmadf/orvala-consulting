import React, { useRef, useState } from "react";
// Import Swiper React components
import { Link, useHistory } from "react-router-dom";
import {
  Container,
  Image,
  Box,
  Center,
  Text,
  HStack,
  Button,
  VStack,
} from "@chakra-ui/react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function NotFound() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={"/Assets/moskow.mp4"} autoPlay loop muted />
        <div className="content">
          <Center>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <HStack bg={"white"} borderRadius={"5px"}>
                <VStack m={3}>
                  <Text
                    color={"black"}
                    w={{ ss: "200px", sm: "200px", sl: "400px" }}
                    textAlign={"center"}
                    fontSize={{ ss: "20px", sm: "20px", sl: "50px" }}
                    fontWeight="700"
                  >
                    WEBSITE UNDER CONSTRUCTION
                  </Text>

                  <Link to="/">
                    <Button minW={"200px"} variant="primary">
                      home
                    </Button>
                  </Link>
                </VStack>
                <Box
                  p={"5px"}
                  m={3}
                  h={{ ss: "100px", sm: "100px", sl: "200px" }}
                  w={{ ss: "100px", sm: "100px", sl: "200px" }}
                  bg={"primary"}
                  borderRadius={"5px"}
                >
                  <Image
                    src="/Assets/palu.png"
                    overflow="hiden"
                    objectFit="cover"
                    borderRadius={"5px"}
                  />
                </Box>
              </HStack>
            </div>
          </Center>
        </div>
      </div>
    </>
  );
}
