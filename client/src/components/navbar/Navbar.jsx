import { useState, useRef, useEffect } from "react";
import { Link as RouteLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Flex, Image, Box, Link, Button } from "@chakra-ui/react";
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
import Modal from "@pages/cardetails/Modal";
import useOnClickOutside from "@hooks/useOnClickOutside";
import SignIn from "@components/SignIn";
import ProfileCard from "@components/ProfileCard";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isUserSignedIn, setIsUserSignedIn] = useState(false); // State for user authentication
  const modalRef = useRef();
  const authStore = useSelector((state) => state.entities.auth);
  const isUserSignedIn = authStore.isUserSignedIn;
  console.log(authStore);
  // const userName = authStore.user.username;

  const hideModal = () => setIsModalOpen(false);
  const showModal = () => setIsModalOpen(true);

  useOnClickOutside(modalRef, hideModal);
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
    if (shouldShowSidebar || isModalOpen) {
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
  }, [shouldShowSidebar, isModalOpen]);

  useOnClickOutside(sidebarRef, hideSidebar);
  useOnClickOutside(inputRef, hideSearchBar);

  return (
    <header>
      <nav>
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          marginY={"1"}
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

          <Flex
            gap={{ base: 3, md: 6 }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
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

            {isUserSignedIn ? (
              <ProfileCard userName={authStore.user.username} />
            ) : (
              <Box onClick={showModal}>
                <UserIcon />
              </Box>
            )}

            {isModalOpen && (
              <Modal ref={modalRef} isVisible={isModalOpen} onClose={hideModal}>
                <SignIn
                  onSignIn={() => {
                    // setIsUserSignedIn(true);
                    hideModal();
                  }}
                />
                {/* Pass onSignIn callback */}
              </Modal>
            )}
          </Flex>
        </Flex>
      </nav>
    </header>
  );
};

export default Navbar;
