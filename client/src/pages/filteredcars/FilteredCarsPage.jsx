import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Text, Grid } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import { useQuery } from "@tanstack/react-query";
import NewCarCard from "@components/ui/NewCarCard";

const FilteredCarsPage = () => {
  const { state } = useLocation();
  const url = state;
  console.log(url);

  const getCarsByFilterType = async function () {
    return getData(url);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [url],
    queryFn: getCarsByFilterType,
  });

  return (
    <>
      {data && <Text>{data.length} Cars Found</Text>}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
        gap={6}
        paddingX={4}
      >
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data.map((car) => {
              return <NewCarCard carData={car} key={car._id} />;
            })}
      </Grid>
    </>
  );
};

export default FilteredCarsPage;
