import React from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Text,
} from "@chakra-ui/react";
import { v4 as uuid } from "uuid";

const FAQs = ({ data }) => {
  const faqArray = data[0].faq;
  return (
    <>
      <Text fontSize="2xl">FAQs About {data[0].title} </Text>
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
            {/* {data[0].faq[0].price[0].question} */}
            {faqArray[0].price.map((faq) => {
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
                Performance
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {faqArray[0].performance.map((faq) => {
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
            {faqArray[0].specifications.map((faq) => {
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
            {faqArray[0].features.map((faq) => {
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
            {faqArray[0].safety.map((faq) => {
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
};

export default FAQs;
