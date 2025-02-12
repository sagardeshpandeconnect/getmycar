import { useState, forwardRef } from "react";
import { useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom"; // Import RouteLink for internal links
import { Flex, Text, Icon, Box, Image, useDisclosure } from "@chakra-ui/react";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { MdMotionPhotosPaused } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
// import { LanguageChangeIcon } from "@assets/Icons";
import getItOnGooglePlay from "@assets/getItOnGooglePlay.svg";
import downloadOnTheAppStore from "@assets/downloadOnTheAppStore.svg";
import SignInModal from "@components/ui/SignInModal";
import LanguageChange from "./LanguageChange";

const Sidebar = forwardRef((props, ref) => {
  const authStore = useSelector((state) => state.entities.auth);
  const isUserSignedIn = authStore.isUserSignedIn;
  // State for modal control
  const [signInNavigateTo, setSignInNavigateTo] = useState("/");
  const {
    isOpen: isSignInOpen,
    onOpen: openSignIn,
    onClose: closeSignIn,
  } = useDisclosure();

  // Handler for opening sign in modal with different navigation targets
  const handleSignInClick = (navigateTo) => {
    setSignInNavigateTo(navigateTo);
    openSignIn();
  };

  const menuItems = [
    { icon: IoHomeOutline, label: "Home", link: "/" },
    { icon: MdMotionPhotosPaused, label: "Used Cars", link: "/used-cars" },
    // { icon: AiOutlineDollar, label: "Sell Car", link: "/sell-car" },
    // {
    //   icon: LanguageChangeIcon,
    //   label: "Change Language",
    //   link: "/change-language",
    // },
  ];

  const phoneNumber = "08068441441";

  return (
    <Box
      backgroundColor={"rgba(60, 60, 60, 0.7)"}
      width={"100vw"}
      height={"100vh"}
      position={"absolute"}
      top={0}
      left={0}
      transform={props.isOpen ? "translateX(0)" : "translateX(-100%)"} // Slide in or out
      transition="transform 0.3s ease-out" // Smooth transition
      zIndex={1}
    >
      <Box
        backgroundColor={"white"}
        width={"75vw"}
        height="100vh"
        paddingTop={4}
        ref={ref}
      >
        <Box paddingLeft={4}>
          {menuItems.map((item, index) => (
            <RouteLink
              key={index}
              to={item.link}
              style={{ textDecoration: "none" }}
              onClick={props.hideSidebar}
            >
              <Flex alignItems={"center"} gap={3} paddingY={2}>
                <Icon as={item.icon} boxSize={5} />
                <Text>{item.label}</Text>
              </Flex>
            </RouteLink>
          ))}

          <Flex alignItems={"center"} marginLeft={-4}>
            <LanguageChange />
          </Flex>

          {isUserSignedIn ? (
            <RouteLink
              to={"/sell-your-car"}
              style={{ textDecoration: "none" }}
              onClick={props.hideSidebar}
            >
              <Flex alignItems={"center"} gap={3}>
                <Icon as={AiOutlineDollar} boxSize={5} />
                <Text>Sell Your Car</Text>
              </Flex>
            </RouteLink>
          ) : (
            <Box
              onClick={() => handleSignInClick("/sell-your-car")}
              cursor={"pointer"}
              paddingY={2}
            >
              <Flex alignItems={"center"} gap={3}>
                <Icon as={AiOutlineDollar} boxSize={5} />
                <Text>Sell Your Car</Text>
              </Flex>
            </Box>
          )}
        </Box>
        <SignInModal
          isOpen={isSignInOpen}
          onClose={closeSignIn}
          navigateTo={signInNavigateTo}
        />

        <Flex
          paddingLeft={4}
          flexDirection={"column"}
          backgroundColor={"gray.100"}
          marginY={"1"}
          paddingY={"2"}
          borderY={"1px solid gray"}
        >
          <Text>Toll Free Number</Text>
          <Box color={"teal"}>
            <Flex alignItems={"center"}>
              <a href={`tel:${phoneNumber}`}>
                <Icon as={FaPhoneAlt} boxSize={5} marginRight={"2"} />
                08068441441
              </a>
            </Flex>
          </Box>
        </Flex>

        <Text paddingLeft={4}>Download mobile app</Text>
        <Flex justifyContent={"space-evenly"} marginTop={2}>
          <Box>
            <a
              href="https://apps.apple.com/in/app/carwale-buy-new-used-cars/id910137745"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={downloadOnTheAppStore} width={"8rem"} />
            </a>
          </Box>
          <Box>
            <a
              href="https://play.google.com/store/apps/details?id=com.carwale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={getItOnGooglePlay} width={"8rem"} />
            </a>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
});

export default Sidebar;
