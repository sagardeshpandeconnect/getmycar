import { Text } from "@chakra-ui/react";
import ReadMore from "./ReadMore";

const KeyFeatures = ({ data }) => {
  return (
    <>
      <Text fontSize="2xl">{data[0].title} Key Features</Text>
      <ReadMore arrayLimit="4" shouldShowDots>
        {data[0].keyfeatures}
      </ReadMore>
    </>
  );
};

export default KeyFeatures;
