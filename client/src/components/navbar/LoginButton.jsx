import { Box } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserIcon } from "@assets/Icons";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Box hideBelow="md">
      <button onClick={() => loginWithRedirect()}>
        <UserIcon />
      </button>
    </Box>
  );
};

export default LoginButton;
