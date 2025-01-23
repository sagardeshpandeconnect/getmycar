import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import FilterContainer from "../FilterContainer";

const BodyType = () => {
  const getBodyTypesData = async function () {
    return getData(`/bodytype`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`bodytype`],
    queryFn: getBodyTypesData,
  });

  return (
    <SimpleGrid
      borderTop={"var(--grid-border)"}
      borderLeft={"var(--grid-border)"}
      columns={{ sm: 1, md: 2, lg: 3 }}
    >
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading.........."
        : data?.map((item) => (
            <Box key={item._id}>
              <Link
                to={`/new/${item.bodyTypeSlug}/`}
                state={`/newcars/bodytype/${item.title}`}
              >
                <FilterContainer itemData={item} />
              </Link>
            </Box>
          ))}
    </SimpleGrid>
  );
};

export default BodyType;
