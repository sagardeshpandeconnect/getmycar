import { Flex, Box, Heading, Text, Image } from "@chakra-ui/react";

const Card = ({ title, price, img }) => {
  return (
    <div>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
       
          // maxW="3xl"
          // mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          rounded="lg"
          border="1px solid #CBD5E0"
        >
          <Image
            h={48}
            w="md"
            objectFit="cover"
            rounded="lg"
            src={img}
            alt={title}
          />
          <Box px={4} py={2} bg="#f9f9f9" roundedBottom="md">
            <Heading
              as="h3"
              color="#484848"
              _dark={{
                color: "white",
              }}
              fontWeight="500"
              fontSize="16px"
            >
              {title}
            </Heading>
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
              ₹ {price} Lakh onward
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
            <Text
              mt={1}
              fontWeight="500"
              fontSize="14px"
              fontFamily="LatoGoogle, Lato, LatoWeb, sans-serif"
              color="#0288D1"
              _dark={{
                color: "gray.400",
              }}
            >
              Show price in my city
            </Text>
          </Box>
        </Box>
      </Flex>
      ;
    </div>
  );
};

export default Card;
