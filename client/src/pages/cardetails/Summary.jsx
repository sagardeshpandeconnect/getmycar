import { Box, Text } from "@chakra-ui/react";
import ReadMore from "../../components/layout/ReadMore";
import HeadingText from "@components/ui/HeadingText";

const Summary = ({ data }) => {
  const content = data?.summary;

  // Conditionally render null if no content
  if (!content || content.length === 0) {
    return null;
  }

  return (
    <>
      <HeadingText>{data?.title} Summary</HeadingText>
      <ReadMore>
        {content.map((faq, index) => (
          <Box key={index}>
            <Text as={"b"}>{faq.question}</Text>
            <Text paddingBottom={"4"}>{faq.answer}</Text>
          </Box>
        ))}
      </ReadMore>
    </>
  );
};

export default Summary;
