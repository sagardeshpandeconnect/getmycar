import { useSelector } from "react-redux";
import {
  Heading,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

import { convertPrice } from "@utils/convertPrice";
import { textCombiner } from "@utils/textCombiner";

const ComparisonTable = () => {
  const comparisonStore = useSelector((state) => state.entities.comparison);

  return (
    <>
      <Heading as="h2" fontSize="1.5rem">
        Exter vs Punch Comparison Overview
      </Heading>
      <TableContainer
        border={"1px"}
        borderColor="gray.200"
        borderRadius={"md"}
        marginTop={"4"}
      >
        <Table variant="simple">
          <Thead backgroundColor={"#f9f9f9"}>
            <Tr>
              <Th>Key Highlights</Th>
              {comparisonStore.map((car) => {
                return <Td key={uuid()}>{car.title}</Td>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Price</Td>
              {comparisonStore.map((car) => {
                const convertedPrice = convertPrice(car.specifications.price);
                return <Td key={uuid()}>Rs.{convertedPrice}</Td>;
              })}
            </Tr>
            <Tr>
              <Td>Engine Capacity</Td>
              {comparisonStore.map((car) => {
                return <Td key={uuid()}>{car.specifications.engine}cc</Td>;
              })}
            </Tr>
            <Tr>
              <Td>Power</Td>
              <Td>82 bhp</Td>
              <Td>87 bhp</Td>
            </Tr>
            <Tr>
              <Td>Transmission</Td>
              {comparisonStore.map((car) => {
                const transmissionText = textCombiner(
                  car.specifications?.transmission
                );

                // const convertedPrice = convertPrice(car.specifications.price);
                return <Td key={uuid()}>{transmissionText}</Td>;
              })}
            </Tr>
            <Tr>
              <Td>Fuel Type</Td>
              {comparisonStore.map((car) => {
                const fuelText = textCombiner(car.specifications?.fueltype);

                // const convertedPrice = convertPrice(car.specifications.price);
                return <Td key={uuid()}>{fuelText}</Td>;
              })}
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ComparisonTable;
