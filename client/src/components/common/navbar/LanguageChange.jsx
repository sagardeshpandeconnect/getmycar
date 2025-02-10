import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  RadioGroup,
  Radio,
  VStack,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import { LanguageChangeIcon } from "@assets/Icons";
import { setLanguage } from "@features/language/languageSlice";

const LanguageChange = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.entities.language); // Get language from Redux store
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  // Sync i18n language with Redux store
  useEffect(() => {
    if (currentLang) {
      i18n.changeLanguage(currentLang); // Sync i18n language with Redux store
    }
  }, [currentLang, i18n]);

  // Set loading to false once i18n language is updated
  useEffect(() => {
    if (i18n.language !== currentLang) {
      setLoading(true);
    } else {
      setLoading(false); // Done with language sync
    }
  }, [i18n.language, currentLang]);

  // If language is not loaded, show a loading state
  if (loading) {
    return <div>Loading...</div>; // You can show a loader or something else while waiting for the language sync
  }

  // Optionally, use dispatch to update language from the UI
  const handleLanguageChange = (lang) => {
    dispatch(setLanguage(lang)); // Dispatch language change
    i18n.changeLanguage(lang); // Also change language in i18n
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
        <Flex alignItems={"center"} gap={3} paddingY={2}>
          <LanguageChangeIcon />
          <Box display={{ base: "block", md: "none" }}>
            <Text fontSize={"medium"} fontWeight={"normal"}>
              Change Language
            </Text>
          </Box>
        </Flex>
      </MenuButton>
      <MenuList>
        <RadioGroup
          value={currentLang}
          onChange={(value) => handleLanguageChange(value)}
        >
          <VStack align="start" spacing={0}>
            <MenuItem>
              <Radio colorScheme={"green"} value="en">
                Read in English
              </Radio>
            </MenuItem>
            <MenuItem>
              <Radio colorScheme={"green"} value="hi">
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
