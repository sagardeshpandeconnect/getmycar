import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromComparison,
  resetStore,
} from "@features/comparison/comparisonSlice";
import Wrapper from "@components/layout/Wrapper";
import { Box, HStack, Heading } from "@chakra-ui/react";
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

  // const [show, setShow] = useState(false);

  // const handleToggle = function () {
  //   setShow((showing) => !showing);
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
      </Wrapper>
    </div>
  );
};

export default ComparisonPage;
