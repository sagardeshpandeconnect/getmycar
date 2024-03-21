import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Input,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ThumbsUpIcon, ThumbsDownIcon } from "../../assets/Icons";
import { v4 as uuid } from "uuid";

const ProsAndCons = ({ data }) => {
  const prosData = data[0].prosandcons[0].pros;
  const consData = data[0].prosandcons[0].cons;
  const title = data[0].title;

  return (
    <Box
      marginTop={"8"}
      padding={"3"}
      backgroundColor={"var(--color-background)"}
    >
      <Text fontSize="xl" as="b" color={"gray.700"}>
        How is the {title} car?
      </Text>
      <Grid
        // templateColumns="repeat(2, 1fr)"
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6}
        marginTop={"3"}
      >
        <GridItem w="100%" padding={"3"} bg="white">
          <Flex gap={"2"}>
            <ThumbsUpIcon />{" "}
            <Text fontSize="m" as="b" color={"gray.700"}>
              Pros
            </Text>
          </Flex>
          <UnorderedList spacing={1}>
            {prosData.map((pro) => (
              <ListItem key={uuid()}>{pro}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
        <GridItem w="100%" padding={"3"} bg="white">
          <Flex gap={"2"}>
            <ThumbsDownIcon />
            <Text fontSize="m" as="b" color={"gray.700"}>
              Cons
            </Text>
          </Flex>
          <UnorderedList spacing={1}>
            {consData.map((con) => (
              <ListItem key={uuid()}>{con}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default ProsAndCons;
