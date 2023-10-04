import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { mainServices } from "../Constants";
function MainServices() {
  return (
    <Box mt={"80px"} backgroundColor={"background"} py={"40px"}>
      <Container maxW={"1140px"}>
        {mainServices.map((val, idx) => {
          return (
            <Box key={idx} mb={"80px"}>
              <Text
                lineHeight={"8"}
                fontSize={"26px"}
                fontWeight="700"
                color={"primary"}
              >
                {val.step}
              </Text>
              <Text
                textAlign={"justify"}
                fontSize={"18px"}
                lineHeight={"9"}
                fontWeight={"light"}
                mb={"27px"}
              >
                {val.exp}
              </Text>
              {val.content.map((val, idx) => {
                return (
                  <Box key={idx}>
                    <Text lineHeight={"8"} fontSize={"26px"} fontWeight="700">
                      {val.judul}
                    </Text>
                    <Text
                      textAlign={"justify"}
                      fontSize={"18px"}
                      lineHeight={"9"}
                      fontWeight={"light"}
                      mb={"27px"}
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
    </Box>
  );
}

export default MainServices;
