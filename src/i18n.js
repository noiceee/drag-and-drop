import translations from "./translations";

let currentLanguage = "en";

export const initLanguage = () => {
    const browserLanguage = navigator.language.slice(0, 2);
    currentLanguage = translations[browserLanguage] ? browserLanguage : "en";
};

export const setLanguage = (language) => {
  if (translations[language]) {
    currentLanguage = language;
  } else {
    console.warn(`Language "${language}" is not available.`);
  }
};

export const translate = (key) => {
  return translations[currentLanguage][key] || key;
};
