import useFetch from "../../../hooks/useFetch";
import { Text, SimpleGrid, Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// !NEED TO ARRANGE THE JSON DATA IN PROPER ORDER

const FuelType = () => {
  const { data, loading, error } = useFetch("http://localhost:3001/fueltype");
  console.log(data);
  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} backgroundColor={"#f9f9f9"}>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading.........."
          : data?.map((item) => (
              <Box key={item._id}>
                <Link
                  to={`/new/${item.fuelSlug}`}
                  state={{ fuelType: `${item.title}` }}
                >
                  <Flex
                    key={item._id}
                    border="1px"
                    borderColor="gray.600"
                    alignItems={"center"}
                    justifyContent={"flex-start"}
                  >
                    {/* <Box boxSize={"md"} maxHeight={"14"} > */}
                    <Image
                      width={"20"}
                      objectFit="contain"
                      rounded="lg"
                      src={item.image}
                      alt={item.title}
                      marginX={{ sm: 28, md: 16, lg: 10 }}
                      marginY={"6"}
                    />
                    {/* </Box> */}
                    <Box>
                      <Text>{item.title}</Text>
                    </Box>
                  </Flex>
                </Link>
              </Box>
            ))}
      </SimpleGrid>
    </div>
  );
};

export default FuelType;
