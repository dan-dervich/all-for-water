import React, { useState } from "react";

export default function LanguageSwitch() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "ES" : "EN";
    setLanguage(newLanguage);

    // Dispatch a custom event for language change
    window.dispatchEvent(
      new CustomEvent("language-change", {
        detail: newLanguage,
      })
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 transition-all">
      <button
        className={`w-20 h-10 transition-all bg-[#55A5CA] rounded-full p-1 flex items-center ${
          language === "ES" ? "justify-end" : "justify-start"
        }`}
        onClick={toggleLanguage}
        aria-label={
          language === "ES" ? "Switch to English" : "Cambiar a Español"
        }
      >
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-[#55A5CA] font-bold text-xs">
            {language === "EN" ? "EN" : "ES"}
          </span>
        </div>
      </button>
    </div>
  );
}
