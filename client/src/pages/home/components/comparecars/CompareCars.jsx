import { Heading } from "@chakra-ui/react";
import ComponentHeading from "@components/ComponentHeading";
import Wrapper from "@components/Wrapper";
import ComparionCardParent from "./ComparionCardParent";

const CompareCars = () => {
  return (
    <Wrapper>
      <ComponentHeading>Compare Cars</ComponentHeading>
      <ComparionCardParent titleSlugs={["swift", "fronx"]} />
    </Wrapper>
  );
};

export default CompareCars;
