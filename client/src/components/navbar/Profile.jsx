import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  Text,
  Image,
  Heading,
  Stack,
  Box,
  StackDivider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
} from "@chakra-ui/react";
import LogoutButton from "./LogoutButton";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    isAuthenticated && (
      <>
        <Image
          src={user.picture}
          alt={user.name}
          borderRadius="full"
          boxSize={8}
          position={"relative"}
          onClick={onOpen}
        />
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered={"false"}
          size={"sm"}
        >
          <ModalOverlay bg={"transparent"} />
          <ModalContent sx={{ position: "absolute", top: "9%", right: "1%" }}>
            <ModalBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Welcome {user.given_name}
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    {user.email}
                  </Text>
                </Box>
                <Link to="/user-profile" onClick={onClose}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Your Profile
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      Manage your profile
                    </Text>
                  </Box>
                </Link>

                <Link to="/list-your-used-car" onClick={onClose}>
                  <Box>
                    <button>sell your used car</button>
                    <p>{user.sub}</p>
                  </Box>
                </Link>
                <Box>
                  <LogoutButton />
                </Box>
              </Stack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
  );
};

export default Profile;
