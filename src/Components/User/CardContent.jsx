import React from "react";
import {
  Box,
  Flex,
  Text,
  Card,
  CardBody,
  Heading,
  CardFooter,
  Divider,
  Button,
  ButtonGroup,
  Stack,
  Image,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function CardContent(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <Card>
          <CardBody minHeight={"300px"}>
            <Image
              src={props.data.foto}
              alt="Green double couch with wooden legs"
              height="200px"
              overflow="hiden"
              objectFit="cover"
              borderRadius="5px"
              width={"100%"}
            />

            <Flex flexDirection={"column"}>
              <Box>
                <Heading size="md" mt={"20px"} textAlign={"center"}>
                  {props.data.judul}
                </Heading>
              </Box>

              <Spacer />

              <Button mt={5} mb={0} w={"100%"} variant="secondary">
                Read more ...
              </Button>
            </Flex>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default CardContent;
