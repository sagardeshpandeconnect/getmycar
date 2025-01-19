import { Text, Box } from "@chakra-ui/react";

const SearchSuggestion = ({ result, query, onClick }) => {
  const { title } = result;

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
    <Box
      onClick={onClick}
      padding="10px 20px"
      borderBottom={"1px"}
      cursor={"pointer"}
      _hover={{
        background: "green",
        color: "teal.500",
      }}
    >
      <Text>{highlightMatch(title, query)}</Text>
    </Box>
  );
};

export default SearchSuggestion;
