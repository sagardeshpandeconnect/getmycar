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
import SearchSuggestion from "./SearchSuggestion";
import { getData } from "@services/apiClient";
import { SearchIcon } from "@assets/Icons";
import useDebounce from "@hooks/useDebounce";
import useOnClickOutside from "@hooks/useOnClickOutside";

const SearchBar = forwardRef((props, ref) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedCars, setSearchedCars] = useState([]);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const resultContainer = useRef(null);
  const navigate = useNavigate();

  // Use the useDebounce hook to debounce the searchQuery
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const clearSearchQuery = function () {
    setSearchQuery("");
  };

  const handleKeyDown = function (event) {
    const { key } = event;
    let nextIndexCount = 0;

    switch (key) {
      case "ArrowDown":
        // Move down
        nextIndexCount = (focusedIndex + 1) % searchedCars.length;
        break;

      case "ArrowUp":
        // Move up
        nextIndexCount =
          (focusedIndex + searchedCars.length - 1) % searchedCars.length;
        break;

      case "Escape":
        // Hide search results
        clearSearchQuery();
        break;

      case "Enter":
        // Select the current item
        event.preventDefault();
        goToDetailsPage();
        hideSearchBar();
        clearSearchQuery();
        console.log(
          `/${searchedCars[focusedIndex].brandSlug}/${searchedCars[focusedIndex].titleSlug}`
        );
        break;

      default:
        // Do nothing for other keys
        break;
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
          title: debouncedSearchQuery,
        },
      });

      // Filter suggestions based on debouncedSearchQuery
      const exactMatches = responseData.filter(
        (suggestion) =>
          suggestion.title.toLowerCase() === debouncedSearchQuery.toLowerCase()
      );

      const otherMatches = responseData.filter(
        (suggestion) =>
          suggestion.title
            .toLowerCase()
            .includes(debouncedSearchQuery.toLowerCase()) &&
          !exactMatches.includes(suggestion)
      );

      // Combine exact matches with other matches
      const filteredSuggestions = [...exactMatches, ...otherMatches];
      setSearchedCars(filteredSuggestions);

      console.log(responseData);
    };
    if (debouncedSearchQuery.length > 0) fetchSuggestions();
  }, [debouncedSearchQuery]); // Depend on debouncedSearchQuery instead of searchQuery

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
      <Box ref={ref} padding={{ base: 2, md: 0 }} marginY={{ base: 1, md: 0 }}>
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
        {debouncedSearchQuery.length > 0 && (
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
                    query={debouncedSearchQuery}
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
