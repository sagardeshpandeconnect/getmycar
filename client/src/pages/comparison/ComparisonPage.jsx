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
  Text,
} from "@chakra-ui/react";
// import { textCombiner } from "@utils/textCombiner";
import { convertPrice } from "@utils/convertPrice";
import TextComparison from "./components/TextComparison";
import CardRow from "./components/CardRow";
import SelectCar from "./components/SelectCar";
import ComparisonCard from "./components/ComparisonCard";

const ComparisonPage = () => {
  const comparisonStore = useSelector((state) => state.entities.comparison);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Effect is running");
    return () => {
      dispatch(resetStore());
      // console.log("i am resetting the state");
    };
  }, [dispatch]);
  console.log(comparisonStore);

  const [show, setShow] = useState(false);

  const handleToggle = function () {
    setShow((showing) => !showing);
  };

  // const handleRemove = function (carId) {
  //   console.log(carId);
  // };
  const handleRemove = function (carId) {
    dispatch(removeFromComparison(carId));
    console.log(`${carId} is removed from comparison`);
    console.log(comparisonStore.length);
  };

  //   const handleRemove = function (carId) {
  //     console.log(carId);
  //   };

  const fixedValue = 4;
  let dynamicValue = comparisonStore.length;
  const numberOfOccurrences = fixedValue - dynamicValue;

  // Array to store the dynamically created components
  const components = [];

  // Render the component dynamically based on the number of occurrences
  for (let i = 0; i < numberOfOccurrences; i++) {
    components.push(<SelectCar key={i} />); // Add your component to the array
  }

  // const titleText = textCombiner(comparisonStore, "title");
  // console.log(titleText);

  return (
    <div>
      <Wrapper>
        <HStack>
          {comparisonStore &&
            comparisonStore.map((car, index) => {
              // const carData = car[0];
              return (
                <Box key={index}>
                  <Heading as="h1" size="lg">
                    {car.title}
                    {index < comparisonStore.length - 1 ? " Vs" : ""}
                  </Heading>
                </Box>
              );
            })}
        </HStack>

        <TextComparison />

        <CardRow />

        {/* <Grid templateColumns="repeat(4, 1fr)">
          {comparisonStore &&
            comparisonStore.map((car) => {
              // let car = sinlgeCar[0];
              return (
                <ComparisonCard
                  title={car.title}
                  price={car?.specifications?.price}
                  img={car.image}
                  key={car._id}
                  carId={car._id}
                  handleRemove={handleRemove}
                />
              );
            })}
          <Flex>
            {comparisonStore.length < 4 && (
              <Flex width={"100%"}>{components}</Flex>
            )}
          </Flex>
        </Grid> */}
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
