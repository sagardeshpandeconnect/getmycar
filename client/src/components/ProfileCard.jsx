import React from "react";

import { useDispatch, useSelector } from "react-redux";
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

import {
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineDollar,
} from "react-icons/ai";

import { MdMotionPhotosPaused } from "react-icons/md";

import { Link as RouteLink } from "react-router-dom"; // Import RouteLink for internal links

const ProfileCard = ({ userName }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const authStore = useSelector((state) => state.entities.auth);
  const userId = authStore.user._id;
  console.log(authStore);

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
                    // onClick={logOut}
                    borderBottom={"1px solid gray"}
                  >
                    <Icon as={AiOutlineUser} boxSize={5} />
                    <Text>Edit Your Profile</Text>
                  </Flex>
                </RouteLink>
                <RouteLink
                  to={"/sell-your-car"}
                  style={{ textDecoration: "none" }}
                >
                  <Flex
                    alignItems={"center"}
                    gap={3}
                    paddingY={2}
                    // onClick={logOut}
                    borderBottom={"1px solid gray"}
                  >
                    <Icon as={AiOutlineDollar} boxSize={5} />
                    <Text>Sell Your Car</Text>
                  </Flex>
                </RouteLink>
                <RouteLink
                  style={{ textDecoration: "none" }}
                  to={`manage-your-listings/${userId}`}
                >
                  <Flex
                    alignItems={"center"}
                    gap={3}
                    paddingY={2}
                    borderBottom={"1px solid gray"}
                    onClick={onClose}
                  >
                    <Icon as={MdMotionPhotosPaused} boxSize={5} />
                    <Text>Manage Your Listings</Text>
                  </Flex>
                </RouteLink>

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
