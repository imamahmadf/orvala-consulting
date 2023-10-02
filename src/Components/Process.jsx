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
import { motion } from "framer-motion"; // Import framer-motion

import { proses } from "../Constants";

function ProcessCard() {
  return (
    <>
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
            <motion.div
              key={idx}
              variants={animationVariants}
              initial="hidden"
              animate="show"
            >
              <Box
                backgroundColor={"background"}
                borderRadius={"5px"}
                boxShadow="md"
              >
                <Box
                  backgroundColor={"background"}
                  borderRadius={"5px"}
                  boxShadow="md"
                  minH={"530px"}
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
                      console.log(val);
                      return <ListItem>{val}</ListItem>;
                    })}{" "}
                  </UnorderedList>
                </Box>
              </Box>
            </motion.div>
          );
        })}
      </SimpleGrid>
    </>
  );
}

function Process() {
  return (
    <Box>
      <ProcessCard />
    </Box>
  );
}

export default Process;
