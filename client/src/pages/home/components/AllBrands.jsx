import { SimpleGrid } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@services/apiClient";
import Wrapper from "@components/layout/Wrapper";
import SingleBrand from "./SingleBrand";
import ComponentHeading from "@components/ui/HeadingText";
import { useTranslation } from "react-i18next";

const AllBrands = () => {
  const { t } = useTranslation();

  const getAllBrands = async function () {
    return getData(`/brands`);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: [`brands`],
    queryFn: getAllBrands,
  });
  // console.log(data);
  return (
    <Wrapper>
      <ComponentHeading>{t("allBrands.heading")}</ComponentHeading>
      <SimpleGrid
        templateColumns={{
          base: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        }}
        borderTop={"var(--grid-border)"}
        borderLeft={"var(--grid-border)"}
        marginY={"2"}
      >
        {error
          ? "Something went wrong!"
          : isLoading
          ? "loading.........."
          : data?.map((brand) => {
              return <SingleBrand key={brand._id} brandData={brand} />;
            })}
      </SimpleGrid>
    </Wrapper>
  );
};

export default AllBrands;
