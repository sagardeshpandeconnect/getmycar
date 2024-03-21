import { Flex, Grid, Text } from "@chakra-ui/react";
import {
  CurrencyIcon,
  EngineIcon,
  FuelTypeIcon,
  SeatingCapacityIcon,
  TransmissionIcon,
  MileageIcon,
} from "@assets/Icons";
import { textCombiner } from "@utils/textCombiner";
import SpecsWrapper from "./SpecsWrapper";

const Specifications = ({ data }) => {
  const fuelText = textCombiner(data[0].specifications?.fueltype);
  const transmissionText = textCombiner(data[0].specifications?.transmission);
  // console.log(data[0].keyfeatures);
  // console.log(data[0]);

  return (
    <Flex direction={"column"}>
      <Text fontSize="2xl">{data[0].title} Specificatons</Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        spacing="2px"
        border={"var(--grid-border)"}
        style={{ borderCollapse: "collapse" }}
      >
        <SpecsWrapper>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <CurrencyIcon />
            <Text fontSize="sm">Price</Text>
          </Flex>

          <Text fontSize="md">
            Rs. {Number(data[0].specifications?.price / 100000).toFixed(2)} Lakh
            onwards
          </Text>
        </SpecsWrapper>

        <SpecsWrapper>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <EngineIcon />
            <Text fontSize="sm">Engine</Text>
          </Flex>

          <Text fontSize="md"> {data[0].specifications?.engine} cc</Text>
        </SpecsWrapper>

        <SpecsWrapper>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <MileageIcon />
            <Text fontSize="sm">Mileage</Text>
          </Flex>

          <Text fontSize="md"> {data?.attributes?.engine} kmpl</Text>
        </SpecsWrapper>

        <SpecsWrapper>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <FuelTypeIcon />
            <Text fontSize="sm">Fuel Type</Text>
          </Flex>

          <Text fontSize="md">{fuelText}</Text>
        </SpecsWrapper>
        <SpecsWrapper>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <TransmissionIcon />
            <Text fontSize="sm">Transmission</Text>
          </Flex>
          <Text fontSize="md">{transmissionText}</Text>
        </SpecsWrapper>
        <SpecsWrapper>
          <Flex alignItems={"center"} gap={1} color="#6F6F6F">
            <SeatingCapacityIcon />
            <Text fontSize="sm">Seating Capacity</Text>
          </Flex>
          <Text fontSize="md">
            {data[0].specifications?.seatingcapacity} Seater
          </Text>
        </SpecsWrapper>
      </Grid>
    </Flex>
  );
};

export default Specifications;
