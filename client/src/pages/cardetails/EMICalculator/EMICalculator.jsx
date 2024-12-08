import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { calculateEMI } from "./calculateEMI";
import { Box, Flex, Grid, GridItem, Input, Text } from "@chakra-ui/react";

const EMICalculator = ({ onRoadPrice, loanData, title }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  // console.log(loanData);
  const [userInput, setUserInput] = useState({
    downPayment: Number(((loanData.minDownPayment * 110) / 100).toFixed()),
    interestRate: 10,
    tenure: 5,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return { ...prevInput, [inputIdentifier]: newValue };
    });
  }

  const RESULT = calculateEMI(onRoadPrice, { ...userInput });

  console.log(RESULT);

  return (
    <>
      <Box padding={"3"} backgroundColor={"#EFEFEF"} borderTopRadius={"md"}>
        <Text fontSize="xl" as="b" color={"gray.700"}>
          Choose your EMI options
        </Text>
      </Box>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}>
        <GridItem w="100%" padding={"3"}>
          <Text marginBottom={{ base: "8px", lg: "16px" }}>
            Down Payment : Rs.{userInput.downPayment}
          </Text>
          <Input
            type="number"
            value={userInput.downPayment}
            onChange={(event) =>
              handleChange("downPayment", +event.target.value)
            }
            placeholder="Here is a sample placeholder"
            size="sm"
          />

          <input
            type="range"
            onChange={(event) =>
              handleChange("downPayment", +event.target.value)
            }
            min={loanData.minDownPayment}
            max={loanData.maxDownPayment}
            step={1}
            value={userInput.downPayment}
            style={{ width: "100%", height: "3rem" }}
          />
          <Text marginBottom={{ base: "8px", lg: "16px" }}>
            Your loan amount will be : Rs.{RESULT.loanAmount}
          </Text>

          <Flex gap={"0.5rem"}>
            <div>
              <Text mb="8px"> Tenure : {userInput.tenure} Years</Text>

              <input
                type="range"
                onChange={(event) =>
                  handleChange("tenure", +event.target.value)
                }
                min={1}
                max={7}
                step={0.5}
                value={userInput.tenure}
                style={{ width: "100%", height: "3rem" }}
              />

              <Input
                type="number"
                value={userInput.tenure}
                onChange={(event) =>
                  handleChange("tenure", +event.target.value)
                }
                placeholder="Here is a sample placeholder"
                size="sm"
              />
            </div>
            <div>
              <Text mb="8px"> Interest : {userInput.interestRate} p.a.</Text>

              <input
                type="range"
                onChange={(event) =>
                  handleChange("interestRate", +event.target.value)
                }
                min={8}
                max={20}
                step={0.25}
                style={{ width: "100%", height: "3rem" }}
                value={userInput.interestRate}
              />

              <Input
                type="number"
                value={userInput.interestRate}
                onChange={(event) =>
                  handleChange("interestRate", +event.target.value)
                }
                placeholder="Here is a sample placeholder"
                size="sm"
              />
            </div>
          </Flex>
          {/* <h2>{RESULT.EMI.toString()}</h2> */}
        </GridItem>
        {/* <Center height="500px">
          <Divider orientation="vertical" borderWidth={"medium"} />
        </Center> */}
        <GridItem w="100%" borderLeft={{ lg: "4px solid #D0D0D0" }}>
          <Box padding={"3"} borderBottom={"1.5px solid #D0D0D0"}>
            <Text fontSize="xl" as="b" color={"gray.600"}>
              EMI- Rs. {RESULT.EMI.toString()} for {userInput.tenure} Years
            </Text>
          </Box>

          <Box
            // minWidth={"-webkit-fit-content"}
            maxWidth={"55%"}
            margin={"0 auto"}
            paddingY={"0"}
            // paddingY={"5"}
            // paddingX={"20"}
          >
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [RESULT.loanAmount, RESULT.totalInterestPayable],
                    backgroundColor: ["rgb(0, 175, 160)", "rgb(255, 153, 0)"],
                    cutout: 60,
                  },
                ],
              }}
            />
          </Box>
          <Box margin={"auto"} maxWidth={"fit-content"} paddingY={"3"}>
            <Text>Principal loan amount : {RESULT.loanAmount}</Text>
            <Text>Total interest payable : {RESULT.totalInterestPayable}</Text>
            <Text>
              Total amount payable :
              {RESULT.loanAmount + RESULT.totalInterestPayable}
            </Text>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default EMICalculator;
