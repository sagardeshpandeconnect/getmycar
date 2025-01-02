import ComponentHeading from "@components/HeadingText";
import Wrapper from "@components/Wrapper";
import ComparionCardParent from "./ComparionCardParent";
import Carousel from "@components/Carousel";
import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const data = [
  ["swift", "fronx"],
  ["brezza", "exter"],
  ["creta", "seltos"],
  ["scorpio", "exter"],
  ["fronx", "creta"],
];

const dataArrLength = data?.length;
const newArr = data.map((item) => {
  return [...item, "dd"];
});
console.log(newArr);

const CompareCars = () => {
  const noOfSlidesInView = useBreakpointValue({ base: 2, lg: 3 });
  return (
    <Wrapper>
      <ComponentHeading>Compare Cars</ComponentHeading>
      <Carousel
        dataArrLength={dataArrLength}
        noOfSlidesInView={noOfSlidesInView}
      >
        {data?.map((item, index) => (
          <Box
            key={index}
            flex="none"
            padding={1}
            width={{ base: "18em", lg: "full" }}
          >
            <ComparionCardParent titleSlugs={item} />
          </Box>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default CompareCars;
