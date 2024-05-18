import { useState, useRef } from "react";
import { Flex, Image, Box, Link } from "@chakra-ui/react";
import logo from "@assets/carwaleLogo.svg";
import {
  LanguageChangeIcon,
  LocationIcon,
  MenuIcon,
  SearchIcon,
} from "@assets/Icons";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import useOnClickOutside from "@hooks/useOnClickOutside";
import { Link as RouteLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import Profile from "./Profile";

const Navbar = () => {
  const [shoudlShowSearchBar, setShoudlShowSearchBar] = useState(false);
  const [shouldShowSidebar, setShouldShowSidebar] = useState(false);
  const inputRef = useRef();
  const sidebarRef = useRef();
  const { loginWithRedirect } = useAuth0();

  const hideSearchBar = function () {
    setShoudlShowSearchBar(false);
  };
  const hideSidebar = function () {
    setShouldShowSidebar(false);
  };

  const showSearchBar = function () {
    setShoudlShowSearchBar(true);
    inputRef.current.focus();
  };

  useOnClickOutside(sidebarRef, hideSidebar);
  useOnClickOutside(inputRef, hideSearchBar);

  return (
    <header>
      <nav>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginY={"2"}
          marginX={"6"}
        >
          <Flex gap={"2"}>
            <Box marginTop={"1"} hideFrom="md">
              <Box
                onClick={() => {
                  setShouldShowSidebar(true);
                }}
              >
                <MenuIcon />
              </Box>
              {shouldShowSidebar && <Sidebar ref={sidebarRef} />}
            </Box>
            <Link as={RouteLink} to="/">
              <Image width={"9rem"} src={logo} alt="logo" />
            </Link>
          </Flex>

          <Flex
            gap={"6"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box
              zIndex={{
                base: "100", // 0px
                sm: "100",
              }}
            >
              <Box hideBelow="md">
                <SearchBar ref={inputRef} />
              </Box>
              <Box hideFrom="md" onClick={showSearchBar}>
                <SearchIcon />
              </Box>
              {shoudlShowSearchBar && (
                <Box
                  position={"absolute"}
                  margin={"0.5"}
                  left={"0"}
                  top={"-1.5"}
                  backgroundColor={"white"}
                  width={"99vw"}
                >
                  <Box
                    width={"99vw"}
                    height={"100vh"}
                    position={"fixed"}
                    // backgroundColor={"rgba(200, 200, 200)"}
                    backgroundColor={"rgba(60, 60, 60, 0.7)"}
                  >
                    <SearchBar ref={inputRef} autoFocus={true} />
                  </Box>
                </Box>
              )}
            </Box>

            <Box>
              <LocationIcon />
            </Box>
            <Box hideBelow="md">
              <LanguageChangeIcon />
            </Box>
            <Box hideBelow="md">
              <LoginButton />
            </Box>
            <Profile />
          </Flex>
        </Flex>
      </nav>
    </header>
  );
};

export default Navbar;
