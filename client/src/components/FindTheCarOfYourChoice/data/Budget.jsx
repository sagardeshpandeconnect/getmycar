import React from "react";
import { Flex, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Wrapper from "../../layout/Wrapper";

// const budgets = [
//   "Under 5 Lakh",
//   "Under 6 Lakh",
//   "Under 7 Lakh",
//   "Under 8 Lakh",
//   "Under 10 Lakh",
//   "Under 15 Lakh",
//   "Under 20 Lakh",
//   "Under 25 Lakh",
//   "Under 30 Lakh",
//   "Luxary Cars",
// ];
const prices = [5, 6, 7, 8, 10, 15, 20, 25, 30];

const Budget = () => {
  return (
    // <Wrapper>
    <SimpleGrid
      border="2px"
      padding={"10"}
      borderColor="gray.200"
      minChildWidth="36"
      spacing="5"
      // columns={{ sm: 1, md: 2, lg: 3 }}
      backgroundColor={"#f9f9f9"}
    >
      {prices.map((price) => {
        return (
          <Link
            to={`/new/best-cars-under-${price}-lakh`}
            key={price}
            state={{ price: `${price}` }}
          >
            <Button
              colorScheme="teal"
              variant="outline"
              // paddingX={"10"}
              borderRadius={"full"}
            >
              Under {price} Lakh
            </Button>
          </Link>
        );
      })}
      <Link>
        <Button
          colorScheme="teal"
          variant="outline"
          // paddingX={"10"}
          borderRadius={"full"}
        >
          Luxary Cars
        </Button>
      </Link>
    </SimpleGrid>
    // </Wrapper>
  );
};

export default Budget;
