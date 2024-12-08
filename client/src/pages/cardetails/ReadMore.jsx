import { useState } from "react";
import { Box, Button, List, ListItem, ListIcon } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import { GoDotFill } from "react-icons/go";

const ReadMore = ({
  children,
  maxLength = 100,
  arrayLimit = 3,
  shouldShowDots,
}) => {
  const [shouldShowAllContent, setShouldShowAllContent] = useState(false);
  const toggleReadMore = function () {
    setShouldShowAllContent((showing) => !showing);
  };
  const renderArrayItems = function () {
    if (shouldShowAllContent) {
      return children;
    } else {
      return children.slice(0, arrayLimit);
    }
  };
  return (
    <Box backgroundColor={"var(--color-background)"} position={"relative"}>
      <Box margin={"2"} padding={"4"} paddingBottom={"12"}>
        {Array.isArray(children) ? (
          // If children is an array, limit the number of items displayed
          <List spacing={1}>
            {renderArrayItems().map((item) => (
              <ListItem key={uuid()}>
                {shouldShowDots ? <ListIcon as={GoDotFill} /> : null}
                {item}
              </ListItem>
            ))}
          </List>
        ) : typeof children === "string" ? (
          // If children is a string (text), show the substring based on maxLength
          <p>
            {shouldShowAllContent
              ? children
              : `${children.slice(0, maxLength)}...`}
          </p>
        ) : (
          // For other types, just show it
          <div>{children}</div>
        )}

        {/* {children} */}
        <Button
          color="var(--color-blue)"
          variant="link"
          onClick={toggleReadMore}
          position={"absolute"}
          bottom={5}
          right={5}
        >
          {shouldShowAllContent ? "Collapse" : "Read More"}
        </Button>
      </Box>
    </Box>
  );
};

export default ReadMore;
