import React, { Children } from "react";
import { Container } from "@chakra-ui/react";

const Wrapper = ({ children }) => {
  return <Container maxWidth={"5xl"}>{children}</Container>;
};

export default Wrapper;
