import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Text,
  InputGroup,
  Input,
  Box,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { SearchIcon } from "../assets/Icons";
import useFetch from "../hooks/useFetch";

const Search3 = ({ setResults }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    `http://localhost:1337/api/cars?filters[title][$contains]=${query}&populate=*`
  );

  const fetchSuggestions = (query) => {
    console.log(data);
    setResults(data);
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    fetchSuggestions(query);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setQuery("");
    if (query.trim().length !== 0)
      try {
        const response = await axios.get(
          `http://localhost:1337/api/cars?filters[title][$contains]=${query}&populate=*`
        );
        navigate("/search-results", { state: { results: response.data.data } });
      } catch (error) {
        console.error(error);
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <form> */}
        <InputGroup>
          <Input
            type="search"
            placeholder="Search"
            value={query}
            onChange={handleInputChange}
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
    </div>
  );
};

export default Search3;
