import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  RadioGroup,
  Radio,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import { LanguageChangeIcon } from "@assets/Icons";

const LanguageChange = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change the language dynamically
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
        <RadioGroup defaultValue="en" onChange={handleLanguageChange}>
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
