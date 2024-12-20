import { HStack } from "@chakra-ui/react";

const IconButton = ({ children, ...props }) => {
  return (
    <HStack
      cursor="pointer"
      border="1px solid"
      borderColor="gray.300"
      px={2}
      py="0.15rem"
      alignItems="center"
      rounded="md"
      spacing={2}
      {...props}
      justifyContent={"center"}
    >
      {children}
    </HStack>
  );
};

export default IconButton;
