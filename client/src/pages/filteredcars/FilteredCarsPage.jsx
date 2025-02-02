import { useLocation } from "react-router-dom";
import { Text, Grid, Button, HStack } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import { useQuery } from "@tanstack/react-query";
import NewCarCard from "@components/ui/NewCarCard";
import usePagination from "@hooks/usePagination";

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

  // Use the usePagination hook
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    data || [],
    ITEMS_PER_PAGE
  );

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
          : currentData().map((car) => {
              return <NewCarCard carData={car} key={car._id} />;
            })}
      </Grid>
      {maxPage > 1 && (
        <HStack spacing={2} marginY={4} justifyContent="center">
          <Button onClick={prev} isDisabled={currentPage === 1}>
            Previous
          </Button>
          {[...Array(maxPage)].map((_, index) => (
            <Button
              key={index + 1}
              onClick={() => jump(index + 1)}
              isActive={currentPage === index + 1}
            >
              {index + 1}
            </Button>
          ))}
          <Button onClick={next} isDisabled={currentPage === maxPage}>
            Next
          </Button>
        </HStack>
      )}
    </>
  );
};

export default FilteredCarsPage;
