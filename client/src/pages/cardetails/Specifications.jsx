import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Flex, Grid, Text } from "@chakra-ui/react";
import {
  CurrencyIcon,
  EngineIcon,
  FuelTypeIcon,
  SeatingCapacityIcon,
  TransmissionIcon,
  MileageIcon,
} from "@assets/Icons";
import { textCombiner } from "@utils/textCombiner";
import SpecsWrapper from "./SpecsWrapper";
import { convertPrice } from "@utils/convertPrice";
import HeadingText from "@components/ui/HeadingText";

const Specifications = ({ data }) => {
  const { t } = useTranslation();
  const currentLang = useSelector((state) => state.entities.language); // Get language from Redux store

  const carData = data[0];
  const {
    specifications: {
      price,
      engine,
      mileage,
      fueltype,
      fueltype_hindi,
      transmission,
      transmission_hindi,
      seatingcapacity,
    } = {},
    title,
    title_hindi,
  } = carData;

  const getText = (valueEn, valueHi) =>
    currentLang === "en"
      ? textCombiner(valueEn, currentLang)
      : textCombiner(valueHi, currentLang);

  const specsList = [
    {
      icon: <CurrencyIcon />,
      label: t("specifications.price"),
      value: `Rs. ${convertPrice(price, currentLang)} ${
        currentLang === "en" ? "Onwards" : "से आगे"
      }`,
    },
    {
      icon: <EngineIcon />,
      label: t("specifications.engine"),
      value: `${engine} ${currentLang === "en" ? "cc" : "सीसी"}`,
    },
    {
      icon: <MileageIcon />,
      label: t("specifications.mileage"),
      value: `${mileage} ${currentLang === "en" ? "kmpl" : "किमी प्रति लीटर"}`,
    },
    {
      icon: <FuelTypeIcon />,
      label: t("specifications.fuelType"),
      value: getText(fueltype, fueltype_hindi),
    },
    {
      icon: <TransmissionIcon />,
      label: t("specifications.transmission"),
      value: getText(transmission, transmission_hindi),
    },
    {
      icon: <SeatingCapacityIcon />,
      label: t("specifications.seatingCapacity"),
      value: `${seatingcapacity} ${currentLang === "en" ? "Seater" : "सीटर"}`,
    },
  ];

  return (
    <Flex direction={"column"} marginBottom={"8"}>
      <HeadingText>
        {currentLang === "en" ? title : title_hindi}
        {t("specifications.specifications")}
      </HeadingText>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        spacing="2px"
      >
        {specsList.map((spec, index) => (
          <SpecsWrapper key={index}>
            <Flex alignItems={"center"} gap={1} color="#6F6F6F">
              {spec.icon}
              <Text fontSize="sm">{spec.label}</Text>
            </Flex>
            <Text fontSize="md">{spec.value}</Text>
          </SpecsWrapper>
        ))}
      </Grid>
    </Flex>
  );
};

export default Specifications;
