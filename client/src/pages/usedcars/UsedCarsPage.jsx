import { useQuery } from "@tanstack/react-query";
import { Container, VStack } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import UsedCarCard from "@components/ui/UsedCarCard";

const UsedCarsPage = () => {
  const getUsedCars = async function () {
    return getData(`/usedcars`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [],
    queryFn: getUsedCars,
  });
  console.log(data);

  return (
    <Container padding={{ base: 5, md: 12 }} margin="0 auto">
      <VStack spacing={6}>
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((car) => {
              return <UsedCarCard data={car} key={car._id} />;
            })}
      </VStack>
    </Container>
  );
};

export default UsedCarsPage;
