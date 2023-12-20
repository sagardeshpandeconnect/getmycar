import { Link } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";
import SearchSuggestion from "./SearchSuggestion";
import "./SearchSuggestionsList.css";
import { useState, useRef, useEffect } from "react";

const SearchSuggestionsList = ({ data, onSelect }) => {
  return (
    <Flex
      width="23%"
      direction={"column"}
      maxHeight={"56"}
      overflowY={"scroll"}
      position={"absolute"}
      top={"14"}
      zIndex={"overlay"}
      backgroundColor={"white"}
    >
      {data.map((item) => {
        return <SearchSuggestion result={item} key={item._id} />;
      })}
    </Flex>
  );
};

export default SearchSuggestionsList;
