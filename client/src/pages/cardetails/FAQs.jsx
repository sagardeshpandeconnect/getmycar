// TODO: Try to render this data using Recursion

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";
import HeadingText from "@components/HeadingText";
import QuestionText from "@components/QuestionText";

const FAQs = ({ data }) => {
  const faqArray = data[0].faq;
  console.log(faqArray);
  if (faqArray.length > 0) {
    return (
      <>
        <HeadingText>FAQs About {data[0].title} </HeadingText>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Price
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faqArray[0].price.map((faq) => {
                return (
                  <Box key={uuid()}>
                    <QuestionText>Q:{faq.question}</QuestionText>
                    <Text paddingBottom={"4"}>{faq.answer}</Text>
                  </Box>
                );
              })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Performance
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faqArray[0].performance &&
                faqArray[0].performance.map((faq) => {
                  return (
                    <Box key={uuid()}>
                      <Text>Q:{faq.question}</Text>
                      <Text paddingBottom={"4"}>{faq.answer}</Text>
                    </Box>
                  );
                })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Specifications
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faqArray[0].specifications &&
                faqArray[0].specifications.map((faq) => {
                  return (
                    <Box key={uuid()}>
                      <Text>Q:{faq.question}</Text>
                      <Text paddingBottom={"4"}>{faq.answer}</Text>
                    </Box>
                  );
                })}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Features
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faqArray[0].features &&
                faqArray[0].features.map((faq) => {
                  return (
                    <Box key={uuid()}>
                      <Text>Q:{faq.question}</Text>
                      <Text paddingBottom={"4"}>{faq.answer}</Text>
                    </Box>
                  );
                })}
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Safety
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {faqArray[0].safety &&
                faqArray[0].safety.map((faq) => {
                  return (
                    <Box key={uuid()}>
                      <Text>Q:{faq.question}</Text>
                      <Text paddingBottom={"4"}>{faq.answer}</Text>
                    </Box>
                  );
                })}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </>
    );
  } else {
    return null;
  }
};

export default FAQs;
