import { useAuth0 } from "@auth0/auth0-react";
import { UserIcon } from "@assets/Icons";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    !isAuthenticated && (
      <button onClick={() => loginWithRedirect()}>
        <UserIcon />
      </button>
    )
  );
};

export default LoginButton;
