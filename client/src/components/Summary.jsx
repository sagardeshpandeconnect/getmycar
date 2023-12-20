import { Container, Text } from "@chakra-ui/react";
import React from "react";

const Summary = ({ data }) => {
  return (
    <>
      <Text fontSize="2xl">{data?.attributes?.title} Summary</Text>
      <Text>{data?.attributes?.summary}</Text>
    </>
  );
};

export default Summary;
