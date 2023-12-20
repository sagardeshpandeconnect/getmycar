import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  InputGroup,
  Input,
  Box,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { SearchIcon } from "../../assets/Icons";
import useDebounce from "../../hooks/useDebounce";
import SearchSuggestionsList from "../SearchSuggestionsList";
import SearchSuggestion from "../SearchSuggestion";

const Search6 = () => {
  const [query, setQuery] = useState("");
  //   const [data, setData] = useState([]);
  const [searchedCar, setSearchedCar] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const navigate = useNavigate();
  const searchQuery = useDebounce(query, 400);

  const handleChange = (e) => setQuery(e.target.value.toLowerCase());

  const goToDetailsPage = () => {
    navigate(`/${searchedCar.brandSlug}/${searchedCar.titleSlug}`);
  };
  // console.log(navigate);

  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % searchedCar.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount =
        (focusedIndex + searchedCar.length - 1) % searchedCar.length;

    // hide search results
    if (key === "Escape") {
      clearQuery();
    }

    // select the current item
    if (key === "Enter") {
      e.preventDefault();
      // handleSelection(focusedIndex);
      goToDetailsPage();
    }

    setFocusedIndex(nextIndexCount);
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      const res = await axios.get(`http://localhost:3001/search`, {
        params: {
          title: query,
        },
      });
      console.log(res.data);

      // setData(res.data.data);
      //   setData(res.data);
      setSearchedCar(res.data);
    };
    if (query.length > 0) fetchSuggestions();
  }, [searchQuery]);

  const inputRef = useRef();

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  useEffect(() => {
    const mouseDownHandler = (e) => {
      if (!inputRef.current.contains(e.target)) {
        setQuery("");
      }
    };

    document.addEventListener("mousedown", mouseDownHandler);
  });

  const clearQuery = () => {
    setQuery("");
  };

  // const handleSelection = (selectedIndex) => {
  //   const selectedItem = searchedCar[selectedIndex];
  //   if (!selectedItem) return resetSearchComplete();
  //   // onSelect && onSelect(selectedItem);
  //   // resetSearchComplete();
  // };

  // const resetSearchComplete = useCallback(() => {
  //   setFocusedIndex(-1);
  //   // setShowResults(false);
  // }, []);

  return (
    <VStack ref={inputRef}>
      <Box tabIndex={1} onKeyDown={handleKeyDown}>
        {/* <form> */}
        <InputGroup>
          <Input
            type="search"
            placeholder="Search"
            value={query}
            onChange={handleChange}
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
        {/* </form> */}
        <div onClick={clearQuery}>
          {query.length > 0 && (
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
              {searchedCar.map((item, index) => {
                return (
                  <Box
                    key={index}
                    ref={index === focusedIndex ? resultContainer : null}
                    backgroundColor={
                      index === focusedIndex ? "rgba(0,0,0,0.1)" : "white"
                    }
                    // key={item._id}
                  >
                    <SearchSuggestion
                      result={item}
                      navigationLink={`/${item.brandSlug}/${item.titleSlug}`}
                      // key={item._id}
                    />
                  </Box>
                );
              })}
            </Flex>
          )}
        </div>
      </Box>
    </VStack>
  );
};

export default Search6;
