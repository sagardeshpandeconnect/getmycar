// import {
//   Button,
//   Menu,
//   MenuButton,
//   MenuItem,
//   MenuList,
//   RadioGroup,
//   Radio,
//   VStack,
// } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
// import React, { useEffect } from "react";
// import { LanguageChangeIcon } from "@assets/Icons";
// import { useDispatch, useSelector } from "react-redux";
// import { setLanguage } from "../../features/language/languageSlice"; // Update the path based on your file structure

// const LanguageChange = () => {
//   const { i18n } = useTranslation();
//   const dispatch = useDispatch();
//   const currentLang = useSelector((state) => state.entities.language); // Access language from the Redux store
//   const isRehydrated = useSelector((state) => state._persist.rehydrated); // Check if Redux Persist has rehydrated the state

//   console.log(currentLang, isRehydrated);
//   // Ensure we wait until the state is rehydrated
//   useEffect(() => {
//     if (isRehydrated && currentLang) {
//       i18n.changeLanguage(currentLang); // Sync i18n language after rehydration
//     }
//   }, [isRehydrated, currentLang, i18n]);

//   const changeLanguage = (lang) => {
//     dispatch(setLanguage(lang)); // Update Redux store
//   };

//   return (
//     <Menu>
//       <MenuButton
//         as={Button}
//         variant="outline"
//         size="sm"
//         border="none"
//         _hover={{ background: "transparent", boxShadow: "none" }}
//         _active={{ background: "transparent", boxShadow: "none" }}
//         _focus={{ boxShadow: "none" }}
//       >
//         <LanguageChangeIcon />
//       </MenuButton>
//       <MenuList>
//         <RadioGroup
//           value={currentLang}
//           onChange={(value) => changeLanguage(value)}
//         >
//           <VStack align="start" spacing={0}>
//             <MenuItem>
//               <Radio colorScheme={"green"} value="en">
//                 Read in English
//               </Radio>
//             </MenuItem>
//             <MenuItem>
//               <Radio colorScheme={"green"} value="hi">
//                 हिंदी में पढ़ें
//               </Radio>
//             </MenuItem>
//           </VStack>
//         </RadioGroup>
//       </MenuList>
//     </Menu>
//   );
// };

// export default LanguageChange;

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
import React, { useEffect } from "react";
import { LanguageChangeIcon } from "@assets/Icons";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../../features/language/languageSlice"; // Update the path based on your file structure
import { useState } from "react";

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
        <LanguageChangeIcon />
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
