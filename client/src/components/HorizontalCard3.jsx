import {
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
  Box,
  Button,
} from "@chakra-ui/react";
import { Link as RouteLink } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

const HorizontalCard3 = ({
  title,
  price,
  img,
  id,
  brandSlug,
  titleSlug,
  clickHandler,
  buttonPlaceholder,
}) => {
  // const dispatch = useDispatch();
  // const clickHandler = (id) => {
  //   dispatch(add(id));
  // };
  console.log(titleSlug);
  return (
    <Box>
      {/* <Center py={6}> */}
      {/* <Link as={RouteLink} to={`/details/${id}`}> */}
      <Link as={RouteLink} to={`/${brandSlug}/${titleSlug}`}>
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
              ₹ {price} Lakh Onward
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
            {/* <Flex padding="px">
              <AiFillStar />
              <Box as="span">
                <Text fontSize="14px">3.9/ 5 | 9 Ratings</Text>
                <Button colorScheme="blue" size="sm" onClick={clickHandler}>
                  {buttonPlaceholder}
                </Button>
              </Box>
            </Flex> */}
          </Stack>
        </Stack>
      </Link>
      {/* </Center> */}
    </Box>
  );
};

export default HorizontalCard3;
