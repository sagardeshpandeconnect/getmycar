import { Box } from "@chakra-ui/react";
import useFetch from "../hooks/useFetch";
import Card from "../components/ui/Card";
import Carousel from "../components/layout/Carousel";

const UpcomingCars = () => {
  const { data, loading, error } = useFetch(
    // "http://localhost:1337/api/cars?filters[featureds][type][$eq]=Upcoming&populate=*"
    "http://localhost:3001/featured/upcoming"
  );

  return (
    <Carousel>
      {error
        ? "Something went wrong!"
        : loading
        ? "loading.........."
        : data?.map((item, sid) => (
            <Box
              key={item._id}
              boxSize="full"
              // shadow="md"
              flex="none"
              // padding={2}
            >
              <Card
                // title={item.attributes.title}
                // price={item.attributes.price}
                // img={
                //   "http://localhost:1337" +
                //   data[sid]?.attributes?.image?.data[0]?.attributes?.url
                // }
                title={item.title}
                price={item.specifications.price}
                img={item.image}
              />
            </Box>
          ))}
    </Carousel>
  );
};

export default UpcomingCars;
