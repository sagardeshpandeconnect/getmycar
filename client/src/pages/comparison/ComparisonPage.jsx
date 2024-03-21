import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromComparison,
  resetStore,
} from "@features/comparison/comparisonSlice";
import Wrapper from "@components/Wrapper";
import {
  Box,
  Collapse,
  HStack,
  Heading,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Button,
  Grid,
  Flex,
} from "@chakra-ui/react";
const ComparisonPage = () => {
  const comparisonStore = useSelector((state) => state.entities.comparison);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Effect is running");
    return () => {
      dispatch(resetStore());
      console.log("i am resetting the state");
    };
  }, [dispatch]);
  console.log(comparisonStore);

  const [show, setShow] = useState(false);

  const handleToggle = function () {
    setShow((showing) => !showing);
  };

  const handleRemove = function (carId) {
    dispatch(removeFromComparison(carId));
  };

  return (
    <div>
      <Wrapper>
        <HStack>
          {comparisonStore &&
            comparisonStore.map((car, index) => {
              const carData = car[0];
              return (
                <Box key={index}>
                  <Heading as="h1" size="lg">
                    {carData.title}
                    {index < comparisonStore.length - 1 ? " Vs" : ""}
                  </Heading>
                </Box>
              );
            })}
        </HStack>

        <Collapse startingHeight={20} in={show}>
          <Box>
            {/* <Text>
              CarWale brings you comparison of
              {carText}. The
              {comparison &&
                comparison.map((car, index) => {
                  return index === comparison.length - 1
                    ? ` and ${car.title} price is Rs.${car.specifications.price} Lakh.`
                    : ` ${car.title} price is Rs.${car.specifications.price} Lakh.`;
                })}
              .The Hyundai Exter is available in 1197 cc engine with 2 fuel type
              options: Petrol and CNG and Tata Punch is available in 1199 cc
              engine with 1 fuel type options: Petrol. Exter provides the
              mileage of 19.4 kmpl and Punch provides the mileage of 20.09 kmpl.
            </Text> */}
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
          {/* {comparisonStore &&
            comparisonStore.map((car) => {
              return (
                <Card2
                
                  title={car.title}
                  price={car?.specifications?.price}
                  img={car.image}
                  key={car._id}
                  carId={car._id}
                  handleRemove={handleRemove}
                />
              );
            })} */}
          <Flex>
            {/* {comparisonStore.length < 4 && (
              <Flex width={"100%"}>{components}</Flex>
            )} */}
          </Flex>

          {/* <SelectCar /> */}
          {/* <SelectCar /> */}
          {/* <SelectCar />  */}
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
