import { Link } from "react-router-dom";
import { Flex, Text, Image, Button, Heading, Grid } from "@chakra-ui/react";
import { convertPrice } from "@utils/convertPrice";

const NewCarCard = ({ carData }) => {
  const { specifications, title, image, titleSlug, brandSlug } = carData;
  const { price } = specifications;

  return (
    <Link to={`/${brandSlug}/${titleSlug}`}>
      <Grid
        templateColumns="repeat(2, 1fr)"
        alignItems={"center"}
        border={"var(--grid-border)"}
        borderRadius={"8"}
        padding={"4"}
        gap={"6"}
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
