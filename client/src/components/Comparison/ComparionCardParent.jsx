import React from "react";
import { Flex, Card, Button, HStack, Box, VStack } from "@chakra-ui/react";
import ComparionCardChild from "./ComparionCardChild";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../../comparisonStore/compareSlice";

const ComparionCardParent = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.compare);
  const titleSlugs = ["swift", "invicto"];
  const { data, loading, error } = useFetch(
    // "http://localhost:1337/api/brands?populate=*"
    `http://localhost:3001/comparison/${titleSlugs[0]}/${titleSlugs[1]}`
  );
  console.log(data);

  const handleAddToCompare = () => {
    // Dispatch two separate actions to add two items
    dispatch(add(data[0]));
    dispatch(add(data[1]));
  };
  return (
    <Box border="4px" borderColor="gray.200">
      <VStack>
        <Flex justifyContent={"center"}>
          {data &&
            data?.map((car) => {
              return (
                <Box key={car._id}>
                  <ComparionCardChild
                    image={car.image}
                    // title={car.attributes.title}
                    titleSlug={car.titleSlug}
                    title={car.title}
                    id={car._id}
                    // id={data[sid].id}
                    price={car.specifications.price}
                  />
                </Box>
              );
            })}
          {/* <ComparionCardChild data={data} /> */}
          {/* <ComparionCardChild /> */}
        </Flex>
        <Link to={`compare-cars`}>
          <Button
            colorScheme="red"
            size="lg"
            paddingX={100}
            onClick={handleAddToCompare}
          >
            Compare Now
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ComparionCardParent;
