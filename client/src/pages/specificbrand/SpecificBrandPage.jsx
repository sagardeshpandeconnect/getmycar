import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";
import { Grid } from "@chakra-ui/react";
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
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((car) => {
              return <NewCarCard carData={car} key={car._id} />;
            })}
      </Grid>
    </>
  );
};

export default SpecificBrandPage;
