import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";
import React from "react";

const HorizontalCard4 = () => {
  return (
    <Flex border={"4px"}>
      <Box boxSize={"20"}>
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" />
      </Box>
      <Box>
        <Heading
          as="h3"
          color="#484848"
          _dark={{
            color: "white",
          }}
          fontWeight="400"
          fontSize="18px"
        >
          Maruti Swift
        </Heading>
        <Text
          mt={1}
          fontWeight="400"
          fontSize="13px"
          fontFamily="LatoGoogle, Lato, LatoWeb, sans-serif"
          color="#6F6F6F"
          _dark={{
            color: "gray.400",
          }}
        >
          20-22 kmpl | 89-99 bhp
        </Text>
        <Text
          mt={1}
          fontWeight="700"
          fontSize="16px"
          fontFamily="LatoGoogle, Lato, LatoWeb, sans-serif"
          color="#484848"
          _dark={{
            color: "gray.400",
          }}
        >
          ₹ 22 Lakh Onward
        </Text>
        <Text
          mt={1}
          fontWeight="400"
          fontSize="13px"
          fontFamily="LatoGoogle, Lato, LatoWeb, sans-serif"
          color="#6F6F6F"
          _dark={{
            color: "gray.400",
          }}
        >
          Avg.Ex-Showroom price
        </Text>
      </Box>
    </Flex>
  );
};

export default HorizontalCard4;
