import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useDisclosure,
  Slide,
  Box,
  Flex,
  UnorderedList,
  ListItem,
  Text,
  Icon,
} from "@chakra-ui/react";
import carwaleLogo from "../../assets/carwaleLogo.svg";
import NavLinks from "./NavLinks";
import MyButton from "./MyButton";
import { AiOutlineMenu } from "react-icons/ai";
import { HiMenu } from "react-icons/hi";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MenuIcon } from "../../assets/Icons";

const Navbar6 = () => {
  // const { isOpen, onToggle } = useDisclosure();
  const [open, setOpen] = useState(false);
  return (
    <Box as="nav">
      <Flex
        alignItems={"center"}
        justifyContent={{
          base: "left",
          md: "space-around",
        }}
        minHeight={"12"}
        textTransform={"uppercase"}
      >
        <Flex justifyContent={"flex-start"} alignItems={"center"}>
          <Box
            paddingTop="3.2px"
            display={{
              base: "block",
              md: "none",
            }}
            paddingX={"2.5"}
            onClick={() => setOpen(!open)}
            // onClick={onToggle}
          >
            {/* <MenuIcon /> */}
            {/* <HamburgerIcon boxSize={6} /> */}

            {open ? <CloseIcon /> : <MenuIcon />}
          </Box>
          <Link to="/">
            <img src={carwaleLogo} alt="carwale-logo" width={146} />
          </Link>
        </Flex>
        <Box
          gap="10"
          display={{
            base: "none",
            md: "flex",
          }}
          alignItems={"center"}
        >
          <Link to="/">
            <Text textTransform={"uppercase"}>New Cars</Text>
          </Link>

          <NavLinks />
        </Box>
        <Box
          display={{
            base: "none",
            md: "flex",
          }}
        >
          <MyButton />
        </Box>
        {/* //Mobile menu */}
        {open && (
          <Box
            display={{
              md: "none",
            }}
            position={"absolute"}
            left={"0"}
            top={"10"}
            backgroundColor={"white"}
            width={"40"}
            // height={"full"}
            zIndex={"2"}
            paddingLeft={"1.5"}
            paddingTop={"1.5"}
          >
            <Link to="/">
              <Text textTransform={"uppercase"}>New Cars</Text>
            </Link>
            <NavLinks />
            <MyButton zIndex={"2"} />
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar6;
