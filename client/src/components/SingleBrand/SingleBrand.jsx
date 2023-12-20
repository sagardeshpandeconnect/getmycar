import { Link } from "react-router-dom";
import { Box, Image, Text } from "@chakra-ui/react";

const SingleBrand = ({ title, img, brandId, brandSlug }) => {
  return (
    <Box borderTop={"2px"}>
      <Link to={`${brandSlug} `} state={{ brand: `${title}` }}>
        <Image objectFit="contain" width={"20"} src={img} alt={title} />
        <Text>{title}</Text>
      </Link>
    </Box>
  );
};

export default SingleBrand;
