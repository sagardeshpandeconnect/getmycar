import { Container } from "@chakra-ui/react";
import Specifications from "./Specifications";
import { useParams } from "react-router-dom";
import Summary from "./Summary";
import KeyFeatures from "./KeyFeatures";
import Hero from "./Hero";
import ProsAndCons from "./ProsAndCons";
import { useQuery } from "@tanstack/react-query";
import FAQs from "./FAQs";
import { getData } from "@services/apiClient";

const CarDetailsPage = () => {
  const brandSlug = useParams().brandSlug;
  const titleSlug = useParams().titleSlug;

  const getCarDetails = async function () {
    return getData(`/newcars/${brandSlug}/${titleSlug}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${brandSlug}/${titleSlug}`],
    queryFn: getCarDetails,
  });
  console.log(data);

  return (
    <>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data && (
            <Container maxWidth={"1050"} marginInline={"auto"}>
              <Hero data={data} />
              <Specifications data={data} />
              <KeyFeatures data={data} />
              <ProsAndCons data={data} />
              <Summary data={data} />
              <FAQs data={data} />
            </Container>
          )}
    </>
  );
};

export default CarDetailsPage;
