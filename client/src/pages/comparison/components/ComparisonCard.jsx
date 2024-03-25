import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Icon,
  Button,
} from "@chakra-ui/react";
import { MdClose } from "react-icons/md";
import { removeFromComparison } from "@features/comparison/comparisonSlice";

const ComparisonCard = ({ title, price, img, handleRemove, carId }) => {
  return (
    <Flex
      // p={5}

      // w="full"
      alignItems="center"
      justifyContent="center"
    >
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
        <HStack position={"relative"}>
          <Image
            h={48}
            // w="md"
            objectFit="contain"
            rounded="lg"
            src={img}
            alt={title}
          />
          <Icon
            as={MdClose}
            position={"absolute"}
            right={"1.5"}
            top={"1.5"}
            cursor={"pointer"}
            // onClick={() => handleRemove(carId)}
            onClick={() => handleRemove(carId)}
          />
        </HStack>
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
  );
};

export default ComparisonCard;
