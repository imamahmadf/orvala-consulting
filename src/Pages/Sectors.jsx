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
  VStack,
} from "@chakra-ui/react";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { sectors } from "../Constants";
function Sectors() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Box>
      {" "}
      <Center
        backgroundImage={"Assets/sectors.jpg"}
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
                SECTORS
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
      <Container maxW={"1140px"} pt={"120px"}>
        <Box>
          <Text
            lineHeight={"8"}
            fontSize={"33px"}
            fontWeight="700"
            align={"center"}
            mb={"30px"}
          >
            Our Sectors
          </Text>
          {sectors.map((val, idx) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
              >
                <Box
                  borderRadius={"5px"}
                  p={"30px"}
                  backgroundPosition={"center"}
                  backgroundSize={"cover"}
                  backgroundRepeat={"no-repeat"}
                  backgroundImage={val.background}
                  mb={"50px"}
                >
                  <div
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <Text
                      color={"white"}
                      lineHeight={"8"}
                      fontSize={"24px"}
                      fontWeight="500"
                      mb={"10px"}
                      align={"center"}
                    >
                      {val.judul}
                    </Text>
                  </div>
                  <SimpleGrid
                    minChildWidth="130px"
                    spacing="10px"
                    justifyContent={"centerspace-between"}
                  >
                    {val.conten.map((val, idx) => {
                      return (
                        <div
                          data-aos="fade-down"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="1000"
                        >
                          <Center>
                            <VStack
                              maxW={"150px"}
                              bg={"dark"}
                              p={"10px"}
                              borderRadius={"5px"}
                            >
                              <Center
                                bg={"primary"}
                                w={"120px"}
                                h={"120px"}
                                borderRadius={"5px"}
                              >
                                <Image
                                  src={val.icon}
                                  height="80px"
                                  overflow="hiden"
                                  objectFit="cover"
                                />
                              </Center>
                              <Text
                                color={"white"}
                                lineHeight={"6"}
                                fontSize={"15px"}
                                fontWeight="300"
                                maxW={"150px"}
                                textAlign={"center"}
                              >
                                {val.isi}
                              </Text>
                            </VStack>
                          </Center>
                        </div>
                      );
                    })}
                  </SimpleGrid>
                </Box>
              </div>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default Sectors;
