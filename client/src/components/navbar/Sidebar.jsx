import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import { forwardRef } from "react";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";

const Sidebar = forwardRef((props, ref) => {
  return (
    <Box
      backgroundColor={"rgba(60, 60, 60, 0.7)"}
      width={"100vw"}
      height={"100vh"}
      position={"absolute"}
      top={-2}
      left={0}
    >
      <Box backgroundColor={"white"} width={"75vw"} ref={ref}>
        <Flex alignItems={"center"} gap={"3"}>
          <Icon as={IoHomeOutline} boxSize={5} />
          <Text>Home</Text>
        </Flex>
        <Flex alignItems={"center"} gap={"3"}>
          <Icon as={IoWalletOutline} boxSize={5} />
          <Text>Car Loan</Text>
        </Flex>
      </Box>
    </Box>
  );
});

export default Sidebar;
