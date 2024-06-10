import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import UserProfilePage from "@pages/userprofile/UserProfilePage";
import LogoutButton from "./LogoutButton";
import {
  Card,
  CardBody,
  Text,
  Image,
  Heading,
  Stack,
  Box,
  StackDivider,
} from "@chakra-ui/react";
import SellUsedCarButton from "./SellUsedCarButton";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  // console.log(user);
  const [showMenu, setShowMenu] = useState(false);

  const Menu = () => {
    return (
      <Card position={"absolute"} right={"0"} top={"12"}>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Welcome {user.given_name}
              </Heading>
              <Text pt="2" fontSize="sm">
                {user.email}
              </Text>
            </Box>
            <Link to="/user-profile">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  Your Profile
                </Heading>
                <Text pt="2" fontSize="sm">
                  Manage your profile
                </Text>
              </Box>
            </Link>
            <SellUsedCarButton />

            <Box>
              <LogoutButton />
            </Box>
          </Stack>
        </CardBody>
      </Card>
    );
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <>
        <Image
          src={user.picture}
          alt={user.name}
          borderRadius="full"
          boxSize={8}
          position={"relative"}
          onClick={() => {
            setShowMenu((shouldShow) => !shouldShow);
          }}
        />
        {showMenu && <Menu />}
      </>
    )
  );
};

export default Profile;
