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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { postData } from "@services/apiClient";
import { useDispatch } from "react-redux";
import { login } from "@features/auth/authSlice";

export default function SignInModal({ isOpen, onClose }) {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(event.target);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      if (showSignInForm) {
        const response = await postData(`/auth/login`, { email, password });

        if (response.success) {
          toast({
            title: "Sign-in successful!",
            status: "success",
            duration: 2500,
          });
          dispatch(login(response.user));
          // onSignIn();
          onClose(); // Close modal on success
        } else {
          setError(response.message || "Sign-in failed. Please try again.");
        }
      } else {
        const response = await postData(`/auth/signup`, {
          username,
          email,
          password,
        });

        if (response.success) {
          toast({
            title: "Account created successfully!",
            status: "success",
            duration: 2500,
          });
          setShowSignInForm(true); // Switch to sign-in form
        } else {
          setError(response.message || "Sign-up failed. Please try again.");
        }
      }
    } catch (err) {
      console.error("Error during authentication:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => setShowSignInForm((prev) => !prev);

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {showSignInForm ? "Sign in to your account" : "Create a new account"}
        </ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleFormSubmit}>
          <ModalBody>
            {!showSignInForm && (
              <FormControl id="username" mb={4} isRequired>
                <FormLabel>Your Name</FormLabel>
                <Input type="text" name="username" placeholder="John Doe" />
              </FormControl>
            )}
            <FormControl id="email" mb={4} isRequired>
              <FormLabel>Your email</FormLabel>
              <Input type="email" name="email" placeholder="name@company.com" />
            </FormControl>
            <FormControl id="password" mb={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input type="password" name="password" placeholder="••••••••" />
            </FormControl>
            {showSignInForm && (
              <Flex justify="space-between" align="center" mb={4}>
                <Checkbox>Remember me</Checkbox>
                <Link href="#" fontSize="sm" color="blue.600">
                  Forgot password?
                </Link>
              </Flex>
            )}
            {error && (
              <Text color="red.500" mb={4}>
                {error}
              </Text>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              colorScheme="red"
              isLoading={loading}
              width="full"
            >
              {showSignInForm ? "Sign in" : "Sign up"}
            </Button>
            <Text fontSize="sm" mt={4} textAlign="center" width="full">
              {showSignInForm
                ? "Don’t have an account? "
                : "Already have an account? "}
              <Link color="blue.600" onClick={toggleForm}>
                {showSignInForm ? "Sign up" : "Sign in"}
              </Link>
            </Text>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
