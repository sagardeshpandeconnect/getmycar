import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  chakra,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import HeadingText from "@components/HeadingText";
import QuestionText from "@components/QuestionText";

const FAQs = ({ data }) => {
  const faqArray = data[0].faq;
  // console.log(faqArray);

  const renderFAQCategory = (categoryName, categoryData) => {
    if (!categoryData || categoryData.length === 0) return null;
    return (
      <AccordionItem key={uuid()}>
        <chakra.h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </chakra.h2>
        <AccordionPanel pb={4}>
          {categoryData.map((faq) => (
            <Box key={uuid()}>
              <QuestionText>Question: {faq.question}</QuestionText>
              <Text paddingBottom={"4"}>Answer: {faq.answer}</Text>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    );
  };

  if (faqArray.length > 0) {
    const categories = Object.keys(faqArray[0]).filter((key) => key !== "_id");
    // console.log(categories);

    return (
      <>
        <HeadingText>FAQs About {data[0].title}</HeadingText>
        <Accordion allowToggle>
          {categories.map((category) =>
            renderFAQCategory(category, faqArray[0][category])
          )}
        </Accordion>
      </>
    );
  } else {
    return null;
  }
};

export default FAQs;
