import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { Flex, Text, Grid, Box } from "@chakra-ui/react";
import HorizontalCard3 from "../components/HorizontalCard3";
import HorizontalCard4 from "../components/ui/HorizontalCard4";

const FilteredCarsPage = () => {
  const location = useLocation();
  const price = location.state.price;
  const bodyType = location.state.bodyType;
  const fuelType = location.state.fuelType;
  const transmission = location.state.transmission;
  const seat = location.state.seat;

  console.log(location);

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (location.state.price) {
      setUrl(`http://localhost:3001/newcars/price/${price}`);
    }
    if (location.state.bodyType) {
      setUrl(`http://localhost:3001/bodytype/${bodyType}`);
    }
    if (location.state.fuelType) {
      setUrl(`http://localhost:3001/fueltype/${fuelType}`);
    }
    if (location.state.transmission) {
      setUrl(`http://localhost:3001/transmission/${transmission}`);
    }
    if (location.state.seat) {
      setUrl(`http://localhost:3001/newcars/seatingcapacity/${seat}`);
    }
  }, [location.state]);

  const { data, loading, error } = useFetch(url);
  console.log(data);

  return (
    <Box>
      {data && <Text>{data.length} Cars Found</Text>}
      <Grid
        margin={"auto"}
        templateColumns="repeat(auto-fit, minmax(500px, 1fr))"
      >
        {data &&
          data.map((car) => {
            return (
              <Flex
                flexDirection={"row"}
                // backgroundColor={"#f9f9f9"}
              >
                <HorizontalCard3
                  key={car._id}
                  // title={car.attributes.title}
                  brandSlug={car.brandSlug}
                  titleSlug={car.titleSlug}
                  title={car.title}
                  id={car._id}
                  // id={data[sid].id}
                  price={car.specifications.price}
                  // price={car.attributes.price}
                  // img={
                  //   "http://localhost:1337" +
                  //   data[sid]?.attributes?.image?.data[0]?.attributes?.url
                  // }
                  img={car.image}
                  // clickHandler={() => addToCompare(car)}
                  // buttonPlaceholder="Add to Compare"
                />
              </Flex>
            );
          })}
      </Grid>
    </Box>
  );
};

export default FilteredCarsPage;
