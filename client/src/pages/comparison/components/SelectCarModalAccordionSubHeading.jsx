import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";

import {
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Box,
  Flex,
  Text,
  Image,
} from "@chakra-ui/react";
import { addToComparison } from "@features/comparison/comparisonSlice";

const SelectCarModalAccordionSubHeading = ({ title, img, id, brandSlug }) => {
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
  };

  return (
    <AccordionItem>
      <h2>
        <AccordionButton _hover={{ backgroundColor: "white" }}>
          <Box as="span" flex="1" textAlign="left">
            <Flex>
              <Image width={"10"} src={img} alt={title} />
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
          : data?.map((car, sid) => {
              return (
                <Box
                  key={car._id}
                  onClick={() => addToCompare(car)}
                  cursor={"pointer"}
                >
                  <Text
                    title={car.title}
                    // id={data[sid].id}
                    // price={car.attributes.price}
                    price={car.specifications.price}
                    // img={
                    //   "http://localhost:1337" +
                    //   data[sid]?.attributes?.image?.data[0]?.attributes?.url
                    // }
                    // clickHandler={() => addToCompare(car)}
                    // buttonPlaceholder="Add to Compare"
                  >
                    {car.title}
                  </Text>
                </Box>
              );
            })}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default SelectCarModalAccordionSubHeading;
