import HeadingText from "@components/HeadingText";
import ReadMore from "./ReadMore";
import { Box } from "@chakra-ui/react";

const KeyFeatures = ({ data }) => {
  data[0].keyfeatures ? (
    <Box marginBottom={"5"}>
      <HeadingText>{data[0].title} Key Features</HeadingText>
      <ReadMore arrayLimit="4" shouldShowDots>
        {data[0].keyfeatures}
      </ReadMore>
    </Box>
  ) : null;
};

export default KeyFeatures;
