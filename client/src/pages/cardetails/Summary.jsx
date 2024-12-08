import { Box, Text } from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import ReadMore from "./ReadMore";
import HeadingText from "@components/HeadingText";

const Summary = ({ data }) => {
  const content = data[0].summary;
  // console.log(data);

  return (
    <>
      <HeadingText>{data[0].title} Summary</HeadingText>
      <ReadMore>
        {content.map((faq) => {
          return (
            <Box key={uuid()}>
              <Text as={"b"}>{faq.question}</Text>
              <Text paddingBottom={"4"}>{faq.answer}</Text>
            </Box>
          );
        })}
      </ReadMore>
    </>
  );
};

export default Summary;
