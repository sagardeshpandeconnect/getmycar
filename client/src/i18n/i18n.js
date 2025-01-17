// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// import en from "../locales/en.json";
// import hi from "../locales/hi.json";

// import { initialState as defaultLanguage } from "@features/language/languageSlice";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: en },
//     hi: { translation: hi },
//   },
//   lng: defaultLanguage, // Default language
//   fallbackLng: "hi",
//   interpolation: {
//     escapeValue: false, // React already escapes strings
//   },
// });

// export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../locales/en.json";
import hi from "../locales/hi.json";
import { initialState as defaultLanguage } from "@features/language/languageSlice";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  // lng: defaultLanguage, // Initial language will be set dynamically
  // fallbackLng: "hi", // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes strings
  },
});

export default i18n;
