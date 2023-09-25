"use client";
import { useState } from "react";
import english from "../../public//assets/svg/english.svg";
import español from "../../public//assets/svg/español.png";
import Image from "next/image";

function LanguageToggle(props: { onToggle: () => void }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
    props.onToggle();
  };

  return (
    <div className="fixed md:right-4 md:top-32 md:p-8 w-auto top-32 right-0 z-50">
      <div className="relative mr-2 inline-block w-10 select-none align-middle">
        <Image
          src={language === "en" ? español : english}
          alt="language"
          title={language === "en" ? "cambia el lenguaje  español" : "change languague to english"}
          onClick={toggleLanguage}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default LanguageToggle;
