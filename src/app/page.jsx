"use client";

// components/LoginForm.js
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";

import { Formik, useFormik } from "formik";
import * as yup from "yup";

const LoginForm = () => {
  const toast = useToast();

  const registerUser = () => {
    alert("register successfully");
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: registerUser,
    validationSchema: yup.object().shape({
      username: yup.string().required("Username is required").min(3).max(10),
      email: yup.string().email().required("Email is required"),
      password: yup
        .string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
          "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        ),
    }),
  });

  const handleForm = (e) => {
    const { target } = e;
    formik.setFieldValue(target.name, target.value);
  };

  return (
    <Box maxW="md" mx="auto" mt={8}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={4}>
          <FormControl id="username">
            <FormLabel>Username</FormLabel>
            <Input onChange={handleForm} type="text" name="username" />
          </FormControl>

          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input onChange={handleForm} type="email" name="email" />
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input onChange={handleForm} type="password" name="password" />
          </FormControl>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
