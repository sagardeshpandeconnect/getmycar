import { Text, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToComparison } from "@features/comparison/comparisonSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const ComparisonSearchSuggestion = ({ result, addData, newSlug }) => {
  const dispatch = useDispatch();
  const addToCompare = (result) => {
    dispatch(addToComparison(result));
  };
  return (
    // <Link to={`-vs-${newlyAddedSlug}`}>
    <Box
      // onKeyDown={handleKeyDown}
      onClick={() => addToCompare(result)}
      padding="10px 20px"
      borderBottom={"1px"}
      cursor={"pointer"}
      _hover={{
        background: "green",
        color: "teal.500",
      }}
      width={"100%"}
    >
      <Text>{result.title}</Text>
      {/* <Text>{result.specifications.price}</Text> */}
      {/* <Text>{result.attributes.title}</Text> */}
    </Box>
    // </Link>
  );
};

export default ComparisonSearchSuggestion;
