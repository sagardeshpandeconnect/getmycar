import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { LanguageChangeIcon, LocationIcon, UserIcon } from "../../assets/Icons";
import carwaleLogo from "../../assets/carwaleLogo.svg";
import Search3 from "../Search3";
import SearchSuggestionsList from "../SearchSuggestionsList";
import Search4 from "../Search4";

const Navbar2 = () => {
  const [results, setResults] = useState([]);
  return (
    <header>
      <nav>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginInline={7}
          marginTop={1.5}
          marginBottom={2}
        >
          <Link to="/">
            <img src={carwaleLogo} alt="carwale-logo" width={146} />
          </Link>
          <Flex gap={65}  display={{
                base: "none",
                md: "inline-flex",
              }}>
            <Text color="#484848">NEW CARS</Text>
            <Text color="#484848">USED CARS</Text>
            <Text color="#484848">REVIEWS & NEWS</Text>
            <Link to="/compare">
              {" "}
              <Text color="#484848">COMPARE</Text>
            </Link>
          </Flex>
          <Flex gap={5}>
            <Search4 />
            <LocationIcon />
            <LanguageChangeIcon />
            <UserIcon />
          </Flex>
        </Flex>
      </nav>
    </header>
  );
};

export default Navbar2;
