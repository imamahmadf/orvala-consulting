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
  Alert,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
import emailjs from "@emailjs/browser";
import { Link, useHistory } from "react-router-dom";

function Contact() {
  const toast = useToast();
  const history = useHistory();
  YupPassword(Yup);
  //formik initialization
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      wa: "",
      typeService: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("can't be empty"),
      message: Yup.string().required("can't be empty"),
      typeService: Yup.number("input number").required(
        "required please input type number"
      ),
      wa: Yup.number("input number").required(
        "required please input type number"
      ),
      email: Yup.string()
        .required("required")
        .min(2, "To Short")
        .max(255, "To Long"),
    }),
    validateOnChange: false,
    // onSubmit: (values) => {
    //   alert(JSON.stringify(values, null, 2));
    // },
    onSubmit: async (values) => {
      console.log(values);
      const { fullName, email, wa, typeService, message } = values;
      console.log(fullName);
      emailjs
        .send(
          "service_pmisve7",
          "template_9w8mex4",
          {
            from_name: fullName,
            to_name: "Imam Ahamd Fahrurazi",
            from_email: email,
            to_email: "imamahmadfahrurazi@gmail.com",
            wa: wa,
            typeService: typeService,
            message: message,
          },
          "6yDfqM19u9Zcmo7Lg"
        )
        .then(
          () => {
            toast({
              title: "Message sent successfully",
              description:
                "Thank you. We will get back to you as soon as possible.",
              status: "success",
              position: "top",
              duration: 5000,
              isClosable: true,
            });

            setTimeout(() => {
              history.push("/");
            }, 2000);
          },
          (error) => {
            console.error(error);

            toast({
              title: "Message failed to send",
              description: "something went wrong. Please try again.",
              status: "eror",
              position: "top",
              duration: 9000,
              isClosable: true,
            });
          }
        );
    },
  });
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
              <FormControl>
                <Input
                  variant="outline"
                  placeholder="e. g. Albert Wesker"
                  backgroundColor={"white"}
                  onChange={(e) => {
                    formik.setFieldValue("fullName", e.target.value);
                  }}
                />
                {formik.errors.fullName ? (
                  <Alert status="error" color="red" text="center">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <Text ms="10px">{formik.errors.fullName}</Text>
                  </Alert>
                ) : null}
              </FormControl>
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
              <FormControl>
                <Input
                  variant="outline"
                  placeholder="e. g. your@mail.com"
                  backgroundColor={"white"}
                  onChange={(e) => {
                    console.log(e.target.value);
                    formik.setFieldValue("email", e.target.value);
                  }}
                />{" "}
                {formik.errors.email ? (
                  <Alert status="error" color="red" text="center">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <Text ms="10px">{formik.errors.email}</Text>
                  </Alert>
                ) : null}
              </FormControl>
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
              <FormControl>
                <Input
                  type="number"
                  variant="outline"
                  placeholder="Phone Number"
                  backgroundColor={"white"}
                  onChange={(e) => {
                    formik.setFieldValue("wa", e.target.value);
                  }}
                />{" "}
                {formik.errors.wa ? (
                  <Alert status="error" color="red" text="center">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <Text ms="10px">{formik.errors.wa}</Text>
                  </Alert>
                ) : null}
              </FormControl>
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
                <Select
                  placeholder="Please Select"
                  backgroundColor={"white"}
                  onChange={(e) => {
                    formik.setFieldValue("typeService", e.target.value);
                  }}
                >
                  <option value={0}>Option 1</option>
                  <option value={1}>Option 2</option>
                  <option value={2}>Option 3</option>
                </Select>
                {formik.errors.typeService ? (
                  <Alert status="error" color="red" text="center">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <Text ms="10px">{formik.errors.typeService}</Text>
                  </Alert>
                ) : null}
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
                    placeholder="Please fill in detailed information and question(s) in order to receive the most relevant response"
                    backgroundColor={"white"}
                    onChange={(e) => {
                      formik.setFieldValue("message", e.target.value);
                    }}
                  />
                  {formik.errors.message ? (
                    <Alert status="error" color="red" text="center">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <Text ms="10px">{formik.errors.message}</Text>
                    </Alert>
                  ) : null}
                </FormControl>
                <Button
                  w={"100%"}
                  variant="primary"
                  mt={"20px"}
                  onClick={formik.handleSubmit}
                >
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
