import React from "react";
import { Box, Container, Text, Center } from "@chakra-ui/react";
import { mainServices } from "../Constants";
import Contact from "./Contact";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
function MainServices() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box backgroundColor={"background"} py={"40px"}>
      <Center
        backgroundImage={"Assets/main-services.jpg"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        width="100%"
        height={{ ss: "600px", sm: "600px", sl: "820px" }}
      >
        {" "}
        <Container maxW={"1140px"}>
          <Center flexDirection={"column"}>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <Text
                color={"white"}
                textAlign={"center"}
                fontSize={"50px"}
                fontWeight="700"
                mb={"10px"}
              >
                MAIN SERVICES
              </Text>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <Box h={"8px"} w={"220px"} bg={"primary"}></Box>
            </div>
          </Center>
        </Container>
      </Center>
      <Container maxW={"1140px"}>
        {mainServices.map((val, idx) => {
          return (
            <Box key={idx} mt={"80px"}>
              <Box
                backgroundImage={val.background}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                backgroundRepeat={"no-repeat"}
                color={"white"}
                px={"10px"}
                py={"20px"}
                mb={"27px"}
              >
                <Text lineHeight={"8"} fontSize={"26px"} fontWeight="700">
                  {val.step}
                </Text>
                <Text
                  textAlign={"justify"}
                  fontSize={"18px"}
                  lineHeight={"8"}
                  fontWeight={"light"}
                >
                  {val.exp}
                </Text>
              </Box>
              {val.content.map((val, idx) => {
                return (
                  <Box key={idx}>
                    <Text lineHeight={"8"} fontSize={"20px"} fontWeight="700">
                      {val.judul}
                    </Text>
                    <Text
                      textAlign={"justify"}
                      fontSize={"18px"}
                      lineHeight={"8"}
                      fontWeight={"light"}
                      mt={"5px"}
                      mb={"35px"}
                    >
                      {val.isi}
                    </Text>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Container>
      <Contact />
    </Box>
  );
}

export default MainServices;
