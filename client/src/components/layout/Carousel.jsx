import { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Carousel = ({ noOfSlidesInView, dataArrLength, children }) => {
  // console.log(noOfSlidesInView);
  const dynamicWidth = 100 / noOfSlidesInView;
  const [currentSlide, setCurrentSlide] = useState(0);
  // console.log(data);
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "green",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slidesCount = dataArrLength / 1 / noOfSlidesInView;
  // const slidesCount = 0;

  const prevSlide = () => {
    setCurrentSlide((s) =>
      s === 0 ? slidesCount - 1 / noOfSlidesInView : s - 1 / noOfSlidesInView
    );
  };

  const nextSlide = () => {
    setCurrentSlide((s) =>
      s === slidesCount - 1 / noOfSlidesInView ? 0 : s + 1 / noOfSlidesInView
    );
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const hasNext = (currentSlide + 1).toFixed(2) !== slidesCount.toFixed(2);
  const hasPrev = currentSlide !== 0;

  return (
    <Flex
      // bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      alignItems="center"
    >
      <Flex
        width="full"
        overflowX={{ base: "scroll", md: "scroll", lg: "hidden" }}
        position="relative"
        css={{
          "::-webkit-scrollbar": {
            display: "none",
          },
          msOverflowStyle: "none" /* IE and Edge */,
          scrollbarWidth: "none" /* Firefox */,
        }}
      >
        <Flex width={`${dynamicWidth}%`} {...carouselStyle}>
          {children}
        </Flex>
        {hasPrev && (
          <Text
            {...arrowStyles}
            left="0"
            onClick={prevSlide}
            display={{ base: "none", md: "none", lg: "block" }}
          >
            &#10094;
          </Text>
        )}

        {hasNext && dataArrLength > 3 && (
          <Text
            {...arrowStyles}
            right="0"
            onClick={nextSlide}
            display={{ base: "none", md: "none", lg: "block" }}
          >
            &#10095;
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Carousel;
