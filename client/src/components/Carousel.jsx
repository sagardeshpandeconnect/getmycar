import { useState } from "react";
import { Flex, Text, Box } from "@chakra-ui/react";
import VCard from "./VCard";

const Carousel = ({ noOfSlidesInView, data, error, isLoading }) => {
  console.log(noOfSlidesInView);
  const dynamicWidth = 100 / noOfSlidesInView;
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(data);
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

  const slidesCount = data?.length / 1 / noOfSlidesInView;
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
  // console.log(currentSlide + 1);
  // console.log(slidesCount);
  // console.log(hasNext);
  // console.log(hasPrev);

  // console.log(data?.length == 4);

  return (
    <Flex
      // w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      // p={"-1"}
      alignItems="center"
      // justifyContent="center"
    >
      <Flex width="full" overflow="hidden" position="relative">
        <Flex width={`${dynamicWidth}%`} {...carouselStyle}>
          {error
            ? "Something went wrong!"
            : isLoading
            ? "loading.........."
            : data?.map((item) => (
                <Box
                  key={item._id}
                  boxSize="full"
                  // shadow="md"
                  flex="none"
                  padding={2}
                >
                  <VCard
                    title={item.title}
                    price={item.specifications.price}
                    image={item.image}
                    detailsURL={`/${item.brandSlug}/${item.titleSlug}`}
                  />
                </Box>
              ))}
        </Flex>
        {hasPrev && (
          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>
        )}

        {hasNext && (
          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default Carousel;
