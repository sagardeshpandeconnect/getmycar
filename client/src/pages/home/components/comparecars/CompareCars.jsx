import ComponentHeading from "@components/HeadingText";
import Wrapper from "@components/Wrapper";
import ComparionCardParent from "./ComparionCardParent";
import Carousel from "@components/Carousel";
import { Box, Flex } from "@chakra-ui/react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const CompareCars = () => {
  return (
    <Wrapper>
      <ComponentHeading>Compare Cars</ComponentHeading>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <ComparionCardParent titleSlugs={["swift", "fronx"]} />
        </SwiperSlide>
        <SwiperSlide>
          <ComparionCardParent titleSlugs={["brezza", "exter"]} />
        </SwiperSlide>
        <SwiperSlide>
          <ComparionCardParent titleSlugs={["creta", "seltos"]} />
        </SwiperSlide>

        <SwiperSlide>
          <ComparionCardParent titleSlugs={["scorpio", "exter"]} />
        </SwiperSlide>
        <SwiperSlide>
          <ComparionCardParent titleSlugs={["fronx", "creta"]} />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};

export default CompareCars;
