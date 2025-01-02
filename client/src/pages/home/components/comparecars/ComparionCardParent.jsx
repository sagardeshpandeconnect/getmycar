import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { Flex, Button, Box, VStack } from "@chakra-ui/react";
import ComparionCardChild from "./ComparionCardChild";
import { addToComparison } from "@features/comparison/comparisonSlice";
import { getData } from "@services/apiClient";

const ComparionCardParent = ({ titleSlugs }) => {
  const [allData, setAllData] = useState([]);

  const URLArray = titleSlugs.map((titleSlug) => `/comparison/${titleSlug}`);
  const requests = URLArray.map((url) => getData(url));

  useEffect(() => {
    Promise.all(requests).then((responses) => {
      setAllData(responses.map((innerArray) => innerArray[0]));
    });
  }, []);

  const dispatch = useDispatch();

  const handleAddToCompare = () => {
    dispatch(addToComparison(allData[0]));
    dispatch(addToComparison(allData[1]));
  };

  return (
    <Box border="1px solid gray" borderRadius="8" mx="1">
      <VStack alignItems="stretch" spacing={2} p={2}>
        <Flex justifyContent="center">
          {allData?.map((car) => (
            <Box key={car._id}>
              <ComparionCardChild
                carData={car}
                price={car.specifications.price}
              />
            </Box>
          ))}
        </Flex>
        <Link to="compare-cars" style={{ display: "block", width: "100%" }}>
          <Button colorScheme="red" width="100%" onClick={handleAddToCompare}>
            Compare Now
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ComparionCardParent;
