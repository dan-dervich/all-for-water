import { useState, useEffect } from "react";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState("ES");

  useEffect(() => {
    // When the language changes, update localStorage and dispatch a custom event
    localStorage.setItem("language", language);
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: language })
    );
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ES" ? "EN" : "ES"));
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className={`w-20 h-10 bg-[#55A5CA] rounded-full p-1 flex items-center ${
          language === "ES" ? "justify-start" : "justify-end"
        }`}
        onClick={toggleLanguage}
        aria-label={
          language === "ES" ? "Switch to English" : "Cambiar a Español"
        }
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-[#55A5CA] font-bold text-xs">
            {language === "ES" ? "ES" : "EN"}
          </span>
        </div>
      </button>
    </div>
  );
}
