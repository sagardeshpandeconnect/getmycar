import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link as RouteLink } from "react-router-dom";
import {
  Flex,
  Image,
  Box,
  Link,
  Text,
  useDisclosure,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import logo from "@assets/carwaleLogo.svg";
import { MenuIcon, SearchIcon, UserIcon } from "@assets/Icons";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import useOnClickOutside from "@hooks/useOnClickOutside";
import ProfileCard from "@components/common/navbar/ProfileCard";
import SignInModal from "@components/ui/SignInModal";
import LanguageChange from "./LanguageChange";
import useLanguageLoading from "@hooks/useLanguageLoading";

const Navbar = () => {
  const { t } = useTranslation();
  const loading = useLanguageLoading();

  // State for modal control
  const [signInNavigateTo, setSignInNavigateTo] = useState("/");
  const {
    isOpen: isSignInOpen,
    onOpen: openSignIn,
    onClose: closeSignIn,
  } = useDisclosure();

  const authStore = useSelector((state) => state.entities.auth);
  const isUserSignedIn = authStore.isUserSignedIn;

  const [shouldShowSearchBar, setShouldShowSearchBar] = useState(false);
  const [shouldShowSidebar, setShouldShowSidebar] = useState(false);
  const inputRef = useRef();
  const sidebarRef = useRef();

  const hideSearchBar = () => setShouldShowSearchBar(false);
  const hideSidebar = () => setShouldShowSidebar(false);
  const showSearchBar = () => {
    setShouldShowSearchBar(true);
    inputRef.current.focus();
  };

  // Handler for opening sign in modal with different navigation targets
  const handleSignInClick = (navigateTo) => {
    setSignInNavigateTo(navigateTo);
    openSignIn();
  };

  useEffect(() => {
    if (shouldShowSidebar) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
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

  if (loading) {
    return <div>Loading...</div>;
  }

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
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  p={2}
                  _hover={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  <Text textStyle="lg" fontWeight="semibold">
                    {t("navbar.usedCars")}
                  </Text>
                </Box>
              </PopoverTrigger>
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                p={2}
                rounded={"xl"}
                width={"12rem"}
              >
                <Box>
                  <RouteLink style={{ textDecoration: "none" }} to="used-cars">
                    <Flex
                      alignItems={"center"}
                      gap={3}
                      paddingY={2}
                      borderBottom={"1px solid gray"}
                    >
                      <Text>Browse Used Cars</Text>
                    </Flex>
                  </RouteLink>

                  {isUserSignedIn ? (
                    <RouteLink
                      to={"/sell-your-car"}
                      style={{ textDecoration: "none" }}
                    >
                      <Flex alignItems={"center"} gap={3} paddingY={2}>
                        <Text>Sell Your Car</Text>
                      </Flex>
                    </RouteLink>
                  ) : (
                    <Box
                      onClick={() => handleSignInClick("/sell-your-car")}
                      cursor={"pointer"}
                      paddingY={2}
                    >
                      <Text>Sell Your Car</Text>
                    </Box>
                  )}
                </Box>
              </PopoverContent>
            </Popover>
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
              {shouldShowSearchBar && (
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

            <Box hideBelow="md">
              <LanguageChange />
            </Box>

            {isUserSignedIn ? (
              <ProfileCard userName={authStore.user.username} />
            ) : (
              <Box onClick={() => handleSignInClick("/")}>
                <UserIcon />
              </Box>
            )}
          </Flex>
        </Flex>

        {/* Single SignInModal instance */}
        <SignInModal
          isOpen={isSignInOpen}
          onClose={closeSignIn}
          navigateTo={signInNavigateTo}
        />
      </nav>
    </header>
  );
};

export default Navbar;
