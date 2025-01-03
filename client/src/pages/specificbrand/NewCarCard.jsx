import {
  Stack,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  Box,
  Grid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { convertPrice } from "@utils/convertPrice";
import { Link } from "react-router-dom";

const NewCarCard = ({ carData }) => {
  const { specifications, title, image, titleSlug, brandSlug } = carData;
  const { price } = specifications;

  const navigate = useNavigate();

  function navigateToDetails() {
    navigate(`${titleSlug}`);
  }

  return (
    // <Stack
    //   spacing={{ base: 0, md: 3 }}
    //   direction={{ base: "column", md: "row" }}
    //   border={"1px solid"}
    //   borderColor={"gray.400"}
    //   padding={2}
    //   rounded="md"
    // >
    //   <Flex>
    //     <Image
    //       rounded="md"
    //       width={{ base: "100%", md: "18rem" }}
    //       maxHeight={"12rem"}
    //       objectFit="cover"
    //       src={image}
    //       alt={title}
    //     />
    //   </Flex>
    //   <Stack
    //     direction={{ base: "row", md: "column" }}
    //     spacing={2}
    //     width="100%"
    //     marginTop={{ base: "5px ", sm: 0 }}
    //     alignItems={"center"}
    //   >
    //     <Box>
    //       <Heading as={"h2"} fontSize="large" fontWeight="bold">
    //         {title}
    //       </Heading>
    //       <Text fontSize="medium">Rs. {convertPrice(price)} Onward</Text>
    //     </Box>

    //     <Button
    //       variant="outline"
    //       width="10.5em"
    //       borderWidth="1px"
    //       borderColor="teal"
    //       color="teal"
    //       onClick={navigateToDetails}
    //     >
    //       Know More
    //     </Button>
    //   </Stack>
    // </Stack>

    <Link to={`/${brandSlug}/${titleSlug}`}>
      <Grid
        templateColumns="repeat(2, 1fr)"
        alignItems={"center"}
        border={"var(--grid-border)"}
        borderRadius={"8"}
        boxShadow={"2xl"}
        padding={"4"}
        gap={"6"}
        margin={"4"}
      >
        <Image objectFit="contain" src={image} alt={title} />
        <Flex direction={"column"} gap={"3"}>
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

          <Text mt={1} fontWeight="700" fontSize="16px" color="#484848">
            Rs. {convertPrice(price)} Onward
          </Text>
          <Text mt={1} fontWeight="400" fontSize="13px" color="#6F6F6F">
            Avg.Ex-Showroom price
          </Text>
          <Button
            colorScheme="red"
            size="lg"
            width={{ base: "100%", md: "90%" }}
          >
            Get Offers
          </Button>
        </Flex>
      </Grid>
    </Link>
  );
};

export default NewCarCard;
