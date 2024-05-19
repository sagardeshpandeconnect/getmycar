import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const SellUsedCarButton = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Link to="/list-your-used-car">
        <button>sell your used car</button>
        <p>{user.sub}</p>
      </Link>
    )
  );
};

export default SellUsedCarButton;
