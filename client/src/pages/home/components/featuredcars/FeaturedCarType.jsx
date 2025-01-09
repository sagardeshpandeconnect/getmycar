import { useQuery } from "@tanstack/react-query";
import { useBreakpointValue, Box, Skeleton } from "@chakra-ui/react";

import Carousel from "@components/Carousel";
import VCard from "@components/VCard";
import { getData } from "@services/apiClient";

const FeaturedCarType = ({ featuredType }) => {
  const getFeaturedCars = async function () {
    return getData(`/featured/${featuredType}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${featuredType}`],
    queryFn: getFeaturedCars,
  });

  const noOfSlidesInView = useBreakpointValue({ base: 2, lg: 3 });
  const dataArrLength = data?.length;

  return (
    <Carousel dataArrLength={dataArrLength} noOfSlidesInView={noOfSlidesInView}>
      {error ? (
        "Something went wrong!"
      ) : isLoading ? (
        <Skeleton height={{ base: "18em", md: "18em", lg: "21em" }} />
      ) : (
        data?.map((item) => (
          <Box
            key={item._id}
            boxSize="full"
            flex="none"
            padding={2}
            width={{ base: "15em", md: "15em", lg: "full" }}
          >
            <VCard
              title={item.title}
              price={item.specifications.price}
              image={item.image}
              detailsURL={`${item.brandSlug}/${item.titleSlug}`}
            />
          </Box>
        ))
      )}
    </Carousel>
  );
};

export default FeaturedCarType;
