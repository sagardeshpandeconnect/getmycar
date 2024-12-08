import { useState } from "react";
import { useSelector } from "react-redux";
import { Collapse, Box, Text, Flex, Button } from "@chakra-ui/react";

import { convertPrice } from "@utils/convertPrice";
import ComparisonTable from "./ComparisonTable";

const TextComparison = () => {
  const comparisonStore = useSelector((state) => state.entities.comparison);
  const [show, setShow] = useState(false);

  const handleToggle = function () {
    setShow((showing) => !showing);
  };

  return (
    <>
      <Collapse startingHeight={20} in={show}>
        <Box>
          <Text>
            CarWale brings you comparison of
            {comparisonStore.map((car, index) => {
              return index === 0
                ? ` the ${car.title}`
                : index === comparisonStore.length - 1
                ? ` and the ${car.title}.`
                : `, the ${car.title}`;
            })}
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
        <ComparisonTable />
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
