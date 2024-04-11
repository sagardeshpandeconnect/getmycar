// import useFetch from "../hooks/useFetch";
import { useQuery } from "@tanstack/react-query";

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

  return (
    <Carousel
      data={data}
      error={error}
      isLoading={isLoading}
      noOfSlidesInView={3}
    />
  );
};

export default FeaturedCarType;
