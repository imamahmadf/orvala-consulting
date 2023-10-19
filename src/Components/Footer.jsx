import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Container,
  HStack,
  Center,
  Spacer,
} from "@chakra-ui/react";
import { sosmeds } from "../Constants";
import { Link } from "react-router-dom";

function sosmedIcon() {
  return sosmeds.map((sosmed, index) => {
    return (
      <Center key={index}>
        <a href={sosmed.link}>
          <i className={`fa-brands fa-${sosmed.logo}`}></i>
        </a>
      </Center>
    );
  });
}
function Footer() {
  return (
    <>
      <Box backgroundColor={"#2A2A2A"}>
        <Container maxW="1140px" pt={"40px"}>
          <Flex
            textColor={"background"}
            flexDirection={{ ss: "column", sm: "column", sl: "row" }}
          >
            <Box mb={"40px"}>
              <Text fontSize={"20px"}>Contact</Text>
              <Flex maxW={"300px"} mt={"15px"}>
                <i className="fa-solid fa-location-dot"></i>
                <Text ms={"10px"}>
                  Aldeoz Building Lantai 6 Jalan Warung Jati Barat No.39,
                  Kalibata, Pancoran, Jakarta Selatan
                </Text>
              </Flex>
              <Flex mt={"10px"}>
                <Center>
                  <i className="fa-brands fa-whatsapp"></i>
                </Center>
                <Text ms={"10px"}>+628123456789</Text>
              </Flex>
              <Flex mt={"10px"}>
                <Center>
                  <i className="fa-regular fa-envelope"></i>
                </Center>
                <Text ms={"10px"}>info@orvalaconsulting.com</Text>
              </Flex>
            </Box>
            <Spacer />
            <Box>
              <Text fontSize={"20px"}>Social Media</Text>
              <Flex fontSize={"30px"} gap={5} mt={"15px"} mb={"20px"}>
                {sosmedIcon()}
              </Flex>
              <Text fontSize={"20px"} mb={"15px"}>
                Menu
              </Text>
              <Flex gap={5}>
                <Text>Services</Text>
                <Text>About Us</Text>
                <Text>Careers</Text>
                <Text>Contact</Text>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
      <Box backgroundColor={"white"} textColor={"black"}>
        <Container maxW="1140px" py={"20px"}>
          <Text>© 2023 by PT. Orvala Analitika Global</Text>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
