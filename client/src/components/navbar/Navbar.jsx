import { useState, useRef, useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Flex, Image, Box, Link, Text, useDisclosure } from "@chakra-ui/react";
import logo from "@assets/carwaleLogo.svg";
import {
  LanguageChangeIcon,
  LocationIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "@assets/Icons";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import useOnClickOutside from "@hooks/useOnClickOutside";
import ProfileCard from "@components/ProfileCard";
import SignInModal from "@components/SignInModal";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const authStore = useSelector((state) => state.entities.auth);
  const isUserSignedIn = authStore.isUserSignedIn;
  // console.log(authStore);

  const [shoudlShowSearchBar, setShoudlShowSearchBar] = useState(false);
  const [shouldShowSidebar, setShouldShowSidebar] = useState(false);
  const inputRef = useRef();
  const sidebarRef = useRef();

  const hideSearchBar = () => setShoudlShowSearchBar(false);
  const hideSidebar = () => setShouldShowSidebar(false);
  const showSearchBar = () => {
    setShoudlShowSearchBar(true);
    inputRef.current.focus();
  };

  // Disable scrolling when the sidebar or modal is open
  useEffect(() => {
    if (shouldShowSidebar) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Prevent touch scrolling on mobile
    } else {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [shouldShowSidebar]);

  useOnClickOutside(sidebarRef, hideSidebar);
  useOnClickOutside(inputRef, hideSearchBar);

  return (
    <header>
      <nav>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginY={{ base: 3, md: 1 }}
          marginX={{ base: 4, md: 10 }}
        >
          <Flex gap={"3"}>
            <Box marginTop={"0.5"} hideFrom="md">
              <Box onClick={() => setShouldShowSidebar(true)}>
                <MenuIcon />
              </Box>
              <Sidebar
                ref={sidebarRef}
                isOpen={shouldShowSidebar}
                hideSidebar={hideSidebar}
              />
            </Box>
            <Link as={RouteLink} to="/">
              <Image width={"9rem"} src={logo} alt="logo" />
            </Link>
          </Flex>
          <Box hideBelow={"md"}>
            <Link as={RouteLink} to="used-cars">
              <Text fontWeight="semibold">Used Cars</Text>
            </Link>
          </Box>
          <Flex
            gap={{ base: 3, md: 6 }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Box hideBelow="md" position={"relative"}>
                <SearchBar ref={inputRef} hideSearchBar={hideSearchBar} />
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
                  zIndex={"1"}
                >
                  <Box
                    width={"99vw"}
                    height={"100vh"}
                    position={"fixed"}
                    backgroundColor={"rgba(60, 60, 60, 0.7)"}
                  >
                    <SearchBar
                      ref={inputRef}
                      autoFocus={true}
                      hideSearchBar={hideSearchBar}
                    />
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

            {isUserSignedIn ? (
              <ProfileCard userName={authStore.user.username} />
            ) : (
              <Box onClick={onOpen}>
                <UserIcon />
                <SignInModal isOpen={isOpen} onClose={onClose} />
              </Box>
            )}
          </Flex>
        </Flex>
      </nav>
    </header>
  );
};

export default Navbar;
