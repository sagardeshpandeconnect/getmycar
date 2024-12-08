import { Box, Flex, CloseButton } from "@chakra-ui/react";
import { useEffect, forwardRef } from "react";

const Modal = forwardRef((props, ref) => {
  const { onClose, children } = props;

  const handleKeyDown = function ({ key }) {
    switch (key) {
      case "Escape":
        onClose();
        break;
      default:
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      position={"fixed"}
      top={"0"}
      bottom={"0"}
      right={"0"}
      left={"0"}
      width={"100vw"}
      height={"100vh"}
      zIndex={"100"}
      backgroundColor={"rgba(0, 0, 0, 0.75)"}
      onClick={onClose}
      ref={ref}
    >
      <Box
        maxWidth={"800px"}
        background={"white"}
        position={"relative"}
        margin={"0 10px"}
        maxHeight={"calc(100vh - 40px)"}
        onClick={(e) => {
          e.stopPropagation();
        }}
        borderRadius={"10px"}
      >
        <CloseButton
          position={"absolute"}
          right={"2.5"}
          top={"2.5"}
          onClick={onClose}
        />
        <Box overflow={"auto"}>
          <Box>{children}</Box>
        </Box>
      </Box>
    </Flex>
  );
});

export default Modal;
