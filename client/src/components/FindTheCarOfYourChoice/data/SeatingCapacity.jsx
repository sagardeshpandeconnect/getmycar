import { Flex, Button, Box, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Wrapper from "../../layout/Wrapper";

const seats = [5, 6, 7, 8];

const SeatingCapacity = () => {
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
      {seats.map((seat) => {
        return (
          <Link
            to={`/new/${seat}-seater-cars`}
            key={seat}
            state={{ seat: `${seat}` }}
          >
            <Button
              colorScheme="teal"
              variant="outline"
              // paddingX={"10"}
              borderRadius={"full"}
            >
              {seat} Seater
            </Button>
          </Link>
        );
      })}
    </SimpleGrid>
    // </Wrapper>
  );
};

export default SeatingCapacity;
