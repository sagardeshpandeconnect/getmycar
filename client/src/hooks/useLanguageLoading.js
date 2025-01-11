import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const useLanguageLoading = () => {
  const { i18n } = useTranslation();
  const currentLang = useSelector((state) => state.entities.language); // Get language from Redux store
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentLang) {
      i18n.changeLanguage(currentLang); // Sync i18n language with Redux store
    }
  }, [currentLang, i18n]);

  useEffect(() => {
    if (i18n.language !== currentLang) {
      setLoading(true);
    } else {
      setLoading(false); // Done with language sync
    }
  }, [i18n.language, currentLang]);

  return loading;
};

export default useLanguageLoading;
