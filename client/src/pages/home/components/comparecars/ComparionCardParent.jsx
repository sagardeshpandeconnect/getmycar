import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as RouteLink } from "react-router-dom"; // Import RouteLink for internal links

import { useDispatch } from "react-redux";
import { Flex, Button, Box, VStack } from "@chakra-ui/react";
import ComparionCardChild from "./ComparionCardChild";
import { addToComparison } from "@features/comparison/comparisonSlice";
import { getData } from "@services/apiClient";

const ComparionCardParent = ({ titleSlugs }) => {
  const [allData, setAllData] = useState([]);

  let URLArray = titleSlugs.map((titleSlug) => {
    return `/comparison/${titleSlug}`;
  });
  // console.log(URLArray);

  const requests = URLArray.map((url) => getData(url));

  useEffect(() => {
    Promise.all(requests).then((responses) => {
      setAllData(responses.map((innerArray) => innerArray[0]));
      // console.log(responses);
    });
  }, []);
  // console.log(allData);

  // ********************
  const dispatch = useDispatch();

  const handleAddToCompare = () => {
    //   // Dispatch two separate actions to add two items
    dispatch(addToComparison(allData[0]));
    dispatch(addToComparison(allData[1]));
  };
  // ***********************************************
  return (
    <Box border="4px" borderColor="gray.200" marginX={"1"}>
      <VStack>
        <Flex justifyContent={"center"}>
          {allData &&
            allData?.map((car) => {
              const carData = car;
              return (
                <Box key={carData._id}>
                  <ComparionCardChild
                    carData={carData}
                    price={carData.specifications.price}
                  />
                </Box>
              );
            })}
        </Flex>
        <Link to={`compare-cars`} style={{ display: "block", width: "100%" }}>
          <Button colorScheme="red" width="full" onClick={handleAddToCompare}>
            Compare Now
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default ComparionCardParent;
