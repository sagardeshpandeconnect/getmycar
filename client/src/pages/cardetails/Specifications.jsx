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
import { convertPrice } from "@utils/convertPrice";
import HeadingText from "@components/HeadingText";

const Specifications = ({ data }) => {
  const fuelText = textCombiner(data[0]?.specifications?.fueltype);
  // const fuelText = textCombiner(["petrol", "diesle"]);
  const transmissionText = textCombiner(data[0].specifications?.transmission);

  return (
    <Flex direction={"column"}>
      <HeadingText>{data[0].title} Specifications</HeadingText>
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
            Rs. {convertPrice(data[0].specifications.price)} onwards
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

          <Text fontSize="md"> {data[0].specifications?.mileage} kmpl</Text>
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
