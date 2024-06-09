import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const UserProfilePage = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return <div>UserProfilePage</div>;
};

export default UserProfilePage;
