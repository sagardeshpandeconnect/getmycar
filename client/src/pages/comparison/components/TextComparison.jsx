import { useState } from "react";
import { useSelector } from "react-redux";
import {
  Collapse,
  Box,
  Text,
  Heading,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Flex,
  Button,
} from "@chakra-ui/react";
import { convertPrice } from "@utils/convertPrice";
import { textCombiner } from "@utils/textCombiner";

const TextComparison = () => {
  const comparisonStore = useSelector((state) => state.entities.comparison);
  const [show, setShow] = useState(false);

  const handleToggle = function () {
    setShow((showing) => !showing);
  };
  const titleText = textCombiner(comparisonStore, "title");

  return (
    <>
      <Collapse startingHeight={20} in={show}>
        <Box>
          <Text>
            CarWale brings you comparison of
            {titleText}.
            {comparisonStore.map((car, index) => {
              const convertedPrice = convertPrice(car.specifications.price);
              return index === 0
                ? ` The ${car.title} price is Rs. ${convertedPrice}`
                : index === comparisonStore.length - 1
                ? ` and the ${car.title} price is ${convertedPrice}.`
                : `, the ${car.title} price is ${convertedPrice}`;
            })}
            {comparisonStore.map((car, index) => {
              return index === 0
                ? ` The ${car.title} is available in ${
                    car.specifications.engine
                  }
                   cc engine with ${
                     car.specifications.fueltype.length
                   } fuel type options: ${car.specifications.fueltype.map(
                    (fuel, index) => {
                      return index === 0
                        ? `  ${fuel}`
                        : index === car.specifications.fueltype.length - 1
                        ? ` and ${fuel}`
                        : `, ${fuel}`;
                    }
                  )} `
                : index === comparisonStore.length - 1
                ? ` and the ${car.title} is available in ${
                    car.specifications.engine
                  }
                   cc engine with ${
                     car.specifications.fueltype.length
                   } fuel type options: ${car.specifications.fueltype.map(
                    (fuel, index) => {
                      return index === 0
                        ? `  ${fuel}`
                        : index === car.specifications.fueltype.length - 1
                        ? ` and ${fuel}.`
                        : `, ${fuel}`;
                    }
                  )} `
                : ` , the ${car.title} is available in ${
                    car.specifications.engine
                  }
                   cc engine with ${
                     car.specifications.fueltype.length
                   } fuel type options: ${car.specifications.fueltype.map(
                    (fuel, index) => {
                      return index === 0
                        ? `  ${fuel}`
                        : index === car.specifications.fueltype.length - 1
                        ? ` and ${fuel}.`
                        : `, ${fuel}`;
                    }
                  )} `;
            })}
            {comparisonStore.map((car, index) => {
              return index === 0
                ? `. ${car.title} provides the mileage of ${car.specifications.mileage}`
                : index === comparisonStore.length - 1
                ? ` and ${car.title} provides the mileage of ${car.specifications.mileage}.`
                : ` ,${car.title} provides the mileage of ${car.specifications.mileage}`;
            })}
          </Text>
        </Box>
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
                <Th>Exter</Th>
                <Th>Punch</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Price</Td>
                <Td>Rs. 6.00 Lakh</Td>
                <Td>Rs. 6.00 Lakh</Td>
              </Tr>
              <Tr>
                <Td>Engine Capacity</Td>
                <Td>1197 cc</Td>
                <Td>1199 cc</Td>
              </Tr>
              <Tr>
                <Td>Power</Td>
                <Td>82 bhp</Td>
                <Td>87 bhp</Td>
              </Tr>
              <Tr>
                <Td>Transmission</Td>
                <Td>Manual</Td>
                <Td>Manual</Td>
              </Tr>
              <Tr>
                <Td>Fuel Type</Td>
                <Td>Petrol</Td>
                <Td>Petrol</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Collapse>
      <Flex justifyContent={"flex-end"}>
        <Button
          colorScheme="messenger"
          variant="link"
          size="sm"
          onClick={handleToggle}
          marginTop="0.25rem"
          marginBottom="1rem"
          backgroundColor={"white"}
        >
          {show ? "Collapse" : "Read More"}
        </Button>
      </Flex>
    </>
  );
};

export default TextComparison;
