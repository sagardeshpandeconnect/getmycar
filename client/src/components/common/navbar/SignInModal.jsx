// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import {
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Checkbox,
//   Text,
//   Link,
//   useToast,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalBody,
//   ModalCloseButton,
//   ModalHeader,
// } from "@chakra-ui/react";
// import { postData } from "@services/apiClient";
// import { login } from "@features/auth/authSlice";
// import { useNavigate } from "react-router-dom";

// function SignInForm({ loading, error, toggleForm }) {
//   return (
//     <>
//       <ModalHeader>Sign in to your account</ModalHeader>
//       <FormControl id="email" mb={4} isRequired>
//         <FormLabel>Your email</FormLabel>
//         <Input type="email" name="email" placeholder="name@company.com" />
//       </FormControl>
//       <FormControl id="password" mb={4} isRequired>
//         <FormLabel>Password</FormLabel>
//         <Input type="password" name="password" placeholder="••••••••" />
//       </FormControl>
//       <Flex justify="space-between" align="center" mb={4}>
//         <Checkbox>Remember me</Checkbox>
//         <Link href="#" fontSize="sm" color="blue.600">
//           Forgot password?
//         </Link>
//       </Flex>
//       {error && (
//         <Text color="red.500" mb={4}>
//           {error}
//         </Text>
//       )}
//       <Flex direction="column" alignItems="center">
//         <Button
//           type="submit"
//           colorScheme="red"
//           isLoading={loading}
//           width="full"
//         >
//           Sign in
//         </Button>
//         <Text fontSize="sm" marginY={4} textAlign="center" width="full">
//           Don’t have an account?{" "}
//           <Link color="blue.600" onClick={toggleForm}>
//             Sign up
//           </Link>
//         </Text>
//       </Flex>
//     </>
//   );
// }

// function SignUpForm({ loading, error, toggleForm }) {
//   return (
//     <>
//       <ModalHeader>Create a new account</ModalHeader>
//       <FormControl id="username" mb={4} isRequired>
//         <FormLabel>Your Name</FormLabel>
//         <Input type="text" name="username" placeholder="John Doe" />
//       </FormControl>
//       <FormControl id="email" mb={4} isRequired>
//         <FormLabel>Your email</FormLabel>
//         <Input type="email" name="email" placeholder="name@company.com" />
//       </FormControl>
//       <FormControl id="password" mb={4} isRequired>
//         <FormLabel>Password</FormLabel>
//         <Input type="password" name="password" placeholder="••••••••" />
//       </FormControl>
//       {error && (
//         <Text color="red.500" mb={4}>
//           {error}
//         </Text>
//       )}
//       <Flex direction="column" alignItems="center">
//         <Button
//           type="submit"
//           colorScheme="red"
//           isLoading={loading}
//           width="full"
//         >
//           Sign up
//         </Button>
//         <Text fontSize="sm" marginY={4} textAlign="center" width="full">
//           Already have an account?{" "}
//           <Link color="blue.600" onClick={toggleForm}>
//             Sign in
//           </Link>
//         </Text>
//       </Flex>
//     </>
//   );
// }

// export default function SignInModal({ isOpen, onClose, navigateTo = "/" }) {
//   const [showSignInForm, setShowSignInForm] = useState(true);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const toast = useToast();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   console.log(navigateTo);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     const formData = new FormData(event.target);
//     const username = formData.get("username");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     try {
//       if (showSignInForm) {
//         const response = await postData(`/auth/login`, { email, password });
//         if (response.success) {
//           toast({
//             title: "Sign-in successful!",
//             status: "success",
//             duration: 2500,
//           });
//           dispatch(login(response.user));
//           // navigate(navigateTo);
//           onClose();
//           setTimeout(() => {
//             navigate(navigateTo || "/");
//           }, 500);
//         } else {
//           setError(response.message || "Sign-in failed. Please try again.");
//         }
//       } else {
//         const response = await postData(`/auth/signup`, {
//           username,
//           email,
//           password,
//         });
//         if (response.success) {
//           toast({
//             title: "Account created successfully!",
//             status: "success",
//             duration: 2500,
//           });
//           setShowSignInForm(true);
//         } else {
//           setError(response.message || "Sign-up failed. Please try again.");
//         }
//       }
//     } catch (err) {
//       console.error("Error during authentication:", err);
//       setError("An unexpected error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const toggleForm = () => setShowSignInForm((prev) => !prev);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onClose={onClose}
//       isCentered
//       size={{ base: "xs", md: "sm" }}
//     >
//       <ModalOverlay />
//       <ModalContent>
//         <ModalCloseButton />
//         <form onSubmit={handleFormSubmit}>
//           <ModalBody>
//             {showSignInForm ? (
//               <SignInForm
//                 loading={loading}
//                 error={error}
//                 toggleForm={toggleForm}
//               />
//             ) : (
//               <SignUpForm
//                 loading={loading}
//                 error={error}
//                 toggleForm={toggleForm}
//               />
//             )}
//           </ModalBody>
//         </form>
//       </ModalContent>
//     </Modal>
//   );
// }

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Text,
  Link,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from "@chakra-ui/react";
import { postData } from "@services/apiClient";
import { login } from "@features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function SignInForm({ loading, error, toggleForm }) {
  return (
    <>
      <ModalHeader>Sign in to your account</ModalHeader>
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
      <Flex direction="column" alignItems="center">
        <Button
          type="submit"
          colorScheme="red"
          isLoading={loading}
          width="full"
        >
          Sign in
        </Button>
        <Text fontSize="sm" marginY={4} textAlign="center" width="full">
          Don't have an account?{" "}
          <Link color="blue.600" onClick={toggleForm}>
            Sign up
          </Link>
        </Text>
      </Flex>
    </>
  );
}

function SignUpForm({ loading, error, toggleForm }) {
  return (
    <>
      <ModalHeader>Create a new account</ModalHeader>
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
      <Flex direction="column" alignItems="center">
        <Button
          type="submit"
          colorScheme="red"
          isLoading={loading}
          width="full"
        >
          Sign up
        </Button>
        <Text fontSize="sm" marginY={4} textAlign="center" width="full">
          Already have an account?{" "}
          <Link color="blue.600" onClick={toggleForm}>
            Sign in
          </Link>
        </Text>
      </Flex>
    </>
  );
}

export default function SignInModal({ isOpen, onClose, navigateTo }) {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Effect to handle navigation after successful login
  useEffect(() => {
    if (shouldNavigate && navigateTo) {
      navigate(navigateTo);
      setShouldNavigate(false);
    }
  }, [shouldNavigate, navigateTo, navigate]);

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
          onClose();
          // Trigger navigation after successful login
          setShouldNavigate(true);
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
          setShowSignInForm(true);
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
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: "xs", md: "sm" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <form onSubmit={handleFormSubmit}>
          <ModalBody>
            {showSignInForm ? (
              <SignInForm
                loading={loading}
                error={error}
                toggleForm={toggleForm}
              />
            ) : (
              <SignUpForm
                loading={loading}
                error={error}
                toggleForm={toggleForm}
              />
            )}
          </ModalBody>
        </form>
      </ModalContent>
    </Modal>
  );
}
