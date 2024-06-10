import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";
import UsedCarCard from "@components/UsedCarCard";
import { SimpleGrid } from "@chakra-ui/react";
import Wrapper from "@components/Wrapper";

const UsedCarsPage = () => {
  const getAllUsdedCars = async function () {
    return getData(`/usedcars`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`usedcars`],
    queryFn: getAllUsdedCars,
  });
  console.log(data);
  return (
    <Wrapper>
      <SimpleGrid
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={2}
      >
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data.map((car) => {
              return <UsedCarCard car={car} key={car._id} />;
            })}
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data.map((car) => {
              return <UsedCarCard car={car} key={car._id} />;
            })}
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data.map((car) => {
              return <UsedCarCard car={car} key={car._id} />;
            })}
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data.map((car) => {
              return <UsedCarCard car={car} key={car._id} />;
            })}
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data.map((car) => {
              return <UsedCarCard car={car} key={car._id} />;
            })}
      </SimpleGrid>
    </Wrapper>
  );
};

export default UsedCarsPage;
