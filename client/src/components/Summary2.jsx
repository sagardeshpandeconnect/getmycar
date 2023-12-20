import { Container, Text } from "@chakra-ui/react";
import React from "react";
import ReactMarkdown from "react-markdown";
const Summary2 = ({ data }) => {
  return (
    <>
      <Text fontSize="2xl">{data?.attributes?.title} Summary</Text>
      <Text>
        <ReactMarkdown>{data?.attributes?.summary2}</ReactMarkdown>
      </Text>
    </>
  );
};

export default Summary2;
