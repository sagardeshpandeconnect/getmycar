import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import {
  CurrencyIcon,
  EngineIcon,
  FuelTypeIcon,
  SeatingCapacityIcon,
  TransmissionIcon,
} from "../../assets/Icons";

const Specifications = ({ data }) => {
  return (
    <Flex direction={"column"}>
      <Text fontSize="2xl">{data?.attributes?.title} Specifcatons</Text>
      <Grid templateColumns="repeat(3, 1fr)">
        <Flex direction={"column"}>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <CurrencyIcon />
            <Text fontSize="sm">Price</Text>
          </Flex>

          <Text fontSize="md">Rs. {data?.attributes?.price} Lakh onwards</Text>
        </Flex>
        <Flex direction={"column"}>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <EngineIcon />
            <Text fontSize="sm">Engine</Text>
          </Flex>

          <Text fontSize="md"> {data?.attributes?.engine} cc</Text>
        </Flex>
        <Flex direction={"column"}>
          <Text fontSize="sm">(sm) In love with React & Next</Text>
          <Text fontSize="md">(sm) In love with React & Next</Text>
        </Flex>
        <Flex direction={"column"}>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <FuelTypeIcon />
            <Text fontSize="sm">Fuel Type</Text>
          </Flex>

          <Text fontSize="md">
            {data?.attributes?.fuels?.data[0]?.attributes?.title},
            {data?.attributes?.fuels?.data[1]?.attributes?.title} &
            {data?.attributes?.fuels?.data[2]?.attributes?.title}
          </Text>
        </Flex>
        <Flex direction={"column"}>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <TransmissionIcon />
            <Text fontSize="sm">Transmission</Text>
          </Flex>
          <Text fontSize="md">
            {data?.attributes?.transmissions?.data[0]?.attributes?.title} &
            {data?.attributes?.transmissions?.data[1]?.attributes?.title}
          </Text>
        </Flex>
        <Flex direction={"column"}>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <SeatingCapacityIcon />
            <Text fontSize="sm">Seating Capacity</Text>
          </Flex>
          <Text fontSize="md">
            {data?.attributes?.seatings?.data[0]?.attributes?.seating} Seater
          </Text>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default Specifications;
