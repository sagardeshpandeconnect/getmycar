import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";
import { Box, Flex } from "@chakra-ui/react";
import NewCarCard from "./NewCarCard";

const SpecificBrandPage = () => {
  const brandSlug = useParams().brandSlug;

  const getSpecificBrandCars = async function () {
    return getData(`/newcars/${brandSlug}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${brandSlug}`],
    queryFn: getSpecificBrandCars,
  });
  console.log(data);

  return (
    <>
      <ul>
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((car) => {
              return (
                <Flex justifyContent={"center"} key={car._id} marginY={"4"}>
                  <NewCarCard carData={car} />
                </Flex>
              );
            })}
      </ul>
    </>
  );
};

export default SpecificBrandPage;
