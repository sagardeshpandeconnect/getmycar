import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  Button,
  Heading,
  Image,
  VStack,
  Box,
} from "@chakra-ui/react";

const ComparionCardChild = ({
  title,
  price,
  image,
  id,
  brandSlug,
  titleSlug,
}) => {
  console.log(title);
  return (
    <div>
      <Card boxShadow="none">
        <Image
          objectFit="contain"
          maxW={{ base: "150px" }}
          boxSize="100%"
          src={image}
          alt={title}
        />
        <CardBody>
          <Text fontSize="xs" color="GrayText">
            {title}
          </Text>
          <Text as="b">GLE</Text>
        </CardBody>
        <CardFooter marginTop={"-9"}>
          <Box>
            <Text fontSize="xs">Rs.{price} Lakh</Text>
            <Text fontSize="xs" color="GrayText">
              Onwards
            </Text>
          </Box>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ComparionCardChild;
