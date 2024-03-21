import React from "react";
import { Text, Flex, Image, Box, Icon, Grid, GridItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const SingleBodyType = ({ bodytype }) => {
  const { bodyTypeSlug, title, image } = bodytype;
  return (
    <Link to={`/new/${bodyTypeSlug}/`} state={{ bodyType: `${title}` }}>
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
            marginX={"8"}
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
    </Link>
  );
};

export default SingleBodyType;
