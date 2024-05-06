import { Text } from "@chakra-ui/react";

const HeadingText = ({ children }) => {
  return (
    <Text as={"h3"} fontSize={"2xl"} color="#484848" fontWeight={"bold"}>
      {children}
    </Text>
  );
};

export default HeadingText;
