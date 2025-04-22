import { useState, useEffect } from "react";

const usa = "/fotos/usa.png";
const espana = "/fotos/espana.png";

export default function LanguageSwitch({ url, idioma }) {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage
    const localLanguage = window.localStorage?.getItem("language");
    return idioma || localLanguage || "ES";
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
    document.getElementById("loader").style.display = "grid";
    setLanguage((prev) => {
      const newLanguage = prev === "EN" ? "ES" : "EN";
      window.location.href = url;
      return newLanguage;
    });
  };

  return (
    <div className="fixed bottom-5 left-5 z-50">
      <div className="relative w-28 h-14 bg-[#55A5CA] rounded-full p-1 flex items-center">
        {/* Inactive language button */}
        <button
          className={`absolute top-0 bottom-0 flex items-center opacity-50 transition-all duration-300 
            ${language === "ES" ? "left-1" : "right-1"}`}
          onClick={toggleLanguage}
          aria-label={
            language === "ES" ? "Switch to English" : "Cambiar a Español"
          }
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <div className="flex items-center">
              <span className="text-[#55A5CA] font-bold text-xs mr-1">
                {language === "EN" ? "ES" : "EN"}
              </span>
              <img
                src={language === "EN" ? espana : usa}
                alt={language === "EN" ? "Spanish Flag" : "English Flag"}
                className="w-4 h-4 rounded-full"
              />
            </div>
          </div>
        </button>

        {/* Active language display */}
        <div
          className={`w-full h-full flex items-center transition-all duration-300 
            ${language === "ES" ? "justify-end" : "justify-start"}`}
        >
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
            <div className="flex items-center">
              <span className="text-[#55A5CA] font-bold text-xs mr-1">
                {language === "EN" ? "EN" : "ES"}
              </span>
              <img
                src={language === "EN" ? usa : espana}
                alt={language === "EN" ? "English Flag" : "Spanish Flag"}
                className="w-4 h-4 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
