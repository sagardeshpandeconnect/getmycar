import { forwardRef, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  Flex,
  InputGroup,
  Input,
  Box,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";

import useOnClickOutside from "@hooks/useOnClickOutside";
import { getData } from "@services/apiClient";
import SearchSuggestion from "./SearchSuggestion";
import { SearchIcon } from "@assets/Icons";

const SearchBar = forwardRef((props, ref) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCars, setSearchedCars] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const navigate = useNavigate();

  const clearSearchQuery = function () {
    setSearchQuery("");
  };

  const handleKeyDown = function (event) {
    const { key } = event;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % searchedCars.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount =
        (focusedIndex + searchedCars.length - 1) % searchedCars.length;

    // hide search results
    if (key === "Escape") {
      clearSearchQuery();
    }

    // select the current item

    if (key === "Enter") {
      event.preventDefault();
      goToDetailsPage();
      hideSearchBar();
      clearSearchQuery();
      console.log(
        `/${searchedCars[focusedIndex].brandSlug}/${searchedCars[focusedIndex].titleSlug}`
      );
    }

    setFocusedIndex(nextIndexCount);
  };

  const handleSearchQueryChange = function (event) {
    setSearchQuery(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      const responseData = await getData(`/search`, {
        params: {
          title: searchQuery,
        },
      });

      // Filter suggestions based on searchQuery
      const exactMatches = responseData.filter(
        (suggestion) =>
          suggestion.title.toLowerCase() === searchQuery.toLowerCase()
      );

      const otherMatches = responseData.filter(
        (suggestion) =>
          suggestion.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
          !exactMatches.includes(suggestion)
      );

      // Combine exact matches with other matches
      const filteredSuggestions = [...exactMatches, ...otherMatches];
      setSearchedCars(filteredSuggestions);

      // setSearchedCars(responseData);
      console.log(responseData);
    };
    if (searchQuery.length > 0) fetchSuggestions();
  }, [searchQuery]);

  useOnClickOutside(ref, clearSearchQuery);

  const goToDetailsPage = function () {
    navigate(
      `/${searchedCars[focusedIndex].brandSlug}/${searchedCars[focusedIndex].titleSlug}`
    );
  };

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: "center",
    });
  }, [focusedIndex]);

  // Destructure props to get additional props
  const { autoFocus, hideSearchBar } = props;

  return (
    <Stack backgroundColor={"white"}>
      <Box ref={ref}>
        <InputGroup>
          <Input
            autoFocus={autoFocus}
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            onKeyDown={handleKeyDown}
            _placeholder={{
              opacity: 1,
              color: "#B0B0B0",
              fontSize: "md",
            }}
            size={"lg"}
            htmlSize={24}
          />
          <InputRightElement marginTop={1}>
            <Box
              as="button"
              type="submit"
              border={"none"}
              onClick={() => {
                ref.current.focus();
              }}
            >
              <SearchIcon />
            </Box>
          </InputRightElement>
        </InputGroup>
        {searchQuery.length > 0 && (
          <Flex
            width={{ base: "100%", md: "100%", lg: "305px" }}
            direction={"column"}
            maxHeight={"56"}
            overflowY={"scroll"}
            position={"absolute"}
            top={"3.1em"}
            backgroundColor={"white"}
            scrollPaddingLeft={"1"}
          >
            {searchedCars.map((car, index) => {
              return (
                <Box
                  key={index}
                  ref={index === focusedIndex ? resultContainer : null}
                  backgroundColor={
                    index === focusedIndex ? "rgba(0,0,0,0.1)" : "white"
                  }
                >
                  <SearchSuggestion
                    result={car}
                    query={searchQuery}
                    onClick={() => {
                      navigate(`/${car.brandSlug}/${car.titleSlug}`);
                      hideSearchBar();
                      clearSearchQuery();
                    }}
                  />
                </Box>
              );
            })}
          </Flex>
        )}
      </Box>
    </Stack>
  );
});

export default SearchBar;
