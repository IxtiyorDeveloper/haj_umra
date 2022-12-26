import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uz from "./uz.json";

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: "uz",
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        translation: uz,
      },
      uz: {
        translation: uz,
      },
    },
  })
  .then(() => {});

export default i18n;
