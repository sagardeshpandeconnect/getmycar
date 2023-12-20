import { Link } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const SearchSuggestion = ({ result, navigationLink }) => {
  const navigate = useNavigate();
  console.log(navigationLink);

  // const goToDetailsPage = (result) => {
  //   if (result) {
  //     navigate("/kia-cars/seltos");
  //   }
  // };
  // console.log(result);
  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === "ArrowDown")
      nextIndexCount = (focusedIndex + 1) % searchedCar.length;

    // move up
    if (key === "ArrowUp")
      nextIndexCount =
        (focusedIndex + searchedCar.length - 1) % searchedCar.length;

    // hide search results
    if (key === "Escape") {
      clearQuery();
    }

    // select the current item
    if (key === "Enter") {
      e.preventDefault();
      // handleSelection(focusedIndex);
      // goToDetailsPage();
      // window.open(`/${result.brandSlug}/${result.titleSlug}`);
      console.log(`enter key pressed`);
    }

    setFocusedIndex(nextIndexCount);
  };
  return (
    <div>
      {/* <Link to={`/${result.brandSlug}/${result.titleSlug}`}> */}
      {/* <Link to={`/details/${id}`}> */}
      <Box
        onKeyDown={handleKeyDown}
        padding="10px 20px"
        borderBottom={"1px"}
        cursor={"pointer"}
        _hover={{
          background: "green",
          color: "teal.500",
        }}
      >
        <Text>{result.title}</Text>
        {/* <Text>{result.attributes.title}</Text> */}
      </Box>
      {/* </Link> */}
    </div>
  );
};

export default SearchSuggestion;
