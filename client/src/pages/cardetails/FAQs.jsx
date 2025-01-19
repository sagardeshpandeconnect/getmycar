import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import HeadingText from "@components/ui/HeadingText";
import QuestionText from "@components/ui/QuestionText";

const FAQs = ({ data }) => {
  const { t } = useTranslation();
  const currentLang = useSelector((state) => state.entities.language);

  const carData = data[0];
  const title = currentLang === "en" ? carData?.title : carData?.title_hindi;

  // Select the appropriate FAQ object based on the current language
  const faqObject = currentLang === "en" ? carData.faq[0] : carData.faq[1];

  const renderFAQCategory = (categoryName, categoryData) => {
    if (!categoryData || categoryData.length === 0) return null;
    return (
      <AccordionItem
        key={uuid()}
        border={"1px solid var(--color-border)"}
        _first={{
          borderTopRadius: "8px",
        }}
        _last={{
          borderBottomRadius: "8px",
        }}
        _notFirst={{
          borderTopWidth: "0",
        }}
      >
        <Heading as={"h2"} fontSize="lg">
          <AccordionButton padding="0.7rem">
            <Box as="span" flex="1" textAlign="left" fontSize="lg">
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </Box>
            <AccordionIcon boxSize="1.5rem" />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={1} fontSize="md">
          {categoryData.map((faq) => (
            <Box key={uuid()}>
              <QuestionText fontSize="lg">
                {currentLang === "en" ? (
                  <span>Question: {faq.question}</span>
                ) : (
                  <span>प्रश्न: {faq.question_hindi}</span>
                )}
              </QuestionText>
              <Text paddingBottom={"4"} fontSize="md" lineHeight="1.8">
                {currentLang === "en" ? (
                  <span>Answer: {faq.answer}</span>
                ) : (
                  <span>उत्तर: {faq.answer_hindi}</span>
                )}
              </Text>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    );
  };

  if (faqObject) {
    const categories = Object.keys(faqObject).filter((key) => key !== "_id");

    return (
      <Box marginBottom={"8"}>
        <HeadingText>{t("faq.title", { title })}</HeadingText>
        <Accordion allowToggle variant="enclosed">
          {categories.map((category) =>
            renderFAQCategory(category, faqObject[category])
          )}
        </Accordion>
      </Box>
    );
  } else {
    return null;
  }
};

export default FAQs;
