import {
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Button,
  Checkbox,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { postData } from "@services/apiClient";

export default function SignIn({ onSignIn }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const signupRef = useRef(null);
  const toast = useToast();

  const scrollToSignUp = () => {
    if (signupRef.current) {
      signupRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      if (isSignIn) {
        // Send login details to the server
        const response = await postData(`/auth/login`, { email, password });
        console.log(response);

        if (response.success) {
          toast({
            title: "Sign-in successful!",
            status: "success",
            duration: 3000,
          });
          onSignIn();
        } else {
          setError(response.message || "Sign-in failed. Please try again.");
        }
      } else {
        // Registration logic here
        const response = await postData(`/auth/signup`, {
          email,
          password,
          username,
        });

        if (response.success) {
          toast({
            title: "Account created successfully!",
            status: "success",
            duration: 3000,
          });
          setIsSignIn(true); // Switch to sign-in form
        } else {
          setError(response.message || "Sign-up failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error during authentication:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLinkClick = (event, action) => {
    event.preventDefault();
    action();
  };

  return (
    <Flex direction="column" align="center" justify="center">
      {isSignIn ? (
        <Flex
          flexDirection={"column"}
          paddingX={"8"}
          paddingY={"12"}
          bg="white"
          borderRadius="lg"
        >
          <Heading
            fontSize={"1.75rem"}
            fontWeight="bold"
            mb={6}
            textAlign="center"
            color="gray.900"
          >
            Sign in to your account
          </Heading>
          <form onSubmit={handleFormSubmit}>
            <FormControl id="email" mb={4} isRequired>
              <FormLabel>Your email</FormLabel>
              <Input type="email" name="email" placeholder="name@company.com" />
            </FormControl>
            <FormControl id="password" mb={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" placeholder="••••••••" />
            </FormControl>
            <Flex justify="space-between" align="center" mb={4}>
              <Checkbox>Remember me</Checkbox>
              <Link href="#" fontSize="sm" color="blue.600">
                Forgot password?
              </Link>
            </Flex>
            {error && (
              <Text color="red.500" mb={4}>
                {error}
              </Text>
            )}
            <Button
              type="submit"
              colorScheme="red"
              isLoading={loading}
              width="full"
            >
              Sign in
            </Button>
            <Text fontSize="sm" mt={4} textAlign="center">
              Don’t have an account?{" "}
              <Link
                href="#"
                color="blue.600"
                onClick={(e) =>
                  handleLinkClick(e, () => {
                    setIsSignIn(false);
                    scrollToSignUp();
                  })
                }
              >
                Sign up
              </Link>
            </Text>
          </form>
        </Flex>
      ) : (
        <Flex
          flexDirection={"column"}
          paddingX={"8"}
          paddingY={"12"}
          bg="white"
          borderRadius="lg"
          ref={signupRef}
        >
          <Heading fontWeight="bold" fontSize={"1.75rem"} mb={6}>
            Create a new account
          </Heading>
          <form onSubmit={handleFormSubmit}>
            <FormControl id="username" mb={4} isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" name="username" placeholder="John Doe" />
            </FormControl>
            <FormControl id="email" mb={4} isRequired>
              <FormLabel>Your email</FormLabel>
              <Input type="email" name="email" placeholder="name@company.com" />
            </FormControl>
            <FormControl id="password" mb={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" placeholder="••••••••" />
            </FormControl>
            {error && (
              <Text color="red.500" mb={4}>
                {error}
              </Text>
            )}
            <Button
              type="submit"
              colorScheme="red"
              isLoading={loading}
              width="full"
            >
              Sign up
            </Button>
            <Text fontSize="sm" mt={4} textAlign="center">
              Already have an account?{" "}
              <Link
                href="#"
                color="blue.600"
                onClick={(e) =>
                  handleLinkClick(e, () => {
                    setIsSignIn(true);
                  })
                }
              >
                Sign in
              </Link>
            </Text>
          </form>
        </Flex>
      )}
    </Flex>
  );
}
