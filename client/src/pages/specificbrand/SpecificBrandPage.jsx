import React from "react";
import { useParams } from "react-router-dom";
import HorizontalCard from "@components/HorizontalCard";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";
import { Flex } from "@chakra-ui/react";

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
    <div>
      <ul>
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((car) => {
              return (
                <Flex justifyContent={"center"} key={car._id}>
                  <HorizontalCard
                    carData={car}
                    key={car._id}
                    price={car.specifications.price}
                    // clickHandler={() => addToCompare(car)}
                    buttonPlaceholder="Add to Compare"
                  />
                </Flex>
              );
            })}
      </ul>
    </div>
  );
};

export default SpecificBrandPage;
