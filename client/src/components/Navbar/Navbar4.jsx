import { Flex, Icon, Text, Box } from "@chakra-ui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdSettings } from "react-icons/md";

import carwaleLogo from "../../assets/carwaleLogo.svg";

const Navbar4 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header>
      <nav>
        {/* <IconContext.Provider value={{ color: "red" }}> */}
        <Flex
          height={"14"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginInline={7}
        >
          <Link to="/">
            <img src={carwaleLogo} alt="carwale-logo" width={146} />
          </Link>
          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
            onClick={handleClick}
          >
            {click ? (
              <Icon as={FaTimes} color="red.500" />
            ) : (
              <Icon as={FaBars} color="red.500" />
            )}
          </Box>
          <Flex
            gap={65}
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Text color="#484848">NEW CARS</Text>
            <Text color="#484848">USED CARS</Text>
            <Text color="#484848">REVIEWS & NEWS</Text>
            <Link to="/compare">
              <Text color="#484848">COMPARE</Text>
            </Link>
          </Flex>
        </Flex>
        {/* </IconContext.Provider> */}
      </nav>
    </header>
  );
};

export default Navbar4;
