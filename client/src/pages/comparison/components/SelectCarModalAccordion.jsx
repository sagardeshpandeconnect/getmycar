import { useQuery } from "@tanstack/react-query";
import { Accordion } from "@chakra-ui/react";
import { getData } from "@services/apiClient";
import SelectCarModalAccordionSubHeading from "./SelectCarModalAccordionSubHeading";

const SelectCarModalAccordion = () => {
  const getAllBrands = async function () {
    return getData(`/brands`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`brands`],
    queryFn: getAllBrands,
  });

  return (
    <div>
      <Accordion allowToggle>
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((brand) => {
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
