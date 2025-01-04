import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Text, Grid, Box } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import { useQuery } from "@tanstack/react-query";
import NewCarCard from "@pages/specificbrand/NewCarCard";

const FilteredCarsPage = () => {
  const location = useLocation();
  const price = location.state.price;
  const bodyType = location.state.bodyType;
  const fuelType = location.state.fuelType;
  const transmission = location.state.transmission;
  const seat = location.state.seat;

  const [url, setUrl] = useState("");

  useEffect(() => {
    if (location.state.price) {
      const convertedPrice = location.state.price * 100000;
      setUrl(`/newcars/price/${convertedPrice}`);
    }
    if (location.state.bodyType) {
      setUrl(`/bodytype/${bodyType}`);
    }
    if (location.state.fuelType) {
      setUrl(`/fueltype/${fuelType}`);
    }
    if (location.state.transmission) {
      setUrl(`/transmission/${transmission}`);
    }
    if (location.state.seat) {
      setUrl(`/newcars/seatingcapacity/${seat}`);
    }
  }, [location.state]);
  console.log(url);

  const getCarsByFilterType = async function () {
    return getData(url);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [url],
    queryFn: getCarsByFilterType,
  });

  return (
    <>
      {data && <Text>{data.length} Cars Found</Text>}
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
        }}
      >
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data.map((car) => {
              return <NewCarCard carData={car} key={car._id} />;
            })}
      </Grid>
    </>
  );
};

export default FilteredCarsPage;
