import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import SelectCarIcon from "@assets/select-car.svg";
import SelectCarModal from "./SelectCarModal";

const SelectCar = ({ addData }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // console.log(newSlug);
  return (
    <>
      <Box
        as="button"
        border={"1px"}
        borderColor="gray.200"
        borderRadius={"md"}
        onClick={onOpen}
        // width={"100%"}
        minWidth={"100%"}
        minHeight={"72"}
      >
        <Flex justifyContent={"center"} alignItems={"center"}>
          <Box>
            <Image src={SelectCarIcon} marginInline={"auto"} />
            <Text fontSize="1rem" color="messenger.400" textAlign={"center"}>
              Select Car
            </Text>
          </Box>
        </Flex>
      </Box>
      <SelectCarModal
        isOpen={isOpen}
        onClose={onClose}
        addData={addData}
        // newSlug={newSlug}
      />
    </>
  );
};

export default SelectCar;
