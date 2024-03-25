import { Flex, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import ComparisonCard from "./ComparisonCard";
import SelectCar from "./SelectCar";
import { removeFromComparison } from "@features/comparison/comparisonSlice";

const CardRow = () => {
  const comparisonStore = useSelector((state) => state.entities.comparison);
  console.log(comparisonStore);
  const dispatch = useDispatch();

  //   const handleRemove = function (carId) {
  //     console.log(carId);
  //   };
  const handleRemove = function (carId) {
    dispatch(removeFromComparison(carId));
  };

  const fixedValue = 4;
  let dynamicValue = comparisonStore.length;
  const numberOfOccurrences = fixedValue - dynamicValue;

  // Array to store the dynamically created components
  const components = [];

  // Render the component dynamically based on the number of occurrences
  for (let i = 0; i < numberOfOccurrences; i++) {
    components.push(<SelectCar key={i} />); // Add your component to the array
  }

  return (
    <Grid templateColumns="repeat(4, 1fr)">
      {comparisonStore &&
        comparisonStore.map((sinlgeCar) => {
          let car = sinlgeCar[0];
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
        {comparisonStore.length < 4 && <Flex width={"100%"}>{components}</Flex>}
      </Flex>
    </Grid>
  );
};

export default CardRow;
