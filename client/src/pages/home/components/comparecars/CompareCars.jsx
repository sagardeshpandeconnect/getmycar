import ComponentHeading from "@components/ComponentHeading";
import Wrapper from "@components/Wrapper";
import ComparionCardParent from "./ComparionCardParent";

const CompareCars = () => {
  return (
    <Wrapper>
      <ComponentHeading>Compare Cars</ComponentHeading>
      <ComparionCardParent titleSlugs={["swift", "fronx"]} />
      <ComparionCardParent titleSlugs={["brezza", "exter"]} />
    </Wrapper>
  );
};

export default CompareCars;
