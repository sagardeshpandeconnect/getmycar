import ComponentHeading from "@components/ComponentHeading";
import Wrapper from "@components/Wrapper";
import ComparionCardParent from "./ComparionCardParent";
import Carousel from "@components/Carousel";

const dataArrLength = 5;
const noOfSlidesInView = 3;

const CompareCars = () => {
  return (
    <Wrapper>
      <ComponentHeading>Compare Cars</ComponentHeading>
      <Carousel
        dataArrLength={dataArrLength}
        noOfSlidesInView={noOfSlidesInView}
      >
        <ComparionCardParent titleSlugs={["swift", "fronx"]} />
        <ComparionCardParent titleSlugs={["brezza", "exter"]} />
        <ComparionCardParent titleSlugs={["creta", "seltos"]} />
        <ComparionCardParent titleSlugs={["scorpio", "exter"]} />
        <ComparionCardParent titleSlugs={["fronx", "creta"]} />
      </Carousel>
    </Wrapper>
  );
};

export default CompareCars;
