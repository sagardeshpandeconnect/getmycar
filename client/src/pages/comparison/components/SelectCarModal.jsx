import { useState, useEffect, useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  InputGroup,
  Input,
  Box,
  InputLeftElement,
  Text,
  Flex,
} from "@chakra-ui/react";
import { SearchIcon } from "@assets/Icons";
import { getData } from "@services/apiClient";
import useDebounce from "@hooks/useDebounce";
import useOnClickOutside from "@hooks/useOnClickOutside";
import SelectCarModalAccordion from "./SelectCarModalAccordion";
import ComparisonSearchSuggestion from "./ComparisonSearchSuggestion";

const SelectCarModal = ({ isOpen, onClose }) => {
  const inputRef = useRef();

  const [query, setQuery] = useState("");
  const [searchedCar, setSearchedCar] = useState([]);
  const searchQuery = useDebounce(query, 400);
  const handleChange = (e) => setQuery(e.target.value.toLowerCase());

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
      setSearchedCar(filteredSuggestions);

      // setSearchedCars(responseData);
      console.log(responseData);
    };
    if (searchQuery.length > 0) fetchSuggestions();
  }, [searchQuery]);

  const clearQuery = () => {
    setQuery("");
  };
  useOnClickOutside(inputRef, clearQuery);

  return (
    <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Your Brand or Model</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InputGroup>
            <Input
              type="search"
              placeholder="Type to Select Brand or Model"
              value={query}
              onChange={handleChange}
              _placeholder={{
                opacity: 1,
                color: "#B0B0B0",
                fontSize: "md",
              }}
              size={"lg"}
              htmlSize={24}
              autoFocus
            />
            <InputLeftElement marginTop={1}>
              <Box as="button" type="submit" border={"none"}>
                <SearchIcon />
              </Box>
            </InputLeftElement>
          </InputGroup>
          <div onClick={clearQuery} ref={inputRef}>
            {query.length > 0 && (
              <Flex
                width="92%"
                direction={"column"}
                maxHeight={"56"}
                overflowY={"scroll"}
                position={"absolute"}
                scrollBehavior={"auto"}
                top={"32"}
                zIndex={"overlay"}
                backgroundColor={"white"}
              >
                {searchedCar.map((item, index) => {
                  return (
                    <Box key={index}>
                      <ComparisonSearchSuggestion result={item} />
                    </Box>
                  );
                })}
              </Flex>
            )}
          </div>
          <Box>
            <Text
              textTransform={"uppercase"}
              color="#afafaf"
              fontSize={"x-small"}
              marginTop={"4"}
            >
              Popular Brands
            </Text>
            <SelectCarModalAccordion onClose={onClose} />
          </Box>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SelectCarModal;
