import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HorizontalCard3 from "../components/HorizontalCard3";
import { remove } from "../comparisonStore/compareSlice";
import ComparionCardChild from "../components/Comparison/ComparionCardChild";
import Wrapper from "../components/layout/Wrapper";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
  Button,
  Collapse,
  Flex,
  Box,
  Text,
  Grid,
  HStack,
} from "@chakra-ui/react";
import SelectCar from "../components/ui/SelectCar";
import Card2 from "../components/ui/Card2";

const ComparisonPage = () => {
  const [show, setShow] = React.useState(false);

  const handleToggle = () => setShow(!show);

  const comparison = useSelector((state) => state.compare);
  console.log(comparison);
  const dispatch = useDispatch();
  const handleRemove = (carId) => {
    dispatch(remove(carId));
  };

  const carText = comparison.reduce((accumulator, car, index, array) => {
    if (index === array.length - 1) {
      // Add 'and' before the last element
      return accumulator + " and " + car.title;
    } else if (index === 0) {
      // The first element (no comma)
      return " " + car.title;
    } else {
      // Intermediate elements with a comma
      return accumulator + ", " + car.title;
    }
  }, "");
  console.log(carText);
  return (
    <div>
      <Wrapper>
        <HStack>
          {comparison &&
            comparison.map((car, i) => {
              return (
                <Box key={car._id}>
                  <Heading as="h1" size="lg">
                    {car.title}
                    {i < comparison.length - 1 ? " Vs" : ""}
                  </Heading>
                </Box>
              );
            })}
        </HStack>
        {/* {comparison && comparison[0].title} vs
          {comparison && comparison[1].title} */}

        <Collapse startingHeight={20} in={show}>
          <Box>
            <Text>
              CarWale brings you comparison of
              {carText}. The
              {comparison &&
                comparison.map((car, index) => {
                  return index === comparison.length - 1
                    ? ` and ${car.title} price is Rs.${car.specifications.price} Lakh.`
                    : ` ${car.title} price is Rs.${car.specifications.price} Lakh.`;
                })}
              . The Hyundai Exter is available in 1197 cc engine with 2 fuel
              type options: Petrol and CNG and Tata Punch is available in 1199
              cc engine with 1 fuel type options: Petrol. Exter provides the
              mileage of 19.4 kmpl and Punch provides the mileage of 20.09 kmpl.
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
        <Grid templateColumns="repeat(4, 1fr)">
          {comparison &&
            comparison.map((car) => {
              return (
                <Card2
                  // title={item.attributes.title}
                  // price={item.attributes.price}
                  // img={
                  //   "http://localhost:1337" +
                  //   data[sid]?.attributes?.image?.data[0]?.attributes?.url
                  // }
                  title={car.title}
                  price={car?.specifications?.price}
                  img={car.image}
                  key={car._id}
                  carId={car._id}
                  handleRemove={handleRemove}
                />
              );
            })}
          <Box>{comparison.length < 4 && <SelectCar />}</Box>

          {/* <SelectCar />
          <SelectCar />
          <SelectCar /> */}
        </Grid>
      </Wrapper>
      {/* <ComparionCardChild /> */}
      {/* {comparison.map((car, index) => {
        return (
          <HorizontalCard3
            key={car.id}
            title={car.attributes.title}
            id={car.id}
            price={car.attributes.price}
            img={
              "http://localhost:1337" +
              car?.attributes?.image?.data[0]?.attributes?.url
            }
            clickHandler={() => removeFromComparison(car.id)}
            buttonPlaceholder="Remove from comparison"
          />
        );
      })} */}
    </div>
  );
};

export default ComparisonPage;
