import { Heading } from "@chakra-ui/react";

const ComponentHeading = ({ children }) => {
  return (
    <Heading as="h3" size="md" fontWeight={"medium"}>
      {children}
    </Heading>
  );
};

export default ComponentHeading;
