import { useAuth0 } from "@auth0/auth0-react";
import { Box, Image, Text, Flex, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const UsedCarCard = ({ car }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      p="6"
      maxW="sm"
      bg="white"
    >
      <Image
        src={car.picture}
        alt={car.name}
        objectFit="cover"
        borderRadius="md"
      />

      <VStack align="start" spacing="4" mt="4">
        <Text fontSize="2xl" fontWeight="bold">
          {car.name}
        </Text>
        <Text fontSize="xl" color="green.600" fontWeight="semibold">
          Price: ${car.price}
        </Text>
        <Text fontSize="md" color="gray.600">
          Brand: {car.brand}
        </Text>
        <Text fontSize="md" color="gray.600">
          Manufacturing : {car.month} {car.year}
        </Text>
        <Text fontSize="md" color="gray.600">
          Owner Type: {car.ownerType}
        </Text>
        <Text fontSize="md" color="gray.600">
          KM Driven: {car.kmDriven} km
        </Text>

        {car.photo && (
          <Flex mt="4" flexWrap="wrap" gap="2">
            {car.photo.map((url, index) => (
              <Image
                key={index}
                src={url}
                alt={`Additional photo ${index + 1}`}
                boxSize="100px"
                objectFit="cover"
                borderRadius="md"
              />
            ))}
          </Flex>
        )}
        {!isAuthenticated ? (
          <Button
            colorScheme="red"
            size="lg"
            paddingX={100}
            width={"100%"}
            onClick={() =>
              loginWithRedirect({
                redirectUri: `${window.location.origin}/used-cars`,
              })
            }
          >
            Get Seller Details
          </Button>
        ) : (
          <VStack align="start" spacing="4" mt="2">
            <Text fontSize="md" color="gray.600">
              Owner name: {car.name}
            </Text>
            <Text fontSize="md" color="gray.600">
              {car.mobile}
            </Text>
            <Text fontSize="md" color="gray.600">
              {car.email}
            </Text>
          </VStack>
        )}
      </VStack>
    </Box>
  );
};

export default UsedCarCard;
