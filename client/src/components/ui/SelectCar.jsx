import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import selectCar from "../../assets/select-car.svg";
import SelectCarModal from "./SelectCarModal";

const SelectCar = (data) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        as="button"
        border={"1px"}
        borderColor="gray.200"
        borderRadius={"md"}
        height={"60"}
        onClick={onOpen}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Image src={selectCar} marginInline={"auto"} />
            <Text fontSize="1rem" color="messenger.400" textAlign={"center"}>
              Select Car
            </Text>
          </Box>
        </Flex>
      </Box>
      <SelectCarModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default SelectCar;
