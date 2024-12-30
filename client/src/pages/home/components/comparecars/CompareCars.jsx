import ComponentHeading from "@components/HeadingText";
import Wrapper from "@components/Wrapper";
import ComparionCardParent from "./ComparionCardParent";
import Carousel from "@components/Carousel";
import { Box, Flex } from "@chakra-ui/react";

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
        <Flex
          // key={item._id}
          boxSize="full"
          flex="none"
          // padding={2}
          width={{ base: "15em", md: "15em", lg: "20em" }}
        >
          <ComparionCardParent titleSlugs={["swift", "fronx"]} />

          <ComparionCardParent titleSlugs={["brezza", "exter"]} />

          <ComparionCardParent titleSlugs={["creta", "seltos"]} />

          <ComparionCardParent titleSlugs={["scorpio", "exter"]} />

          <ComparionCardParent titleSlugs={["fronx", "creta"]} />
        </Flex>
      </Carousel>
    </Wrapper>
  );
};

export default CompareCars;
