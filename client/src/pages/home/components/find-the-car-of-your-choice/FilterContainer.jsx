import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Grid, GridItem, Image, Icon, Text, Box } from "@chakra-ui/react";

const FilterContainer = ({ itemData }) => {
  const { title, image } = itemData;
  return (
    <Grid
      templateColumns="repeat(5, 1fr)"
      borderRight={"var(--grid-border)"}
      borderBottom={"var(--grid-border)"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"24"}
      gap={"4"}
      backgroundColor={"var(--color-background)"}
    >
      <GridItem colSpan={2}>
        <Image
          width={"20"}
          objectFit="contain"
          rounded="lg"
          src={image}
          alt={title}
          marginX={{ sm: 28, md: 16, lg: 10 }}
          // marginY={"6"}
        />
      </GridItem>

      <GridItem colSpan={2}>
        <Text whiteSpace={"nowrap"}>{title}</Text>
      </GridItem>
      <GridItem>
        <Box>
          <Icon as={BsChevronRight} />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default FilterContainer;
