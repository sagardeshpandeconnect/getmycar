import { Box, Text } from "@chakra-ui/react";
import React from "react";

const NavLinks = () => {
  const LINKS = [
    { name: "New Cars", id: 1 },
    { name: "Old Cars", id: 2 },
    { name: "Reviews & News", id: 3 },
  ];
  return (
    <>
      {LINKS.map((link, index) => {
        return (
          <Box pad cursor={"pointer"} key={index}>
            <Text paddingBottom={{ base: "10", md: "0" }}>{link.name}</Text>
          </Box>
        );
      })}
    </>
  );
};

export default NavLinks;
