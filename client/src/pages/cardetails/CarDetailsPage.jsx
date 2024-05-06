import { Container } from "@chakra-ui/react";
import Specifications from "./Specifications";
import { useParams } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import Hero from "./Hero";
import Summary from "./Summary";
// import Summary2 from "../../components/Summary2";
import KeyFeatures from "./KeyFeatures";
import Hero2 from "./Hero";
import ProsAndCons from "./ProsAndCons";
// import APIClient from "../../sendRequest";
import { useQuery } from "@tanstack/react-query";
// import ReactMarkdown from "react-markdown";
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
  // console.log(data);

  return (
    <>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data && (
            <Container maxWidth={"1050"} marginInline={"auto"}>
              <Hero2 data={data} />
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
