import useFetch from "../../../hooks/useFetch";
import { Text, SimpleGrid, Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SingleBodyType from "../SingleBodyType";

// !NEED TO ARRANGE THE JSON DATA IN PROPER ORDER

const BodyType = () => {
  const { data, loading, error } = useFetch("http://localhost:3001/bodytype");
  return (
    <div>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} backgroundColor={"#f9f9f9"}>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading.........."
          : data?.map((item, sid) => (
              <SingleBodyType item={item} key={item._id} />
            ))}
      </SimpleGrid>
    </div>
  );
};

export default BodyType;
