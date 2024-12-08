import { Link } from "react-router-dom";
import { Text, Box } from "@chakra-ui/react";

const SearchSuggestion = ({ result, query }) => {
  const { title, brandSlug, titleSlug } = result;

  // Function to highlight matching part of the suggestion
  const highlightMatch = function (text, query) {
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  return (
    <div>
      <Link to={`/${brandSlug}/${titleSlug}`}>
        <Box
          // onKeyDown={handleKeyDown}
          // width={"300px"}
          padding="10px 20px"
          borderBottom={"1px"}
          cursor={"pointer"}
          _hover={{
            background: "green",
            color: "teal.500",
          }}
        >
          <Text>
            {/* {result.title} */}
            {highlightMatch(title, query)}
          </Text>
          {/* <Text>{result.attributes.title}</Text> */}
        </Box>
      </Link>
    </div>
  );
};

export default SearchSuggestion;
