import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

const Carousel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
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

  // const slidesCount = data.length;
  const slidesCount = 0;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 0.3333 : s - 0.3333));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 0.3333 ? 0 : s + 0.3333));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      // w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={"-1"}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="33.33%" {...carouselStyle}>
          {children}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
      </Flex>
    </Flex>
  );
};

export default Carousel;
