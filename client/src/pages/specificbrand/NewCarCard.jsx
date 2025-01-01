import {
  Stack,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "@utils/convertPrice";

const NewCarCard = ({ carData }) => {
  const { specifications, title, image, titleSlug } = carData;
  const { price } = specifications;

  const navigate = useNavigate();

  function navigateToDetails() {
    navigate(`${titleSlug}`);
  }

  return (
    <Stack
      spacing={{ base: 0, md: 3 }}
      direction={{ base: "column", md: "row" }}
      border={"1px solid"}
      borderColor={"gray.400"}
      padding={2}
      rounded="md"
    >
      <Flex>
        <Image
          rounded="md"
          width={{ base: "100%", md: "18rem" }}
          maxHeight={"12rem"}
          objectFit="cover"
          src={image}
          alt={title}
        />
      </Flex>
      <Stack
        direction={{ base: "row", md: "column" }}
        spacing={2}
        width="100%"
        marginTop={{ base: "5px ", sm: 0 }}
        alignItems={"center"}
      >
        <Box>
          <Heading as={"h2"} fontSize="large" fontWeight="bold">
            {title}
          </Heading>
          <Text fontSize="medium">Rs. {convertPrice(price)} Onward</Text>
        </Box>

        <Button
          variant="outline"
          width="10.5em"
          borderWidth="1px"
          borderColor="teal"
          color="teal"
          onClick={navigateToDetails}
        >
          Know More
        </Button>
      </Stack>
    </Stack>
  );
};

export default NewCarCard;
