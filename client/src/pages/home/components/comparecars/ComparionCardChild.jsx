import { Card, CardBody, Text, CardFooter, Box, Image } from "@chakra-ui/react";
import { convertPrice } from "@utils/convertPrice";

const ComparionCardChild = ({ carData, price }) => {
  const { title, image } = carData;
  return (
    <Card boxShadow="none">
      <Image
        objectFit="covcr"
        // maxW={{ base: "150px" }}
        boxSize="100%"
        src={image}
        alt={title}
        width={"38"}
      />
      <CardBody>
        <Text fontSize="xs" color="GrayText">
          {title}
        </Text>
        <Text as="b">GLE</Text>
      </CardBody>
      <CardFooter marginTop={"-9"}>
        <Box>
          <Text fontSize="xs">Rs.{convertPrice(price)} </Text>
          <Text fontSize="xs" color="GrayText">
            Onwards
          </Text>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default ComparionCardChild;
