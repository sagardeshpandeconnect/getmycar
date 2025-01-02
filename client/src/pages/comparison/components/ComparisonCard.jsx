import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { convertPrice } from "@utils/convertPrice";
import { MdClose } from "react-icons/md";

const ComparisonCard = ({ carData, price, handleRemove }) => {
  const { title, image, _id } = carData;
  return (
    <Flex alignItems="center" justifyContent="center">
      <Box bg="white" rounded="lg" border="1px solid #CBD5E0">
        <HStack position={"relative"}>
          <Image
            h={48}
            objectFit="contain"
            rounded="lg"
            src={image}
            alt={title}
          />
          <Icon
            as={MdClose}
            position={"absolute"}
            right={"1.5"}
            top={"1.5"}
            cursor={"pointer"}
            onClick={() => handleRemove(_id)}
          />
        </HStack>
        <Box px={4} py={2} bg="#f9f9f9" roundedBottom="md">
          <Heading as="h3" color="#484848" fontWeight="500" fontSize="16px">
            {title}
          </Heading>
          <Text
            mt={1}
            fontWeight="700"
            fontSize="15px"
            fontFamily="LatoGoogle, Lato, LatoWeb, sans-serif"
            color="#484848"
          >
            ₹ {convertPrice(price)} onward
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
