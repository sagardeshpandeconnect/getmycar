import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RadioGroup,
  Radio,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LanguageChangeIcon } from "@assets/Icons";
import { useDispatch, useSelector } from "react-redux";

const LanguageChange = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Retrieve the language from localStorage or default to "en"
    return localStorage.getItem("language") || "en";
  });

  // Sync i18n language and localStorage whenever `currentLanguage` changes
  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
    localStorage.setItem("language", currentLanguage); // Persist the language
  }, [currentLanguage, i18n]);

  const handleLanguageChange = (lang) => {
    setCurrentLanguage(lang); // Update local state
    if (lang === "hi") {
      navigate("/hi"); // Navigate to Hindi path
    } else {
      navigate("/"); // Navigate to English path
    }
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        size="sm"
        border="none"
        _hover={{ background: "transparent", boxShadow: "none" }}
        _active={{ background: "transparent", boxShadow: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <LanguageChangeIcon />
      </MenuButton>
      <MenuList>
        <RadioGroup
          value={currentLanguage} // Controlled by local state
          onChange={handleLanguageChange}
        >
          <VStack align="start" spacing={0}>
            <MenuItem value="en">
              <Radio value="en" colorScheme={"green"}>
                Continue in English
              </Radio>
            </MenuItem>
            <MenuItem value="hi">
              <Radio value="hi" colorScheme={"green"}>
                हिंदी में पढ़ें
              </Radio>
            </MenuItem>
          </VStack>
        </RadioGroup>
      </MenuList>
    </Menu>
  );
};

export default LanguageChange;
