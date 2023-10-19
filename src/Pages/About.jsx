import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  Center,
  TabPanel,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { value } from "../Constants";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box mt={"70px"}>
      <Center
        backgroundImage={"Assets/about.jpg"}
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
                lineHeight={"8"}
                textAlign={"center"}
                fontSize={"50px"}
                fontWeight="700"
                mb={"30px"}
              >
                ABOUT US
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

      <Container maxW={"1140px"} pt={"50px"}>
        <Box
          backgroundColor={"background"}
          p={"20px"}
          fontSize={"18px"}
          lineHeight={"7"}
          fontWeight={"light"}
        >
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab
                fontWeight={"900"}
                _selected={{ bg: "primary", borderRadius: 0 }}
              >
                Our Vision
              </Tab>
              <Box width={"30px"}></Box>
              <Tab
                fontWeight={"900"}
                _selected={{ bg: "primary", borderRadius: 0 }}
              >
                Our Mission
              </Tab>
            </TabList>
            <TabPanels minH={"130px"}>
              <TabPanel>
                <p>
                  Leading Indonesia's Transformation Guide: Empowering Change
                  Makers with Mind, Body, and Soul to Accelerate Progress,
                  Navigate Markets, and Ignite Innovation Beyond Imagination.
                </p>
              </TabPanel>
              <TabPanel>
                <Flex
                  gap={10}
                  flexDirection={{ ss: "column", sm: "column", sl: "row" }}
                >
                  <Box>
                    <Text>
                      1. We Empower Progress: We empower global change makers
                      with comprehensive, innovative solutions.
                    </Text>
                  </Box>{" "}
                  <Box>
                    <Text>
                      2. We Navigate Global Markets: We facilitate seamless
                      market entry, ensuring compliance and fostering
                      connections.
                    </Text>
                  </Box>{" "}
                  <Box>
                    <Text>
                      3. We Drive Growth and Innovation: We empower sustained
                      success through support, growth, and innovation.
                    </Text>
                  </Box>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Container>
      <Box bg={"background"} mt={"50px"}>
        <Container maxW={"1140px"} py={"50px"}>
          {" "}
          <Text
            color={"primary"}
            lineHeight={"8"}
            fontSize={"33px"}
            fontWeight="700"
            mb={"30px"}
          >
            Our Values
          </Text>
          <SimpleGrid minChildWidth="200px" spacing="20px">
            {value.map((val, idx) => {
              return (
                <Box key={idx}>
                  <Image
                    src={val.icon}
                    height="80px"
                    overflow="hiden"
                    mb={"30px"}
                    objectFit="cover"
                  />
                  <Text
                    lineHeight={"8"}
                    fontSize={"25px"}
                    fontWeight="500"
                    mb={"15px"}
                  >
                    {val.judul}
                  </Text>
                  <Text
                    fontSize={"18px"}
                    lineHeight={"7"}
                    fontWeight={"light"}
                    mb={"27px"}
                    maxW={"250px"}
                  >
                    {val.isi}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default About;
