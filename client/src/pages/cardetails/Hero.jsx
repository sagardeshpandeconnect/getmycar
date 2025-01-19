import { useRef, useState } from "react";
import {
  Grid,
  Box,
  Image,
  Text,
  Button,
  Flex,
  Tooltip,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

import Modal from "./Modal";
import EMICalculator from "./EMICalculator/EMICalculator";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { calculateEMI } from "@utils/calculateEMI";
import { convertPrice } from "@utils/convertPrice";
import HeadingText from "@components/ui/HeadingText";
import { useSelector } from "react-redux";

const Hero = ({ data, isLoading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  const currentLang = useSelector((state) => state.entities.language); // Get language from Redux store
  // console.log(currentLang);

  useOnClickOutside(modalRef, () => setIsModalOpen(false));

  if (isLoading) {
    return (
      <Box marginBottom={"5"}>
        <Skeleton height="40px" mb={4} />
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          borderRadius={8}
          border={"1px solid var(--color-border)"}
        >
          <Box>
            <Skeleton height="200px" />
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="space-around"
            gap={2}
            padding={"3"}
          >
            <SkeletonText noOfLines={4} spacing="4" />
            <Skeleton height="40px" width="50%" />
          </Flex>
        </Grid>
      </Box>
    );
  }

  const carData = data[0];
  const {
    specifications: { price: exShowRoomPrice } = {},
    title,
    title_hindi,
    image,
    intro,
    intro_hindi,
  } = carData;

  const registrationCharges = exShowRoomPrice * 0.16;
  const insuranceCharges = exShowRoomPrice * 0.0465;
  const otherCharges = 2000;
  const onRoadPrice =
    exShowRoomPrice + registrationCharges + insuranceCharges + otherCharges;

  const loanData = {
    minDownPayment: Number((onRoadPrice * 0.18).toFixed()),
    maxDownPayment: onRoadPrice * 0.9,
  };

  const generalEMI = calculateEMI(onRoadPrice, {
    downPayment: Number((loanData.minDownPayment * 1.1).toFixed()),
    interestRate: 10,
    tenure: 5,
  });

  const month = new Date().toLocaleString("default", { month: "long" });
  const month_hindi = new Date().toLocaleString("hi-IN", { month: "long" });

  return (
    <Box marginBottom={"5"}>
      <HeadingText>{currentLang == "en" ? title : title_hindi}</HeadingText>
      <Text marginBottom={"2"} textAlign="justify">
        {currentLang == "en" ? intro : intro_hindi}
      </Text>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
        borderRadius={8}
        border={"1px solid var(--color-border)"}
      >
        <Box>
          <Image
            objectFit="contain"
            maxWidth="100%"
            src={image}
            alt={title}
            borderRadius={8}
          />
        </Box>

        <Flex
          flexDirection="column"
          justifyContent="space-around"
          gap={2}
          padding={"3"}
        >
          <Box>
            <HeadingText>
              Rs.
              {convertPrice(exShowRoomPrice, currentLang)}
            </HeadingText>
            <Text color="gray.500" fontSize="md">
              {currentLang == "en"
                ? "Avg. Ex-Showroom price "
                : "औसत एक्स-शोरूम कीमत "}
            </Text>
            <Text color="gray.500" fontSize="md">
              {currentLang == "en" ? "Registration charges " : "पंजीकरण शुल्क "}
              Rs. {convertPrice(registrationCharges, currentLang)}
            </Text>
            <Text color="gray.500" fontSize="md">
              {currentLang == "en" ? "Insurance Charges " : "बीमा शुल्क "}
              Rs.
              {convertPrice(insuranceCharges, currentLang)}
            </Text>
            <Text color="gray.500" fontSize="md">
              {currentLang == "en" ? "Other charges " : "अन्य शुल्क "}
              Rs. {otherCharges}
            </Text>
          </Box>

          <Flex
            flexDirection="column"
            alignItems="flex-start"
            padding={3}
            width={{ base: "100%", md: "65%" }}
            backgroundColor={"var(--color-background)"}
            border={"1px solid var(--color-border)"}
            borderRadius={"8"}
          >
            <Flex alignItems="center" gap={2}>
              <Text>EMI Rs. {generalEMI.EMI.toString()} </Text>
              <Box hideBelow={"md"}>
                <Tooltip
                  hasArrow
                  label="EMI Calculated basis Down Payment - Rs. 4,87,458, Interest Rate - 10 % p.a., Tenure - 5 Years. For exact EMI quotes please get in touch Authorized Dealer"
                  placement="top"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="currentcolor"
                    width={16}
                    aria-hidden="true"
                  >
                    <path d="M8 15.31A7.31 7.31 0 1115.31 8 7.32 7.32 0 018 15.31zm0-13.5A6.19 6.19 0 1014.19 8 6.2 6.2 0 008 1.81zm-.5 2.44h1v1.12h-1zm0 2.21h1v5.86h-1z"></path>
                  </svg>
                </Tooltip>
              </Box>
              <Text>For 5 years</Text>
            </Flex>
            <Button
              colorScheme="blue"
              variant="link"
              marginTop={"1"}
              onClick={() => setIsModalOpen(true)}
            >
              Calculate Your EMI
            </Button>
            {isModalOpen && (
              <Modal
                ref={modalRef}
                isVisible={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              >
                <EMICalculator
                  onRoadPrice={onRoadPrice}
                  loanData={loanData}
                  title={title}
                />
              </Modal>
            )}
          </Flex>
          <Button
            colorScheme="red"
            size="lg"
            width={{ base: "100%", md: "65%" }}
          >
            {currentLang == "en"
              ? `Get ${month} Offers`
              : `${month_hindi} के लिए ऑफर प्राप्त करें`}
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Hero;
