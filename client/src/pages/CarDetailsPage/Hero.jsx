import React from "react";
import {
  Grid,
  Box,
  Image,
  VStack,
  Text,
  Button,
  Heading,
} from "@chakra-ui/react";

const Hero = ({ data }) => {
  // Creating a date object
  const today = new Date();

  // Getting full month name (e.g. "June")
  const month = today.toLocaleString("default", { month: "long" });
  return (
    <div>
      <Heading as="h3" size="lg">
        {/* {title} */}
        {/* {data?.attributes?.title} */}
        {data[0].title}
      </Heading>
      <Grid
        templateColumns="repeat(2, 1fr)"
        border="1px"
        borderRadius={8}
        borderColor="gray.200"
      >
        <Box>
          <Image
            objectFit="contain"
            boxSize="100%"
            src={data[0].image}
            // src={
            //   import.meta.env.VITE_APP_UPLOAD_URL +
            //   data?.attributes?.image?.data[0]?.attributes?.formats?.small.url
            // }
            alt={data?.attributes?.title}
          />
        </Box>
        <Box>
          <VStack>
            <Text fontSize="2xl">Rs. {data?.attributes?.price} Lakh</Text>
            <Text color="#6F6F6F" fontSize="md">
              Avg. Ex-Showroom price
            </Text>

            <Button colorScheme="red" size="lg" paddingX={100}>
              Get {month} Offers
            </Button>
          </VStack>
        </Box>
      </Grid>
    </div>
  );
};

export default Hero;
