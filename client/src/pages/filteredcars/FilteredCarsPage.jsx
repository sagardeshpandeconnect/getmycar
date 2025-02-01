import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Text, Grid, Button, HStack } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import { useQuery } from "@tanstack/react-query";
import NewCarCard from "@components/ui/NewCarCard";

const ITEMS_PER_PAGE = 6;

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

  const [currentPage, setCurrentPage] = useState(1);

  const totalCars = data ? data.length : 0;
  const totalPages = Math.ceil(totalCars / ITEMS_PER_PAGE);

  const currentData = data
    ? data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
      )
    : [];

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {data && <Text>{totalCars} Cars Found</Text>}
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
          : currentData.map((car) => {
              return <NewCarCard carData={car} key={car._id} />;
            })}
      </Grid>
      {totalPages > 1 && (
        <HStack spacing={2} marginY={4} justifyContent="center">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            isDisabled={currentPage === 1}
          >
            Previous
          </Button>
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            isDisabled={currentPage === totalPages}
          >
            Next
          </Button>
        </HStack>
      )}
    </>
  );
};

export default FilteredCarsPage;
