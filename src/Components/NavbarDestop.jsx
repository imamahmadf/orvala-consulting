import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Container,
  Menu,
  MenuButton,
  MenuList,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  VStack,
  Center,
  Spacer,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { menu } from "../Constants";

function renderMenuMobile() {
  return menu.map((menu2, index) => {
    return (
      <AccordionItem key={index}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="center" ms={5}>
              {menu2.menuUtama}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {menu2.subMenu.map((val, idx) => {
            return (
              <Link to={val.link} key={idx}>
                <Button variant={"secondary"} w="100%">
                  {val.judul}
                </Button>
              </Link>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    );
  });
}
function renderMenu() {
  return menu.map((menu2, index) => {
    return (
      <Menu strategy="fixed" placement="bottom" key={index}>
        <MenuButton
          _hover={{ textDecoration: "underline" }}
          _expanded={{ textDecoration: "underline" }}
        >
          {menu2.menuUtama}
        </MenuButton>
        <MenuList borderRadius={"3px"} borderColor={"white"} mt={"20px"}>
          <Center gap={6} p={6}>
            {menu2.subMenu.map((val, idx) => {
              return (
                <Link to={val.link} key={idx}>
                  <VStack backgroundColor={"primary"} maxWidth={"250px"}>
                    <Image
                      src={val.foto}
                      width="100%"
                      height="120px"
                      overflow="hiden"
                      objectFit="cover"
                    />
                    <Text align={"center"} margin={3} width={"250px"}>
                      {val.judul}
                    </Text>
                  </VStack>
                </Link>
              );
            })}
          </Center>
        </MenuList>
      </Menu>
    );
  });
}

function NavbarDestop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Box
        display={{ ss: "none", sm: "none", sl: "inline" }}
        bg="white"
        pos="fixed"
        top="0"
        borderBottom="1px"
        borderColor="gray.200"
        w="100%"
        zIndex={10}
      >
        <Container maxW="1140px">
          <Flex w="100%" mx="auto">
            <Link to="/">
              <Image
                src="/Assets/LogoOrvalaAAA.png"
                my="12px"
                alt="turu-icon"
                height="58px"
              />
            </Link>
            <Spacer />
            <Flex fontWeight="bold" fontSize="18px" my="auto" mr="20px" gap={6}>
              {renderMenu()}
            </Flex>
            <Spacer />
            <HStack gap={6}>
              <Link to="contact">
                <Button maxW={"100px"} variant="primary">
                  Contact
                </Button>
              </Link>
              <InputGroup size="md" my="auto" maxWidth={"300px"}>
                <Input pr="4.5rem" placeholder="Search" borderRadius={"3px"} />
                <InputRightElement>
                  <Button colorScheme="gray" borderRadius={"3px"}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </InputRightElement>
              </InputGroup>
            </HStack>
          </Flex>
        </Container>
      </Box>
      {/* mobile */}
      <Box display={{ ss: "inline", sm: "inline", sl: "none" }}>
        <Flex justifyContent="space-between">
          <Link to="/">
            <Image
              src="/Assets/LogoOrvalaAAA.png"
              mx="10px"
              mt="10px"
              alt="turu-icon"
              height="40px"
            />
          </Link>
          <Button
            mt="10px"
            _hover={{ bg: "primary" }}
            borderRadius="0px"
            bg="white"
            _active={{
              bg: "white",
            }}
            onClick={onOpen}
            fontSize="18px"
          >
            <i className="fa-solid fa-bars"></i>
          </Button>

          <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px" py="auto">
                <Image
                  src="/Assets/LogoOrvalaAAA.png"
                  my="10px"
                  alt="turu-icon"
                  height="40px"
                />
                <DrawerCloseButton />
              </DrawerHeader>
              <DrawerBody>
                <Accordion defaultIndex={[0]}>{renderMenuMobile()}</Accordion>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
}

export default NavbarDestop;
