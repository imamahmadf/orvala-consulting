import React from "react";
import { Box, Flex, Text, Image, Center, Container } from "@chakra-ui/react";

function Career() {
  return (
    <Box>
      <Center
        backgroundImage={"Assets/careers.jpg"}
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
                CAREERS
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
    </Box>
  );
}

export default Career;
