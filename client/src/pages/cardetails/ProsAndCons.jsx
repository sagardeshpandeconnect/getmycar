import { useTranslation } from "react-i18next";
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
import { useSelector } from "react-redux";

const ProsAndCons = ({ data }) => {
  const { t } = useTranslation();
  const currentLang = useSelector((state) => state.entities.language); // Get language from Redux store

  const carData = data[0];
  // Safely extract data using optional chaining
  const prosData =
    currentLang == "en"
      ? carData?.prosandcons?.[0]?.pros
      : carData?.prosandcons?.[0]?.pros_hindi;
  const consData =
    currentLang == "en"
      ? carData?.prosandcons?.[0]?.cons
      : carData?.prosandcons?.[0]?.cons_hindi;
  const title = currentLang == "en" ? carData?.title : carData?.title_hindi;
  // console.log(carData);

  return (
    <Box marginBottom={"8"}>
      {carData?.prosandcons.length > 0 ? (
        <Box>
          <HeadingText>{t("prosAndCons.title", { title })}</HeadingText>
          <Box padding="3" backgroundColor="var(--color-background)">
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
                    {t("prosAndCons.pros")}
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
                    {t("prosAndCons.cons")}
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
