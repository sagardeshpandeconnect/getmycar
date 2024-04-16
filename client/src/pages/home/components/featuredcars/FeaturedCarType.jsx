import { useQuery } from "@tanstack/react-query";
import { useBreakpointValue } from "@chakra-ui/react";

import Carousel from "@components/Carousel";
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

  return (
    <Carousel
      data={data}
      error={error}
      isLoading={isLoading}
      noOfSlidesInView={noOfSlidesInView}
    />
  );
};

export default FeaturedCarType;
