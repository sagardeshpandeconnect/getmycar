import { Image, Text, Box } from "@chakra-ui/react";
import { convertPrice } from "@utils/convertPrice";

const ComparionCardChild = ({ carData, price }) => {
  const { title, image } = carData;
  return (
    <Box width={"fit-content"}>
      <Image objectFit={"cover"} src={image} alt={title} />
      <Box paddingLeft={"2"}>
        <Text fontSize="sm">{title}</Text>
        <Text fontSize="xs" color="GrayText">
          Rs.{convertPrice(price)}{" "}
        </Text>
        <Text fontSize="xs" color="GrayText">
          Onwards
        </Text>
      </Box>
    </Box>
  );
};

export default ComparionCardChild;
