import {
  Text,
  SimpleGrid,
  Icon,
  Image,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { getData } from "@services/apiClient";
import { useQuery } from "@tanstack/react-query";
import FilterContainer from "../FilterContainer";

// !NEED TO ARRANGE THE JSON DATA IN PROPER ORDER

const Transmission = () => {
  const getTransmissionTypesData = async function () {
    return getData(`/transmission`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`bodytype`],
    queryFn: getTransmissionTypesData,
  });

  console.log(data);
  return (
    <div>
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
                  to={`/new/${item.transmissionSlug}`}
                  state={{ transmission: `${item.title}` }}
                >
                  <FilterContainer itemData={item} />
                </Link>
              </Box>
            ))}
      </SimpleGrid>
    </div>
  );
};

export default Transmission;
