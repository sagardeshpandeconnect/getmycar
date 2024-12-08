import { Link } from "react-router-dom";
import { Flex, Image, Text } from "@chakra-ui/react";

const SingleBrand = ({ brandData }) => {
  const { title, brandSlug, image } = brandData;
  return (
    <Flex
      borderRight={"var(--grid-border)"}
      borderBottom={"var(--grid-border)"}
      justifyContent={"center"}
      alignItems={"center"}
      // height={"auto"}
      paddingY={"3"}
    >
      <Link to={`${brandSlug} `} state={{ brand: `${title}` }}>
        <Flex justifyContent={"center"}>
          <Image width={"20"} src={image} alt={title} />
        </Flex>
        <Text textAlign={"center"}>{title}</Text>
      </Link>
    </Flex>
  );
};

export default SingleBrand;
