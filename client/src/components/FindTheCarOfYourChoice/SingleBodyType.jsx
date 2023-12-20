import React from "react";
import { Text, SimpleGrid, Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SingleBodyType = ({ item }) => {
  const slug = item.bodyTypeSlug;
  return (
    <Box key={item._id}>
      <Link
        to={`/new/${item.bodyTypeSlug}/`}
        state={{ bodyType: `${item.title}` }}
      >
        <Flex
          key={item._id}
          border="1px"
          borderColor="gray.600"
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          {/* <Box boxSize={"md"} maxHeight={"14"} > */}
          <Image
            width={"20"}
            objectFit="contain"
            rounded="lg"
            src={item.image}
            alt={item.title}
            marginX={{ sm: 28, md: 16, lg: 10 }}
            marginY={"6"}
          />
          {/* </Box> */}
          <Box>
            <Text>{item.title}</Text>
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};

export default SingleBodyType;
