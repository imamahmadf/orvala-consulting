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
  TabPanel,
} from "@chakra-ui/react";

function About() {
  return (
    <Box>
      <Container maxW={"1140px"} pt={"120px"}>
        <Box backgroundColor={"background"} p={"20px"}>
          <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
              <Tab _selected={{ bg: "primary", borderRadius: 0 }}>
                Our Vision
              </Tab>
              <Box width={"30px"}></Box>
              <Tab _selected={{ bg: "primary", borderRadius: 0 }}>
                Our Mission
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>
                  Leading Indonesia's Transformation Guide: Empowering Change
                  Makers with Mind, Body, and Soul to Accelerate Progress,
                  Navigate Markets, and Ignite Innovation Beyond Imagination.
                </p>
              </TabPanel>
              <TabPanel>
                <Flex>
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
    </Box>
  );
}

export default About;
