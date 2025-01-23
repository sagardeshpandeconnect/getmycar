import { Link } from "react-router-dom";
import { Button, SimpleGrid } from "@chakra-ui/react";

const seats = [5, 6, 7, 8];

const SeatingCapacity = () => {
  return (
    <SimpleGrid
      border="2px"
      padding={"10"}
      borderColor="gray.200"
      minChildWidth="36"
      spacing="5"
      backgroundColor={"#f9f9f9"}
    >
      {seats.map((seat) => {
        return (
          <Link
            to={`/new/${seat}-seater-cars`}
            key={seat}
            state={`/newcars/seatingcapacity/${seat}`}
          >
            <Button colorScheme="teal" variant="outline" borderRadius={"full"}>
              {seat} Seater
            </Button>
          </Link>
        );
      })}
    </SimpleGrid>
  );
};

export default SeatingCapacity;
