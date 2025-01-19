import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
} from "@chakra-ui/react";

import notfound from "@assets/notfound.png";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      h="100vh"
      p={4}
    >
      {/* Left Column */}
      <VStack
        spacing={6}
        align={{ base: "center", md: "flex-start" }}
        justify={{ base: "center", md: "flex-start" }}
        textAlign={{ base: "center", md: "left" }}
        maxW="lg"
        mt={{ base: "20", md: "0" }}
      >
        <Heading size="2xl">404 - Page Not Found</Heading>
        <Text fontSize="lg" color="gray.600">
          The page you are looking for doesn't exist or has been moved.
        </Text>

        <Button
          colorScheme="red"
          size="lg"
          paddingX={"20"}
          onClick={() => navigate("/")}
        >
          Back to Home
        </Button>
      </VStack>

      {/* Right Column */}
      <Box w={{ base: "full", md: "50%" }} ml={{ md: 8 }}>
        <Image
          src={notfound}
          alt="404 illustration"
          objectFit="cover"
          w="100%"
          h="auto"
        />
      </Box>
    </Flex>
  );
};

export default NotFoundPage;
