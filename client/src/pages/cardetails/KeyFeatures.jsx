import HeadingText from "@components/HeadingText";
import ReadMore from "./ReadMore";

const KeyFeatures = ({ data }) => {
  return (
    <>
      <HeadingText>{data[0].title} Key Features</HeadingText>
      <ReadMore arrayLimit="4" shouldShowDots>
        {data[0].keyfeatures}
      </ReadMore>
    </>
  );
};

export default KeyFeatures;
