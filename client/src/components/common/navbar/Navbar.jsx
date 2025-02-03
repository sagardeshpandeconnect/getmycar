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
  Stack,
} from "@chakra-ui/react";
import logo from "@assets/carwaleLogo.svg";
import { MenuIcon, SearchIcon, UserIcon } from "@assets/Icons";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import useOnClickOutside from "@hooks/useOnClickOutside";
import ProfileCard from "@components/common/navbar/ProfileCard";
import SignInModal from "@components/common/navbar/SignInModal";
import LanguageChange from "./LanguageChange";
import useLanguageLoading from "@hooks/useLanguageLoading";

const Navbar = () => {
  const { t } = useTranslation();

  const loading = useLanguageLoading(); // Use the custom hook to get the loading state

  // If language is not loaded, show a loading state

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

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or a custom loading component
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
                  // hideBelow={"md"}
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
                      <Flex
                        alignItems={"center"}
                        gap={3}
                        paddingY={2}
                        onClick={onClose}
                      >
                        <Text>Sell Your Car</Text>
                      </Flex>
                    </RouteLink>
                  ) : (
                    <Box onClick={onOpen} cursor={"pointer"} paddingY={2}>
                      <Text>Sell Your Car</Text>
                      <SignInModal
                        isOpen={isOpen}
                        onClose={onClose}
                        navigateTo="/sell-your-car"
                      />
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

            <Box hideBelow="md">
              <LanguageChange />
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
