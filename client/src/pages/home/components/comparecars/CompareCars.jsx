import ComponentHeading from "@components/ui/HeadingText";
import Wrapper from "@components/layout/Wrapper";
import ComparionCardParent from "./ComparionCardParent";
import Carousel from "@components/layout/Carousel";
import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const data = [
  ["swift", "fronx"],
  ["brezza", "exter"],
  ["creta", "seltos"],
  ["scorpio", "exter"],
  ["fronx", "creta"],
];

const dataArrLength = data?.length;
const newArr = data.map((item) => {
  return [...item, "dd"];
});
// console.log(newArr);

const CompareCars = () => {
  const { t } = useTranslation();

  const noOfSlidesInView = useBreakpointValue({ base: 2, lg: 3 });
  return (
    <Wrapper>
      <ComponentHeading>{t("compareCars.heading")}</ComponentHeading>
      <Carousel
        dataArrLength={dataArrLength}
        noOfSlidesInView={noOfSlidesInView}
      >
        {data?.map((item, index) => (
          <Box
            key={index}
            flex="none"
            padding={1}
            width={{ base: "18em", lg: "full" }}
          >
            <ComparionCardParent titleSlugs={item} />
          </Box>
        ))}
      </Carousel>
    </Wrapper>
  );
};

export default CompareCars;
