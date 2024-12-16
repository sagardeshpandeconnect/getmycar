import React from "react";
import { chakra, Box, Stack, Flex, Text, Image, Icon } from "@chakra-ui/react";
import { BsTelephoneX } from "react-icons/bs";
import IconButton from "./IconButton";

const UsedCarCard = ({ data }) => {
  const { brand, price, year, month, updatedAt, picture } = data;
  return (
    <Stack
      spacing={{ base: 0, md: 4 }}
      direction={{ base: "column", md: "row" }}
      border="1px solid"
      borderColor="gray.400"
      p={2}
      rounded="md"
      w={{ base: "auto", md: "2xl" }}
      overflow="hidden"
      pos="relative"
    >
      <Flex ml="0 !important">
        <Image
          rounded="md"
          w={{ base: "100%", md: "18rem" }}
          h="auto"
          objectFit="cover"
          src={picture.url}
          alt="product image"
        />
      </Flex>
      <Stack
        direction="column"
        spacing={2}
        w="100%"
        mt={{ base: "5px !important", sm: 0 }}
      >
        <Flex justifyContent="space-between">
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            {brand}
          </chakra.h3>
          <chakra.h3 fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">
            {price}
          </chakra.h3>
        </Flex>
        <Box>
          <Text fontSize="lg" fontWeight="500">
            {/* {product.location} */}
          </Text>
        </Box>
        <Flex alignItems="center" color="gray.500">
          <Text fontSize={{ base: "sm", sm: "md" }}>
            Manufacturing : {month} {year}
          </Text>
        </Flex>
        <Stack
          direction={{ base: "column-reverse", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <Text fontSize="sm" mt={{ base: 1, sm: 0 }}>
            Updated {updatedAt}
          </Text>
          <Stack direction="row" spacing={1} mb="0 !important">
            <IconButton spacing={2} bg="green.500" color="white">
              <Icon as={BsTelephoneX} w={4} h={4} />
              <Text fontSize="sm">Show Phone no.</Text>
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default UsedCarCard;
