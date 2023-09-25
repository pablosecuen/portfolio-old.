"use client";
import { useState } from "react";
import About from "./components/About";
import ActionMenu from "./components/ActionMenu";
import LanguageToggle from "./components/LanguageToggle";
import Proyects from "./components/Proyects";
import Technologies from "./components/Technologies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [language, setLanguage] = useState("en");
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };
  return (
    <main className="flex min-h-screen  max-w-screen bg-darkbg flex-col items-center justify-between">
      <LanguageToggle onToggle={toggleLanguage} />
      <About language={language} />
      <ActionMenu />
      {/* Cards de proyectos */}
      {/* <Proyects language={language} /> */}
      <Proyects language={language} />

      {/* Cards de redes sociales */}
      <Technologies />
      <Contact />
      <Footer language={language} />
    </main>
  );
}
