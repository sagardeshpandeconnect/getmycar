import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";
import { Grid } from "@chakra-ui/react";
import NewCarCard from "../../components/ui/NewCarCard";
import { Container, VStack } from "@chakra-ui/react";

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
      {/* <Grid templateColumns="repeat(1,1fr)" gap={6} p={5}>
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((car) => {
              return <NewCarCard carData={car} key={car._id} />;
            })}
      </Grid> */}

      <Container padding={{ base: 4, md: 8 }} margin="0 auto">
        <VStack spacing={6}>
          {error
            ? "Something went wrong!"
            : isLoading
            ? "loading.........."
            : data?.map((car) => {
                return <NewCarCard carData={car} key={car._id} />;
              })}
        </VStack>
      </Container>
    </>
  );
};

export default SpecificBrandPage;
