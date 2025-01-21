import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Container } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import Hero from "./Hero";
import Specifications from "./Specifications";
import KeyFeatures from "./KeyFeatures";
import ProsAndCons from "./ProsAndCons";
import FAQ from "./FAQ";
import Summary from "./Summary";
import Verdict from "./Verdict";

const CarDetailsPage = () => {
  const { brandSlug, titleSlug } = useParams();

  const getCarDetails = async () => {
    return getData(`/newcars/${brandSlug}/${titleSlug}`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`${brandSlug}/${titleSlug}`],
    queryFn: getCarDetails,
  });

  // Extract carData only when data is available
  const carData = data?.[0] || null;

  return (
    <>
      {error ? (
        "Something went wrong!"
      ) : (
        <Container maxWidth="1050" marginInline="auto" overflowX="hidden">
          <Hero data={carData || []} isLoading={isLoading} />
          {!isLoading && carData && (
            <>
              <Specifications data={carData} />
              <KeyFeatures data={carData} />
              <ProsAndCons data={carData} />
              <Summary data={carData} />
              <FAQ data={carData} />
              <Verdict data={carData} />
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default CarDetailsPage;
