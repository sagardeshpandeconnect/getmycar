import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { ThumbsUpIcon, ThumbsDownIcon } from "@assets/Icons";
import { v4 as uuid } from "uuid";
import HeadingText from "@components/HeadingText";

const ProsAndCons = ({ data }) => {
  // Safely extract data using optional chaining
  const prosData = data?.[0]?.prosandcons?.[0]?.pros || [];
  const consData = data?.[0]?.prosandcons?.[0]?.cons || [];
  const title = data?.[0]?.title || "Unknown";
  console.log(data);

  return (
    <Box marginBottom={"8"}>
      {data?.[0]?.prosandcons.length > 0 ? (
        <Box>
          <HeadingText>{data[0].title} Pcros and Cons</HeadingText>
          <Box padding="3" backgroundColor="var(--color-background)">
            <Text fontSize="xl" as="b" color="gray.700">
              How is the {title} car?
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(2, 1fr)",
              }}
              gap={6}
              marginTop="3"
            >
              {/* Pros Section */}
              <GridItem w="100%" padding="3" bg="white">
                <Flex gap="2">
                  <ThumbsUpIcon />
                  <Text fontSize="m" as="b" color="gray.700">
                    Pros
                  </Text>
                </Flex>
                <UnorderedList spacing={1}>
                  {prosData.map((pro) => (
                    <ListItem key={uuid()}>{pro}</ListItem>
                  ))}
                </UnorderedList>
              </GridItem>

              {/* Cons Section */}
              <GridItem w="100%" padding="3" bg="white">
                <Flex gap="2">
                  <ThumbsDownIcon />
                  <Text fontSize="m" as="b" color="gray.700">
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
        </Box>
      ) : null}
    </Box>
  );
};

export default ProsAndCons;
