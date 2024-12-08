import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import {
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Image,
  useDisclosure,
} from "@chakra-ui/react";

import { getData } from "@services/apiClient";
import { addToComparison } from "@features/comparison/comparisonSlice";

const SelectCarModalAccordionSubHeading = ({ brandData, onClose }) => {
  const { title, image, brandSlug } = brandData;

  const getSpecificBrandCars = async function () {
    return getData(`/newcars/${brandSlug}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${brandSlug}`],
    queryFn: getSpecificBrandCars,
  });

  const dispatch = useDispatch();
  const addToCompare = (car) => {
    dispatch(addToComparison(car));
    onClose();
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _hover={{ backgroundColor: "white" }}>
          <Box as="span" flex="1" textAlign="left">
            <Flex>
              <Image width={"10"} src={image} alt={title} />
              <Text>{title}</Text>
            </Flex>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((car) => {
              return (
                <Box
                  key={car._id}
                  onClick={() => addToCompare(car)}
                  cursor={"pointer"}
                >
                  <Text>{car.title}</Text>
                </Box>
              );
            })}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SelectCarModalAccordionSubHeading;
