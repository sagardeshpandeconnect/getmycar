import { useRef, useState } from "react";
import {
  Grid,
  Box,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Tooltip,
} from "@chakra-ui/react";

import Modal from "./Modal";
import EMICalculator from "./EMICalculator/EMICalculator";
import { calculateEMI } from "./EMICalculator/calculateEMI";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { convertPrice } from "@utils/convertPrice";

const Hero = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();
  const hideModal = function () {
    setIsModalOpen(false);
  };
  const showModal = function () {
    setIsModalOpen(true);
  };
  useOnClickOutside(modalRef, hideModal);

  const exShowRoomPrice = data[0].specifications?.price;
  const registrationCharges = data[0].specifications?.price * 0.16;
  const insuranceCharges = data[0].specifications?.price * 0.0465;
  const otherCharges = 2000;
  const onRoadPrice =
    exShowRoomPrice + registrationCharges + insuranceCharges + otherCharges;
  const loanData = {
    minDownPayment: Number((onRoadPrice * 18) / 100).toFixed(),
    maxDownPayment: (onRoadPrice * 90) / 100,
  };

  const forGeneralEMI = {
    downPayment: Number(((loanData.minDownPayment * 110) / 100).toFixed()),
    interestRate: 10,
    tenure: 5,
  };

  const generalEMI = calculateEMI(onRoadPrice, { ...forGeneralEMI });
  // console.log(generalEMI);

  // Creating a date object
  const today = new Date();

  // Getting full month name (e.g. "June")
  const month = today.toLocaleString("default", { month: "long" });

  return (
    <>
      <Heading as="h3" size="lg">
        {data[0].title}
      </Heading>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        border="1px"
        borderRadius={8}
        borderColor="gray.200"
      >
        <Box width={"auto"}>
          <Image
            objectFit="cover"
            boxSize="100%"
            src={data[0].image}
            alt={data[0].title}
          />
        </Box>

        <Flex
          flexDirection={"column"}
          justifyContent={"space-around"}
          paddingBottom={"2"}
          gap={"2"}
          marginLeft={"4"}
        >
          <Box>
            <Text fontSize="2xl">
              {/* Rs. {Number(exShowRoomPrice / 100000).toFixed(2)} Lakh Rs.{" "} */}
              Rs. {convertPrice(exShowRoomPrice)}
            </Text>
            <Text color="#6F6F6F" fontSize="md">
              Avg. Ex-Showroom price
            </Text>
            <Text color="#6F6F6F" fontSize="md">
              Registration charges Rs. {convertPrice(registrationCharges)}
            </Text>
            <Text color="#6F6F6F" fontSize="md">
              Insurance charges Rs. {convertPrice(insuranceCharges)}
            </Text>
            <Text color="#6F6F6F" fontSize="md">
              Other charges Rs.{otherCharges}
            </Text>
          </Box>

          <Flex
            flexDirection={"column"}
            alignItems={"flex-start"}
            backgroundColor={"#F9F9F9"}
            padding={"3"}
            width={"80"}
          >
            <Flex alignItems={"center"} gap={"2"}>
              <Text>EMI Rs.{generalEMI.EMI.toString()} </Text>
              <Box>
                <Tooltip
                  hasArrow
                  label="EMI Calculated basis Down Payment - Rs. 4,87,458, Interest
                    Rate - 10 % p.a., Tenure - 5 Years. For exact EMI quotes
                    please get in touch Authorized Dealer"
                  placement="top"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    tabIndex="-1"
                    focusable="false"
                    aria-hidden="true"
                    role="img"
                    width={"16"}
                  >
                    <path d="M8 15.31A7.31 7.31 0 1115.31 8 7.32 7.32 0 018 15.31zm0-13.5A6.19 6.19 0 1014.19 8 6.2 6.2 0 008 1.81zm-.5 2.44h1v1.12h-1zm0 2.21h1v5.86h-1z"></path>
                  </svg>
                </Tooltip>
              </Box>
              <Text>For 5 years</Text>
            </Flex>
            <Button colorScheme="blue" variant="link" onClick={showModal}>
              EMI Calculator
            </Button>
            {isModalOpen && (
              <Modal ref={modalRef} isVisible={isModalOpen} onClose={hideModal}>
                <EMICalculator
                  onRoadPrice={onRoadPrice}
                  loanData={loanData}
                  title={data[0].title}
                />
              </Modal>
            )}
          </Flex>
          <Button colorScheme="red" size="lg" paddingX={100} width={"65%"}>
            Get {month} Offers
          </Button>
        </Flex>
      </Grid>
    </>
  );
};

export default Hero;
