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
  Button,
  Collapse,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function tesNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <VStack>
      <Container
        maxW={"1140px"}
        bg="white"
        pos="fixed"
        top="0"
        borderBottom="1px"
        borderColor="gray.200"
        w="100%"
        zIndex={10}
        p={0}
      >
        <Button onClick={onToggle}>Toggle Menu</Button>
        {isOpen && (
          <Box
            position="absolute"
            top="100%"
            right="0"
            backgroundColor="white"
            border="1px solid #ccc"
            zIndex="1"
          >
            <Text>Item 1</Text>
            <Text>Item 2</Text>
            <Text>Item 3</Text>
          </Box>
        )}
      </Container>
    </VStack>
  );
}

export default tesNavbar;
