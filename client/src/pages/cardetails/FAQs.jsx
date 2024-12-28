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
  const faqArray = data[0].faq;

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
            </Box>
            <AccordionIcon boxSize="1.5rem" />
          </AccordionButton>
        </Heading>
        <AccordionPanel pb={4} fontSize="md">
          {categoryData.map((faq) => (
            <Box key={uuid()}>
              <QuestionText fontSize="lg">
                Question: {faq.question}
              </QuestionText>
              <Text paddingBottom={"4"} fontSize="md" lineHeight="1.8">
                Answer: {faq.answer}
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
        <HeadingText>FAQs About {data[0].title}</HeadingText>
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
