import React from "react";
import { Accordion } from "@chakra-ui/react";
import useFetch from "../../hooks/useFetch";
import SelectCarModalAccordionSubHeading from "./SelectCarModalAccordionSubHeading";

const SelectCarModalAccordion = () => {
  const { data, loading, error } = useFetch("http://localhost:3001/brands");
  return (
    <div>
      <Accordion allowToggle>
        {error
          ? "Something went wrong!"
          : loading
          ? "loading.........."
          : data?.map((brand, sid) => {
              return (
                <SelectCarModalAccordionSubHeading
                  key={brand._id}
                  // id={data[sid].id}
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
      </Accordion>
    </div>
  );
};

export default SelectCarModalAccordion;
