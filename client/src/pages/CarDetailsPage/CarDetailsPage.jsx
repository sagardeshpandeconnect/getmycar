import { Container } from "@chakra-ui/react";
import Specifications from "./Specifications";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Hero from "./Hero";
import Summary from "../../components/Summary";
import Summary2 from "../../components/Summary2";

const CarDetailsPage = () => {
  const brandSlug = useParams().brandSlug;
  const titleSlug = useParams().titleSlug;
  console.log(titleSlug);
  // const carId = parseInt(useParams().id);
  // console.log(carId);

  const { data, loading, error } = useFetch(
    // `http://localhost:1337/api/cars/${id}?populate=*`
    `http://localhost:3001/newcars/${brandSlug}/${titleSlug}`
  );
  // console.log(data);

  return (
    <div>
      {/* {error ? (
        "Something went wrong!"
      ) : loading ? (
        "loading"
      ) : (
        <Container maxWidth={"1050"} marginInline={"auto"}>
          <Hero data={data} />
          <Specifications data={data} />
          <Summary data={data} />
          <Summary2 data={data} />
        </Container>
      )} */}
      {error
        ? "Something went wrong!"
        : loading
        ? "loading"
        : data && (
            <Container maxWidth={"1050"} marginInline={"auto"}>
              <Hero data={data} />
              <Specifications data={data} />
              <Summary data={data} />
              <Summary2 data={data} />
            </Container>
          )}
      {/* {data && (
        <Container maxWidth={"1050"} marginInline={"auto"}>
          <Hero data={data} />
          <Specifications data={data} />
          <Summary data={data} />
          <Summary2 data={data} />
        </Container>
      )} */}
    </div>
  );
};

export default CarDetailsPage;
