import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getData, deleteData } from "@services/apiClient";
import {
  Flex,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import ManageYourLisingsCard from "./ManageYourLisingsCard";

const ManageYourListings = () => {
  const { userId } = useParams();
  const queryClient = useQueryClient();
  const toast = useToast();

  // State for controlling the modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getSpecificUserCars = async function () {
    return getData(`/usedcars/manage/${userId}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${userId}`],
    queryFn: getSpecificUserCars,
  });

  const deleteCarMutation = useMutation({
    mutationFn: (carId) => deleteData(`/usedcars/delete/${carId}`),
    onMutate: () => {
      // Show the modal when mutation starts
      setIsModalOpen(true);
    },
    onSuccess: (response) => {
      toast({
        title: "Used car delete successful!",
        status: "success",
        duration: 2500,
      });
      console.log("Delete successful:", response);
      queryClient.invalidateQueries([`${userId}`]); // Refetch cars
      setIsModalOpen(false); // Close modal after success
    },
    onError: (error) => {
      console.error("Delete failed:", error);
      setIsModalOpen(false); // Close modal after error
    },
  });

  const handleDeleteCar = (carId) => {
    deleteCarMutation.mutate(carId);
    console.log("Delete button pressed");
  };

  return (
    <div>
      {/* Modal for delete operation */}
      <Modal isOpen={isModalOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deleting Car</ModalHeader>
          <ModalBody>Please wait, the car is being deleted...</ModalBody>
        </ModalContent>
      </Modal>

      {/* Main content */}
      <ul>
        {error
          ? "Something went wrong!"
          : isLoading
          ? "Loading.........."
          : data?.map((car) => {
              return (
                <Flex justifyContent={"center"} key={car._id} marginY={"2"}>
                  <ManageYourLisingsCard
                    carData={car}
                    onDelete={handleDeleteCar}
                  />
                </Flex>
              );
            })}
      </ul>
    </div>
  );
};

export default ManageYourListings;
