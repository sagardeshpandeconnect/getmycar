import React from "react";
import {
  InputGroup,
  InputRightElement,
  Input,
  InputLeftElement,
  Box,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "../assets/Icons";

const HomePageSearchBar = () => {
  return (
    <Flex
      maxWidth="670px"
      width="100%"
      // marginInline={"auto"}
      position="absolute"
      top="280px"
      left="25%"
    >
      <select
        name="cars"
        id="cars"
        style={{ padding: 5, backgroundColor: "#e1e1e1", border: "none" }}
        defaultValue="new"
      >
        <option value="new">New</option>
        <option value="used">Used</option>
      </select>
      <InputGroup size="lg">
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          pr="4.5rem"
          type={"search"}
          placeholder="Type to select car name e.g. MG Comet EV"
          borderLeftRadius={0}
          backgroundColor={"white"}
        />

        <InputRightElement right="2.7em">
          <Box
            as="button"
            height="40px"
            size="md"
            bg="#e53012"
            color="#ffff"
            paddingLeft="40px"
            paddingRight="40px"
            borderRadius="3px"
          >
            Search
          </Box>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default HomePageSearchBar;
