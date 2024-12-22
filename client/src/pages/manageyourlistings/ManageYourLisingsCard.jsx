import {
  chakra,
  Box,
  Stack,
  Flex,
  Text,
  Image,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { FaTrash, FaEdit } from "react-icons/fa"; // Import trash and edit icons
import IconButton from "@components/IconButton";
import { Link as RouteLink } from "react-router-dom"; // Import RouteLink for internal links

const ManageYourLisingsCard = ({ carData, onDelete }) => {
  const {
    brand,
    price,
    year,
    month,
    name,
    email,
    mobile,
    updatedAt,
    picture,
    city,
    carName,
    ownerType,
    kmDriven,
    _id: carId,
  } = carData;

  const updatedOn = new Date(updatedAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(updatedOn);
  console.log(carId);

  return (
    <Stack
      spacing={{ base: 0, md: 4 }}
      direction={{ base: "column", md: "row" }}
      border="1px solid"
      borderColor="gray.400"
      padding={2}
      rounded="md"
      width={{ base: "auto", md: "2xl" }}
      overflow="hidden"
      position="relative"
    >
      {/* Image section */}
      <Flex alignItems={"center"}>
        <Image
          rounded="md"
          width={{ base: "100%", md: "18rem" }}
          maxHeight={"180px"}
          objectFit="cover"
          src={picture.url}
          alt="product image"
        />
      </Flex>

      {/* Content Section */}
      <Stack
        direction="column"
        spacing={2}
        width="100%"
        marginTop={{ base: "5px ", sm: 0 }}
      >
        <Flex justifyContent="space-between">
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            {brand} {carName}
          </chakra.h3>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            {price}
          </chakra.h3>
        </Flex>
        <Box>
          <Text fontSize="lg" fontWeight="500">
            {city}
          </Text>
        </Box>
        <Flex alignItems="center" color="gray.500">
          <Text fontSize={{ base: "sm", sm: "md" }}>
            Manufacturing : {month} {year}
          </Text>
        </Flex>
        <HStack alignItems="center" color="gray.500" spacing={3}>
          <Text fontSize={{ base: "sm", sm: "md" }}>{ownerType} Owner</Text>
          <Text fontSize={{ base: "sm", sm: "md" }}>
            km driven : {kmDriven}
          </Text>
        </HStack>
        <Stack
          direction={{ base: "column-reverse", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <Text fontSize="sm" marginTop={{ base: 1, sm: 0 }}>
            Updated on : {formattedDate}
          </Text>
        </Stack>

        {/* Buttons Section */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          justifyContent="space-evenly"
          alignItems={{ base: "center", sm: "center" }}
        >
          {/* Edit Listing Button */}
          <Stack direction="row" spacing={1} mb="0 !important">
            <RouteLink
              to={`/edit-used-car/${carId}`}
              style={{ textDecoration: "none" }}
            >
              <IconButton
                spacing={2}
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
                width="150px" // Equal width for both buttons
                padding="12px" // Increased padding for larger button size
                transition="all 0.3s ease" // Smooth transition
              >
                <Icon as={FaEdit} w={5} h={5} /> {/* Increased icon size */}
                <Text fontSize="sm">Edit Listing</Text>
              </IconButton>
            </RouteLink>
          </Stack>

          {/* Delete Listing Button */}
          <Stack direction="row" spacing={1} mb="0 !important">
            <IconButton
              spacing={2}
              bg="red.500"
              color="white"
              _hover={{ bg: "red.600" }}
              width="150px" // Equal width for both buttons
              padding="12px" // Increased padding for larger button size
              transition="all 0.3s ease" // Smooth transition
              onClick={() => onDelete(carId)}
            >
              <Icon as={FaTrash} w={5} h={5} /> {/* Increased icon size */}
              <Text fontSize="sm">Delete Listing</Text>
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ManageYourLisingsCard;
