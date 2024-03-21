import { ListItem, Text, UnorderedList } from "@chakra-ui/react";
import ReadMore from "./ReadMore";

const KeyFeatures = ({ data }) => {
  return (
    <>
      <Text fontSize="2xl">{data[0].title} Key Features</Text>
      <ReadMore arrayLimit="4">
        {/* <UnorderedList spacing={2}>
          {data[0].keyfeatures.map((feature) => {
            return <ListItem key={crypto.randomUUID()}>{feature}</ListItem>;
          })}
        </UnorderedList> */}
        {data[0].keyfeatures}
      </ReadMore>
    </>
  );
};

export default KeyFeatures;
