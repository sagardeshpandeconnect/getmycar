import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getData, deleteData } from "@services/apiClient";
import { Flex } from "@chakra-ui/react";
import HorizontalCard from "@components/HorizontalCard";
import ManageYourLisingsCard from "./ManageYourLisingsCard";

const ManageYourListings = () => {
  const { userId } = useParams();
  const queryClient = useQueryClient();

  const getSpecificUserCars = async function () {
    return getData(`/usedcars/manage/${userId}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${userId}`],
    queryFn: getSpecificUserCars,
  });
  console.log(data);

  const deleteCarMutation = useMutation({
    mutationFn: (carId) => deleteData(`/usedcars/delete/${carId}`),
    onSuccess: (response) => {
      console.log("Delete successful:", response);
      queryClient.invalidateQueries([`${userId}`]); // Refetch cars
    },
    onError: (error) => {
      console.error("Delete failed:", error);
    },
  });

  const handleDeleteCar = (carId) => {
    deleteCarMutation.mutate(carId);
    console.log("delte butoos pressed");
    // console.log(carId);
  };

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
                <ManageYourLisingsCard
                  carData={car}
                  onDelete={handleDeleteCar}
                />
              </Flex>
            );
          })}
    </ul>
  );
};

export default ManageYourListings;
