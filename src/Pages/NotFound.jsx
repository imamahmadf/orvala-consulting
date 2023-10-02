import React, { useRef, useState } from "react";
// Import Swiper React components

import { Container, Image, Box, Center, Text } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <>
      <Box
        backgroundImage={"/Assets/404.png"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
      >
        <Container maxW={"1140px"}>
          <Center flexDirection={"column"} height={"100vh"}>
            <Text
              color={"white"}
              lineHeight={"8"}
              textAlign={"center"}
              fontSize={"100px"}
              fontWeight="700"
              mb={"40px"}
            >
              404
            </Text>
            <Text
              color={"white"}
              lineHeight={"8"}
              textAlign={"center"}
              fontSize={"40px"}
              fontWeight="700"
            >
              Not Found
            </Text>
          </Center>
        </Container>
      </Box>
    </>
  );
}
