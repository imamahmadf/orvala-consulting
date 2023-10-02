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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function CardContent(props) {
  return (
    <>
      <Card>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" textAlign={"center"}>
              {props.data.judul}
            </Heading>
          </Stack>
          <Link>
            <Button mt={5} w={"100%"} variant="secondary">
              Read more ...
            </Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
}

export default CardContent;
