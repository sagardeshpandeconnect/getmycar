import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Image,
  Heading,
  Stack,
  Box,
  StackDivider,
} from "@chakra-ui/react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [showMenu, setShowMenu] = useState(true);

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
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
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
      <div>
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
      </div>
    )
  );
};

export default Profile;
