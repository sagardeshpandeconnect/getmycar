import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
// import selectCar from "../../assets/select-car.svg";
import { SearchCarIcon } from "@assets/Icons";
// import SelectCarModal from "./SelectCarModal";

const SelectCar = ({ addData, newSlug }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(newSlug);
  return (
    <>
      <Box
        as="button"
        border={"1px"}
        borderColor="gray.200"
        borderRadius={"md"}
        height={"60"}
        onClick={onOpen}
        // width={"100%"}
        minWidth={"100%"}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Image src="SearchCarIcon" marginInline={"auto"} />
            <Text fontSize="1rem" color="messenger.400" textAlign={"center"}>
              Select Car
            </Text>
          </Box>
        </Flex>
      </Box>
      {/* <SelectCarModal
        isOpen={isOpen}
        onClose={onClose}
        addData={addData}
        newSlug={newSlug}
      /> */}
    </>
  );
};

export default SelectCar;
