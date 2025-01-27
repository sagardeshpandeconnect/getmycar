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
import { convertPrice } from "@utils/convertPrice";
import SpecsWrapper from "@components/layout/SpecsWrapper";
import HeadingText from "@components/ui/HeadingText";

const Specifications = ({ data }) => {
  console.log(data);
  const { t } = useTranslation();
  const currentLang = useSelector((state) => state.entities.language);

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
  } = data;

  const getText = (valueEn, valueHi) =>
    currentLang === "en"
      ? textCombiner(valueEn, currentLang)
      : textCombiner(valueHi, currentLang);

  // Check if fueltype array includes "Electric"
  const isElectric = Array.isArray(fueltype) && fueltype.includes("Electric");

  const getMileageText = () => {
    if (isElectric) {
      return `${mileage} ${
        currentLang === "en" ? "Kilometre Range" : "किमी रेंज"
      }`;
    }
    return `${mileage} ${
      currentLang === "en" ? "Kilometre per Litre" : "किमी प्रति लीटर"
    }`;
  };

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
      value: getMileageText(),
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
