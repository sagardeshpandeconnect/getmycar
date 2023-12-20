import React, { useState, useEffect, useRef } from "react";
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
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { SearchIcon } from "../../assets/Icons";
import axios from "axios";
import useDebounce from "../../hooks/useDebounce";
import SearchSuggestion from "../SearchSuggestion";
import SelectCarModalAccordion from "./SelectCarModalAccordion";
import SearchSuggestion2 from "../SearchSuggestion2";

const SelectCarModal = ({ isOpen, onClose }) => {
  const inputRef = useRef();

  const [query, setQuery] = useState("");
  const [searchedCar, setSearchedCar] = useState([]);
  const searchQuery = useDebounce(query, 400);
  const handleChange = (e) => setQuery(e.target.value.toLowerCase());

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

  // useEffect(() => {
  //   const mouseDownHandler = (e) => {
  //     if (!inputRef.current.contains(e.target)) {
  //       setQuery("");
  //     }
  //   };

  //   document.addEventListener("mousedown", mouseDownHandler);
  // });

  const clearQuery = () => {
    setQuery("");
  };

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
            />
            <InputLeftElement marginTop={1}>
              <Box as="button" type="submit" border={"none"}>
                <SearchIcon />
              </Box>
            </InputLeftElement>
          </InputGroup>
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
                      // ref={index === focusedIndex ? resultContainer : null}
                      // backgroundColor={
                      //   index === focusedIndex ? "rgba(0,0,0,0.1)" : "white"
                      // }
                      // key={item._id}
                    >
                      <SearchSuggestion2
                        result={item}
                        // key={item._id}
                      />
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
            <SelectCarModalAccordion />
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
