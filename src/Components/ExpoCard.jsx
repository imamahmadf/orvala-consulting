import React from "react";
import {
  Box,
  Center,
  Image,
  Container,
  Text,
  Flex,
  Button,
  Spacer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ExpoCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  useEffect(() => {
    AOS.init();
  }, []);

  let { logo, judul, tema, content, start, end, foto, city } = props.data;
  return (
    <>
      {" "}
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <Box>
          <Flex
            border="1px"
            borderColor={"background"}
            borderRadius={"5px"}
            boxShadow="md"
            p={"20px"}
            flexDirection={{ ss: "column", sm: "column", sl: "row" }}
            mb={"30px"}
          >
            <Box>
              <Image
                src={logo}
                height="80px"
                overflow="hiden"
                objectFit="cover"
                me={"20px"}
                mb={"20px"}
              />
            </Box>
            <Box w={"100%"}>
              <Text lineHeight={"6"} fontSize={"22px"} fontWeight="500">
                {judul}
              </Text>
              <Text lineHeight={"6"} fontSize={"14px"} fontWeight="300">
                {tema}
              </Text>
              <Flex flexDirection={{ ss: "column", sm: "column", sl: "row" }}>
                <Text
                  lineHeight={"6"}
                  fontSize={"18px"}
                  fontWeight="300"
                  mt={"10px"}
                >
                  from {start} to {end}
                </Text>
                <Spacer />
                <Text
                  mt={"10px"}
                  lineHeight={"6"}
                  fontSize={"18px"}
                  fontWeight="300"
                >
                  <i className="fa-solid fa-location-dot"></i> {city}
                </Text>{" "}
              </Flex>{" "}
              <Button
                variant="primary"
                mt={"20px"}
                gap={"10px"}
                onClick={onOpen}
              >
                <i className="fa-solid fa-caret-down"></i> More Info
              </Button>
            </Box>
          </Flex>
        </Box>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="1150px">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container maxW={"1140px"}>
              {" "}
              <Slider {...settings}>
                {foto.map((val, idx) => {
                  console.log(val);
                  return (
                    <Center mx={"20px"} key={idx}>
                      <Image
                        width="100%"
                        overflow="hiden"
                        objectFit="cover"
                        src={val}
                        alt={val[idx]}
                        height={{ ss: "180px", sm: "180px", sl: "400px" }}
                      />
                    </Center>
                  );
                })}
              </Slider>
              <Flex
                flexDirection={{ ss: "column", sm: "column", sl: "row" }}
                mt={"30px"}
              >
                <Box>
                  <Image
                    src={logo}
                    height="80px"
                    overflow="hiden"
                    objectFit="cover"
                    me={"20px"}
                    mb={"20px"}
                  />
                </Box>
                <Box width={"100%"}>
                  <Text lineHeight={"6"} fontSize={"22px"} fontWeight="500">
                    {judul}
                  </Text>
                  <Text lineHeight={"6"} fontSize={"14px"} fontWeight="300">
                    {tema}
                  </Text>
                  <Flex
                    flexDirection={{ ss: "column", sm: "column", sl: "row" }}
                    mb={"20px"}
                  >
                    <Text
                      lineHeight={"6"}
                      fontSize={"18px"}
                      fontWeight="300"
                      mt={"10px"}
                    >
                      from {start} to {end}
                    </Text>
                    <Spacer />
                    <Text
                      mt={"10px"}
                      lineHeight={"6"}
                      fontSize={"18px"}
                      fontWeight="300"
                    >
                      <i className="fa-solid fa-location-dot"></i> {city}
                    </Text>
                  </Flex>
                </Box>
              </Flex>
              <Text
                textAlign={"justify"}
                fontSize={"18px"}
                lineHeight={"8"}
                fontWeight={"light"}
                mb={"27px"}
              >
                {content}
              </Text>
            </Container>
          </ModalBody>

          <ModalFooter>
            <Button
              border="1px"
              borderColor="background"
              variant="ghost"
              onClick={onClose}
              me={"20px"}
            >
              Close
            </Button>{" "}
            <Link to="contact">
              <Button maxW={"100px"} variant="primary">
                Contact Us
              </Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ExpoCard;
