import React, { useEffect, useRef, useState } from "react";
import {
  Flex,
  Text,
  InputGroup,
  Input,
  Box,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { SearchIcon } from "../assets/Icons";
import SearchSuggestionsList from "./SearchSuggestionsList";

const Search4 = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await axios.get(
        `http://localhost:1337/api/cars?filters[title][$contains]=${query}&populate=*`
      );
      setData(res.data.data);
    };
    if (query.length > 0) fetchSuggestions();
  }, [query]);

  const inputRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handler);
  });
  const clearQuery = () => {
    setQuery("");
  };

  return (
    <VStack ref={inputRef}>
      <Box>
        <form>
          <InputGroup>
            <Input
              type="search"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              _placeholder={{
                opacity: 1,
                color: "#B0B0B0",
                fontSize: "md",
              }}
              size={"lg"}
              htmlSize={24}
            />
            <InputRightElement marginTop={1}>
              <Box as="button" type="submit" border={"none"}>
                <SearchIcon />
              </Box>
            </InputRightElement>
          </InputGroup>
        </form>
        <div onClick={clearQuery}>
          {query.length > 0 && <SearchSuggestionsList data={data} />}
        </div>
      </Box>
    </VStack>
  );
};

export default Search4;
