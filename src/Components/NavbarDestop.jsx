import React, { useEffect } from "react";
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
  MenuItem,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import { menu } from "../Constants";
import { useDispatch, useSelector } from "react-redux";
import lang_types from "../Redux/Reducers/Types/langTypes";

function renderMenuMobile() {
  const dispatch = useDispatch();
  const { lang, dataLang } = useSelector((state) => state.lang);
  const history = useHistory();
  useEffect(() => {
    // console.log(dataLang);
    dispatch({
      type: lang_types.Lang,
      payload: {
        lang: "EN",
      },
    });
  }, []);
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
              <Button
                variant={"secondary"}
                w="100%"
                onClick={() => history.push(val.link)}
              >
                {val.judul}
              </Button>
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
          _hover={{ fontWeight: "700" }}
          _expanded={{ fontWeight: "700" }}
        >
          {menu2.menuUtama}
        </MenuButton>
        <MenuList borderRadius={"3px"} borderColor={"white"} mt={"20px"}>
          <MenuItem
            bg="white"
            _hover={{
              bg: "white",
            }}
          >
            <Center gap={6} p={6}>
              {menu2.subMenu.map((val, idx) => {
                return (
                  <Link to={val.link} key={idx}>
                    <VStack
                      backgroundColor={"primary"}
                      maxWidth={"250px"}
                      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                      _hover={{
                        bg: "black",
                        color: "white",
                      }}
                    >
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
          </MenuItem>
        </MenuList>
      </Menu>
    );
  });
}

function NavbarDestop() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const history = useHistory();

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
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </Button>
                </InputRightElement>
              </InputGroup>
            </HStack>
          </Flex>
        </Container>
      </Box>
      {/* mobile */}
      <Box
        display={{ ss: "inline", sm: "inline", sl: "none" }}
        bg="white"
        p="10px"
        pos="fixed"
        top="0"
        w="100%"
        zIndex={10}
        boxShadow="base"
      >
        <Flex justifyContent="space-between" bg={"white"}>
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
                <Accordion>
                  {menu.map((menu2, index) => {
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
                              <Button
                                variant={"secondary"}
                                w="100%"
                                borderColor={"white"}
                                onClick={() => {
                                  history.push(val.link);
                                  onClose();
                                }}
                                onClose={onClose}
                              >
                                {val.judul}
                              </Button>
                            );
                          })}
                        </AccordionPanel>
                      </AccordionItem>
                    );
                  })}
                </Accordion>{" "}
                <Button
                  onClick={() => {
                    history.push("/contact");
                    onClose();
                  }}
                  w={"100%"}
                  variant="primary"
                  mt={"20px"}
                >
                  Contact
                </Button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Box>
    </>
  );
}

export default NavbarDestop;
