import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { convertPrice } from "@utils/convertPrice";

const VCard = ({ title, price, image, detailsURL }) => {
  return (
    <Link to={detailsURL}>
      <Card
      // maxW="xs"
      >
        <CardBody backgroundColor={"#f9f9f9"} padding={"0"}>
          <Image
            src={image}
            alt="car"
            borderRadius="lg"
            fallbackSrc="https://res.cloudinary.com/dbrbokt4s/image/upload/v1703422248/carwale/carImages/fallback/fallback_nvmcds.jpg"
          />
          <Stack spacing="3" padding={"3"}>
            <Heading size="md">{title}</Heading>
            <Text>Rs. {convertPrice(price)} onward</Text>
            <Text color="blue.600" fontSize="sm">
              Avg.Ex-Showroom price
            </Text>
            <Text color="blue.600" fontSize="sm">
              Show price in my City
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default VCard;
