import { useSelector } from "react-redux";
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
import HeadingText from "@components/ui/HeadingText";

const SectionList = ({ icon, title, items }) => (
  <GridItem w="100%" padding="3" bg="white">
    <Flex gap="2" alignItems="center">
      {icon}
      <Text fontSize="m" as="b" color="gray.700">
        {title}
      </Text>
    </Flex>
    <UnorderedList spacing={1} mt="2">
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </UnorderedList>
  </GridItem>
);

const ProsAndCons = ({ data }) => {
  const { t } = useTranslation();
  const currentLang = useSelector((state) => state.entities.language);

  const prosandcons = data?.prosandcons?.[0] || {};
  const title = currentLang === "en" ? data?.title : data?.title_hindi;
  const pros = currentLang === "en" ? prosandcons.pros : prosandcons.pros_hindi;
  const cons = currentLang === "en" ? prosandcons.cons : prosandcons.cons_hindi;

  if (!prosandcons || (!pros?.length && !cons?.length)) return null;

  return (
    <Box marginBottom="8">
      <HeadingText>{t("prosAndCons.title", { title })}</HeadingText>
      <Box padding="3" backgroundColor="var(--color-background)">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={6}
          mt="3"
        >
          {/* Pros Section */}
          <SectionList
            icon={<ThumbsUpIcon />}
            title={t("prosAndCons.pros")}
            items={pros || []}
          />

          {/* Cons Section */}
          <SectionList
            icon={<ThumbsDownIcon />}
            title={t("prosAndCons.cons")}
            items={cons || []}
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default ProsAndCons;
