import { Text, Box } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { add } from "../comparisonStore/compareSlice";

const SearchSuggestion2 = ({ result }) => {
  const dispatch = useDispatch();
  const addToCompare = (result) => {
    dispatch(add(result));
  };
  console.log(result);
  return (
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
    >
      <Text>{result.title}</Text>
      {/* <Text>{result.specifications.price}</Text> */}
      {/* <Text>{result.attributes.title}</Text> */}
    </Box>
  );
};

export default SearchSuggestion2;
