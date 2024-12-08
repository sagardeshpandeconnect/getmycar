import ComponentHeading from "@components/HeadingText";
import Wrapper from "@components/Wrapper";
import ComparionCardParent from "./ComparionCardParent";
import Carousel from "@components/Carousel";
import { Box } from "@chakra-ui/react";

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
        <Box
          // key={item._id}
          boxSize="full"
          flex="none"
          padding={2}
          width={{ base: "15em", md: "15em", lg: "full" }}
        >
          <ComparionCardParent titleSlugs={["swift", "fronx"]} />
        </Box>
        <Box
          // key={item._id}
          boxSize="full"
          flex="none"
          padding={2}
          width={{ base: "15em", md: "15em", lg: "full" }}
        >
          <ComparionCardParent titleSlugs={["brezza", "exter"]} />
        </Box>
        <Box
          // key={item._id}
          boxSize="full"
          flex="none"
          padding={2}
          width={{ base: "15em", md: "15em", lg: "full" }}
        >
          <ComparionCardParent titleSlugs={["creta", "seltos"]} />
        </Box>
        <Box
          // key={item._id}
          boxSize="full"
          flex="none"
          padding={2}
          width={{ base: "15em", md: "15em", lg: "full" }}
        >
          <ComparionCardParent titleSlugs={["scorpio", "exter"]} />
        </Box>
        <Box
          // key={item._id}
          boxSize="full"
          flex="none"
          padding={2}
          width={{ base: "15em", md: "15em", lg: "full" }}
        >
          <ComparionCardParent titleSlugs={["fronx", "creta"]} />
        </Box>
      </Carousel>
    </Wrapper>
  );
};

export default CompareCars;
