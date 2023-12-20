import React from "react";
import { Container, Flex } from "@chakra-ui/react";
import ComparionCardParent from "./ComparionCardParent";

const ComparisonComponent = () => {
  return (
    <Container maxWidth={"5xl"} border={"2px"}>
      <Flex margin={"auto"}>
        <ComparionCardParent />
        <ComparionCardParent />
        <ComparionCardParent />
      </Flex>
    </Container>
  );
};

export default ComparisonComponent;
