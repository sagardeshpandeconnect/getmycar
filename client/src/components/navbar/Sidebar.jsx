import React, { useEffect, useRef } from "react";
import { Box, Flex, Text, Icon, Divider, Slide } from "@chakra-ui/react";
import { IoHomeOutline, IoWalletOutline } from "react-icons/io5";
import { GiRecycle } from "react-icons/gi";
import { FaSackDollar } from "react-icons/fa6";
import { LanguageChangeIcon } from "@assets/Icons";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {
  const ref = useRef();

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Slide
      direction="left"
      in={isOpen}
      style={{ zIndex: 10 }}
      transition={{ enter: { duration: 0.3 }, exit: { duration: 0.3 } }}
    >
      <Box
        backgroundColor="rgba(60, 60, 60, 0.7)"
        width="100vw"
        height="100vh"
        position="absolute"
        left={0}
      >
        <Box backgroundColor="white" width="75vw" ref={ref} onClick={onClose}>
          <Link to="/" onClick={onClose}>
            <Flex alignItems="center" gap="3" padding="3">
              <Icon as={IoHomeOutline} boxSize={5} />
              <Text>Home</Text>
            </Flex>
          </Link>
          <Divider borderWidth="1px" borderColor="gray" />
          <Flex alignItems="center" gap="3" padding="3">
            <Icon as={IoWalletOutline} boxSize={5} />
            <Text>Car Loan</Text>
          </Flex>
          <Divider borderWidth="1px" borderColor="gray" />
          <Link to="/used-cars" onClick={onClose}>
            <Flex alignItems="center" gap="3" padding="3">
              <Icon as={GiRecycle} boxSize={5} />
              <Text>Used Cars</Text>
            </Flex>
          </Link>
          <Divider borderWidth="1px" borderColor="gray" />
          <Flex alignItems="center" gap="3" padding="3">
            <Icon as={FaSackDollar} boxSize={5} />
            <Text>Sell Cars</Text>
          </Flex>
          <Divider borderWidth="1px" borderColor="gray" />
          <Flex alignItems="center" gap="3" padding="3">
            <LanguageChangeIcon />
            <Text>Change Language</Text>
          </Flex>
        </Box>
      </Box>
    </Slide>
  );
};

export default Sidebar;
