import React from "react";

import { useDispatch } from "react-redux";
import { logout } from "@features/auth/authSlice";

import {
  Flex,
  Text,
  Icon,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { AiOutlineLogout } from "react-icons/ai";

import { Link as RouteLink } from "react-router-dom"; // Import RouteLink for internal links

const ProfileCard = ({ userName }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const logOut = () => {
    dispatch(logout());
  };

  return (
    <div>
      <Button onClick={onOpen} colorScheme="teal">
        {userName || `Hello User`}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay backgroundColor={"transparent"} />
        <ModalContent
          position="absolute"
          top={{ base: "-3", md: "-1.5" }}
          right={{ base: "1", md: "3" }}
          width={{ base: "50%", md: "25%" }}
        >
          <ModalCloseButton />
          <ModalBody>
            <Box backgroundColor={"white"}>
              <Box>
                <RouteLink style={{ textDecoration: "none" }}>
                  <Flex
                    alignItems={"center"}
                    gap={3}
                    paddingY={2}
                    onClick={logOut}
                  >
                    <Icon as={AiOutlineLogout} boxSize={5} />
                    <Text>Logout</Text>
                  </Flex>
                </RouteLink>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ProfileCard;
