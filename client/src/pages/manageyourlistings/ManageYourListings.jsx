import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";
import { Flex } from "@chakra-ui/react";
import HorizontalCard from "@components/HorizontalCard";

const ManageYourListings = () => {
  const { userId } = useParams();

  const getSpecificUserCars = async function () {
    return getData(`/usedcars/manage/${userId}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${userId}`],
    queryFn: getSpecificUserCars,
  });
  console.log(data);

  // console.log(userId);
  return (
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
                  // key={car._id}
                  price={car.price}
                  // clickHandler={() => addToCompare(car)}
                  buttonPlaceholder="Add to Compare"
                />
              </Flex>
            );
          })}
    </ul>
  );
};

export default ManageYourListings;
