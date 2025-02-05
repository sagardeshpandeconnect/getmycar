import React from "react";
import {
  chakra,
  Box,
  Stack,
  Flex,
  Text,
  Image,
  Icon,
  HStack,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  useDisclosure,
} from "@chakra-ui/react";
import { FaUser, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import SignInModal from "./SignInModal";

const UsedCarCard = ({ data }) => {
  const {
    isOpen: isSignInOpen,
    onOpen: openSignIn,
    onClose: closeSignIn,
  } = useDisclosure();
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
  } = data;

  const updatedOn = new Date(updatedAt);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(updatedOn);

  const authStore = useSelector((state) => state.entities.auth);
  const isUserSignedIn = authStore.isUserSignedIn;

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
      <Flex marginLeft="0 ">
        <Image
          rounded="md"
          width={{ base: "100%", md: "18rem" }}
          maxHeight={"180px"}
          objectFit="cover"
          src={picture.url}
          alt="product image"
        />
      </Flex>
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
            Rs. {price}
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
            Listed / Updated on : {formattedDate}
          </Text>
          <Stack direction="row" spacing={1} marginBottom="0 ">
            {isUserSignedIn ? (
              <Popover placement="top">
                <PopoverTrigger>
                  <Button
                    size={"sm"}
                    backgroundColor="green.500"
                    color="white"
                    leftIcon={<Icon as={FaUser} width={4} height={4} />}
                    _hover={{ backgroundColor: "green.600" }}
                  >
                    Show Seller Details
                  </Button>
                </PopoverTrigger>

                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverBody backgroundColor={"green.100"} paddingTop={"2"}>
                    <Stack spacing={3}>
                      <Flex align="center">
                        <Icon
                          as={FaUser}
                          width={4}
                          height={4}
                          color="gray.700"
                        />
                        <Text
                          fontWeight="bold"
                          color="gray.700"
                          fontSize="md"
                          marginLeft={"2"}
                        >
                          Name:
                        </Text>
                        <Text marginLeft={2} color="gray.800">
                          {name}
                        </Text>
                      </Flex>
                      <Flex align="center">
                        <Icon
                          as={FaPhoneAlt}
                          width={4}
                          height={4}
                          color="gray.700"
                        />
                        <Text
                          fontWeight="bold"
                          color="gray.700"
                          fontSize="md"
                          marginLeft={2}
                        >
                          Mobile:
                        </Text>
                        <Text marginLeft={2} color="gray.800">
                          {mobile}
                        </Text>
                      </Flex>
                      <Flex align="center">
                        <Icon
                          as={FaEnvelope}
                          width={4}
                          height={4}
                          color="gray.700"
                        />
                        <Text
                          fontWeight="bold"
                          color="gray.700"
                          fontSize="md"
                          marginLeft={2}
                        >
                          Email:
                        </Text>
                        <Text marginLeft={2} color="gray.800">
                          {email}
                        </Text>
                      </Flex>
                    </Stack>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            ) : (
              <Box>
                <Button
                  size={"sm"}
                  backgroundColor="green.500"
                  color="white"
                  onClick={openSignIn}
                  leftIcon={<Icon as={FaUser} width={4} height={4} />}
                  _hover={{ backgroundColor: "green.600" }}
                >
                  Sign In to View Details
                </Button>

                <SignInModal
                  isOpen={isSignInOpen}
                  onClose={closeSignIn}
                  navigateTo="/used-cars"
                />
              </Box>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UsedCarCard;
