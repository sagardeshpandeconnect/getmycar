import {
  Text,
  SimpleGrid,
  Image,
  Box,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getData } from "@services/apiClient";
import { useQuery } from "@tanstack/react-query";
import { BsChevronRight } from "react-icons/bs";
import FilterContainer from "../FilterContainer";

const FuelType = () => {
  const getFuelTypesData = async function () {
    return getData(`/fueltype`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`fueltype`],
    queryFn: getFuelTypesData,
  });

  console.log(data);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      borderTop={"var(--grid-border)"}
      borderLeft={"var(--grid-border)"}
    >
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading.........."
        : data?.map((item) => (
            <Box key={item._id}>
              <Link
                to={`/new/${item.fuelSlug}`}
                state={`/newcars/fueltype/${item.title}`}
              >
                <FilterContainer itemData={item} />
              </Link>
            </Box>
          ))}
    </SimpleGrid>
  );
};

export default FuelType;
