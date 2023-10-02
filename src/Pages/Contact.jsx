import React from "react";
import {
  Box,
  Flex,
  Text,
  Container,
  Input,
  HStack,
  Center,
  Textarea,
  Select,
  FormControl,
  Button,
  Image,
} from "@chakra-ui/react";

function Contact() {
  return (
    <Box backgroundColor={"background"}>
      <Container pt={"120px"} maxW="1140px">
        <Text fontSize={"40px"} fontWeight={700} mb={"30px"}>
          Get in touch with us.
        </Text>
        <Flex>
          <Box w="50em">
            <Flex
              mb={"20px"}
              flexDirection={{ ss: "column", sm: "column", sl: "row" }}
            >
              <HStack>
                <Text fontSize={"16px"} me="20px" width={"150px"}>
                  Full Name
                </Text>
              </HStack>
              <Input
                variant="outline"
                placeholder="e. g. Albert Wesker"
                backgroundColor={"white"}
              />
            </Flex>
            <Flex
              mb={"20px"}
              flexDirection={{ ss: "column", sm: "column", sl: "row" }}
            >
              <HStack>
                <Text fontSize={"16px"} me="20px" width={"150px"}>
                  Email
                </Text>
              </HStack>
              <Input
                variant="outline"
                placeholder="e. g. your@mail.com"
                backgroundColor={"white"}
              />
            </Flex>
            <Flex
              mb={"20px"}
              flexDirection={{ ss: "column", sm: "column", sl: "row" }}
            >
              <HStack>
                <Text fontSize={"16px"} me="20px" width={"150px"}>
                  WhatsUp Number
                </Text>
              </HStack>
              <Input
                variant="outline"
                placeholder="Outline"
                backgroundColor={"white"}
              />
            </Flex>
            <Flex
              mb={"20px"}
              flexDirection={{ ss: "column", sm: "column", sl: "row" }}
            >
              <HStack>
                <Text fontSize={"16px"} me="20px" width={"150px"}>
                  Type of Service
                </Text>
              </HStack>
              <FormControl>
                <Select placeholder="Please Select" backgroundColor={"white"}>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </FormControl>
            </Flex>
            <Flex
              mb={"20px"}
              flexDirection={{ ss: "column", sm: "column", sl: "row" }}
            >
              <Box>
                <Text fontSize={"16px"} me="20px" mb="5px" width={"150px"}>
                  Message
                </Text>
              </Box>
              <Box w={"100%"}>
                <FormControl>
                  <Textarea
                    id="rules"
                    height="180px"
                    placeholder="add rules"
                    backgroundColor={"white"}
                  />
                </FormControl>{" "}
                <Button w={"100%"} variant="primary" mt={"20px"}>
                  Submit
                </Button>
              </Box>
            </Flex>
          </Box>
          <Box
            w="50em"
            ms="20px"
            display={{ ss: "none", sm: "inline", sl: "inline" }}
          >
            <Image
              src="/Assets/contact.jpg"
              width="100%"
              height="420px"
              overflow="hiden"
              objectFit="cover"
              borderRadius={"5px"}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Contact;
