import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UsedCarForm from "./formConfig";

const ListUsedCar = () => {
  // const { isAuthenticated, loginWithRedirect } = useAuth0();

  // if (!isAuthenticated) {
  //   loginWithRedirect();
  //   // return <div>Loading...</div>; // Optional: You can show a loading state while redirecting
  // }

  return (
    <div>
      <UsedCarForm />
    </div>
  );
};

export default ListUsedCar;
