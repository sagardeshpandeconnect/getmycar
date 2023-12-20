import React from "react";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import SingleBrand from "../SingleBrand/SingleBrand";
// import "./BrandsBanner.css";
import useFetch from "../../hooks/useFetch";
import Wrapper from "../layout/Wrapper";

const BrandsBanner = () => {
  const { data, loading, error } = useFetch(
    // "http://localhost:1337/api/brands?populate=*"
    "http://localhost:3001/brands"
  );
  return (
    <Wrapper>
      <Heading as="h3" size="md" fontWeight={"medium"}>
        All Brands
      </Heading>
      <SimpleGrid
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        justifyContent="center"
        alignItems="center"
        outline={"1px"}
      >
        {error
          ? "Something went wrong!"
          : loading
          ? "loading.........."
          : data?.map((brand, sid) => {
              return (
                <SingleBrand
                  key={brand._id}
                  brandId={brand._id}
                  // title={car.attributes.title}
                  title={brand.title}
                  brandSlug={brand.brandSlug}
                  // img={
                  //   "http://localhost:1337" +
                  //   data[sid]?.attributes?.image?.data?.attributes?.url
                  // }
                  img={brand.image}
                />
              );
            })}
      </SimpleGrid>
    </Wrapper>
  );
};

export default BrandsBanner;
