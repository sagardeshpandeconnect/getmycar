import {
  Stack,
  Flex,
  Text,
  Image,
  Button,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { convertPrice } from "@utils/convertPrice";

const ActionButton = ({ children, ...props }) => {
  return (
    <Button
      variant="outline"
      width="10.5em"
      borderWidth="1px"
      borderColor="teal"
      color="teal"
      {...props}
    >
      {children}
    </Button>
  );
};

const NewCarCard = ({ carData }) => {
  const { specifications, title, image } = carData;
  const { price } = specifications;

  return (
    <Stack
      spacing={{ base: 0, md: 4 }}
      direction={{ base: "column", md: "row" }}
      border={"1px solid"}
      borderColor={"gray.400"}
      padding={2}
      rounded="md"
      width={{ base: "auto", md: "2xl" }}
      overflow="hidden"
      position="relative"
    >
      <Flex>
        <Image
          rounded="md"
          width={{ base: "100%", md: "18rem" }}
          maxHeight={"180px"}
          objectFit="cover"
          src={image}
          alt={title}
        />
      </Flex>
      <Stack
        direction="column"
        spacing={2}
        width="100%"
        marginTop={{ base: "5px ", sm: 0 }}
      >
        <Heading as={"h2"} fontSize="large" fontWeight="bold">
          {title}
        </Heading>
        <Text fontSize="medium">Rs. {convertPrice(price)} Onward</Text>

        <HStack
          justifyContent="space-around"
          alignItems={{ base: "flex-start", sm: "center" }}
        >
          <ActionButton>Check On Road Price</ActionButton>
          <ActionButton>Know More</ActionButton>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default NewCarCard;
