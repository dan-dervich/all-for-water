import { useState, useEffect } from "react";

export default function LanguageSwitch({ url, idioma }) {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage
    const localLanguage = window.localStorage?.getItem("language");
    return idioma || localLanguage;
  });

  useEffect(() => {
    // Only run on client-side
    if (typeof window !== "undefined") {
      // Save language to localStorage
      window.localStorage?.setItem("language", language);

      // Dispatch custom event
      window.dispatchEvent(
        new CustomEvent("language-change", {
          detail: language,
        })
      );

      // Update page content visibility
      const englishContent = document.getElementById("english-content");
      const spanishContent = document.getElementById("spanish-content");

      if (englishContent && spanishContent) {
        if (language === "EN") {
          englishContent.style.display = "block";
          spanishContent.style.display = "none";
        } else {
          englishContent.style.display = "none";
          spanishContent.style.display = "block";
        }
      }
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLanguage = prev === "EN" ? "ES" : "EN";
      window.location.href = url;
      return newLanguage;
    });
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className={`w-20 h-10 bg-[#55A5CA] rounded-full p-1 flex items-center ${
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
