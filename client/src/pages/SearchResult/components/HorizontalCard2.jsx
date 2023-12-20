import {
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { BsFillStarFill } from "react-icons/Bs";

const HorizontalCard2 = ({ title, price, img }) => {
  return (
    <Center py={6}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "670px" }}
        // height={{ sm: "476px", md: "20rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1}>
          <Image objectFit="contain" boxSize="100%" src={img} alt={title} />
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          // justifyContent="start"
          // alignItems="center"
          p={1}
          pt={2}
        >
          <Heading
            as="h3"
            color="#484848"
            _dark={{
              color: "white",
            }}
            fontWeight="400"
            fontSize="18px"
          >
            {title}
          </Heading>
          <Text
            mt={1}
            fontWeight="400"
            fontSize="13px"
            font-family="LatoGoogle, Lato, LatoWeb, sans-serif"
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
            font-family="LatoGoogle, Lato, LatoWeb, sans-serif"
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
            font-family="LatoGoogle, Lato, LatoWeb, sans-serif"
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
            font-family="LatoGoogle, Lato, LatoWeb, sans-serif"
            color="#0288D1"
            _dark={{
              color: "gray.400",
            }}
          >
            Get Best Offer
          </Text>
        </Stack>
        <Stack
          flex={1}
          flexDirection="row"
          justifyContent="end"
          alignItems="start"
          p={1}
          pt={2}
        >
          <Flex padding="px">
            <BsFillStarFill />
            <Box as="span">
              <Text fontSize="14px">3.9/ 5 | 9 Ratings</Text>
            </Box>
          </Flex>
        </Stack>
      </Stack>
    </Center>
  );
};

export default HorizontalCard2;
