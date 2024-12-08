import { Link } from "react-router-dom";
import { Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";
import { convertPrice } from "@utils/convertPrice";

const HorizontalCard = ({ carData, price }) => {
  const { title, image, brandSlug, titleSlug } = carData;

  return (
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
          <Text
            mt={1}
            fontWeight="400"
            fontSize="13px"
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
            color="#484848"
            _dark={{
              color: "gray.400",
            }}
          >
            Rs. {convertPrice(price)} Onward
          </Text>
          <Text
            mt={1}
            fontWeight="400"
            fontSize="13px"
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
            color="#0288D1"
            _dark={{
              color: "gray.400",
            }}
          >
            Get Best Offer
          </Text>
        </Flex>
      </Grid>
    </Link>
  );
};

export default HorizontalCard;
