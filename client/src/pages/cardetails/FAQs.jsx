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
import HeadingText from "@components/HeadingText";
import QuestionText from "@components/QuestionText";

const FAQs = ({ data }) => {
  const { t } = useTranslation();
  const currentLang = useSelector((state) => state.entities.language);

  const carData = data[0];
  console.log(carData);

  const title = currentLang == "en" ? carData?.title : carData?.title_hindi;

  const faqArray = carData.faq;

  const renderFAQCategory = (categoryName, categoryData) => {
    if (!categoryData || categoryData.length === 0) return null;
    return (
      <AccordionItem
        key={uuid()}
        border={"1px solid var(--color-border)"}
        _first={{
          borderTopRadius: "8px", // Apply border radius to the first item
        }}
        _last={{
          borderBottomRadius: "8px", // Apply border radius to the last item
        }}
        _notFirst={{
          borderTopWidth: "0", // Remove top border from all items except the first
        }}
      >
        <Heading as={"h2"} fontSize="lg">
          <AccordionButton padding="0.7rem">
            <Box as="span" flex="1" textAlign="left" fontSize="lg">
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
              {/* {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} */}
            </Box>
            <AccordionIcon boxSize="1.5rem" />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4} fontSize="md">
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

  if (faqArray.length > 0) {
    const categories = Object.keys(faqArray[0]).filter((key) => key !== "_id");

    return (
      <Box marginBottom={"8"}>
        <HeadingText>{t("faq.title", { title })}</HeadingText>
        <Accordion allowToggle variant="enclosed">
          {categories.map((category) =>
            renderFAQCategory(category, faqArray[0][category])
          )}
        </Accordion>
      </Box>
    );
  } else {
    return null;
  }
};

export default FAQs;
