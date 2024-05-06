import { Text } from "@chakra-ui/react";

const QuestionText = ({ children }) => {
  return (
    <Text fontSize={"large"} color="#484848" fontWeight={"bold"}>
      {children}
    </Text>
  );
};

export default QuestionText;
