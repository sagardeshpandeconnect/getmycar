import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Box } from "@chakra-ui/react";
import HeadingText from "@components/ui/HeadingText";
import ReadMore from "@components/layout/ReadMore";

const KeyFeatures = ({ data }) => {
  const currentLang = useSelector((state) => state.entities.language);
  const { title, title_hindi } = data;
  const keyFeaturesData =
    currentLang === "en" ? data?.keyfeatures : data?.keyfeatures_hindi;

  const { t } = useTranslation();
  // Ensure the component returns JSX or null
  return data.keyfeatures ? (
    <Box marginBottom={"5"}>
      <HeadingText>
        {currentLang === "en" ? title : title_hindi}{" "}
        {t("keyFeatures.keyFeatures")}
      </HeadingText>
      <ReadMore arrayLimit="4" shouldShowDots>
        {keyFeaturesData}
      </ReadMore>
    </Box>
  ) : null;
};

export default KeyFeatures;
