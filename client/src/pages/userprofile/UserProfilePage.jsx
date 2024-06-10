import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Icon,
} from "@chakra-ui/react";
import { getData } from "@services/apiClient";

const UserProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return <div>UserProfilePage</div>;
};

export default UserProfilePage;
