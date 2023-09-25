import React from "react";
import logo from "../../public/assets/img/logoblanco.png";
import Image from "next/image";

function Footer(props: { language: any }) {
  const { language } = props;

  const scrollToHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToProjects = () => {
    window.scrollTo({ top: 900, behavior: "smooth" });
  };

  const scrollToSkills = () => {
    window.scrollTo({ top: 1700, behavior: "smooth" });
  };

  const scrollToContact = () => {
    window.scrollTo({ top: 3500, behavior: "smooth" });
  };

  return (
    <div className="flex-col w-full border-l-2 border-r-2 border-t-2 border-white">
      <div className="flex h-full w-full flex-col items-center align-middle sm:h-48 sm:flex-row">
        <div className="flex w-1/3 md:w-screen flex-col items-center justify-center align-middle">
          <Image
            src={logo}
            className="h-24 w-auto pt-4 sm:pt-0 md:h-32"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="flex flex-row items-center gap-4 border-white sm:w-1/3 sm:flex-col sm:gap-0 sm:border-l-2  ">
          {language === "en" ? (
            <p onClick={scrollToHome} className="cursor-pointer py-2 text-white">
              Home
            </p>
          ) : (
            <p onClick={scrollToHome} className="cursor-pointer py-2 text-white">
              Inicio
            </p>
          )}
          {language === "en" ? (
            <p onClick={scrollToHome} className="cursor-pointer py-2 text-white">
              About
            </p>
          ) : (
            <p onClick={scrollToHome} className="cursor-pointer py-2 text-white">
              Acerca de mí
            </p>
          )}
          {language === "en" ? (
            <p onClick={scrollToProjects} className="cursor-pointer py-2 text-white">
              Proyects
            </p>
          ) : (
            <p onClick={scrollToProjects} className="cursor-pointer py-2 text-white">
              Proyectos
            </p>
          )}
          {language === "en" ? (
            <p onClick={scrollToSkills} className="cursor-pointer py-2 text-white">
              Skills
            </p>
          ) : (
            <p onClick={scrollToSkills} className="cursor-pointer py-2 text-white">
              Tecnologías
            </p>
          )}
        </div>
        <div className="flex flex-row items-center gap-4 border-white sm:w-1/3 sm:flex-col sm:gap-0 sm:border-l-2  ">
          {language === "en" ? (
            <p className="py-2 text-white">Get to know me</p>
          ) : (
            <p className="py-2 text-white">Conóceme</p>
          )}
          <a href="https://www.linkedin.com/in/pablo-j-amico/">
            <p className="py-2 text-white">Linkedin</p>
          </a>
          <a href="https://github.com/pablosecuen">
            {" "}
            <p className="py-2 text-white">Github</p>
          </a>
          <a href="https://wa.me/+5493417206026">
            {" "}
            <p className="py-2 text-white">Whatsapp</p>
          </a>
        </div>
      </div>
      <hr className="w-full border-l-2 border-r-2 border-white align-middle"></hr>
      {language === "en" ? (
        <p className="flex w-full justify-center bg-black text-white">
          ®2023 Pablo Amico. All Rights Reserved
        </p>
      ) : (
        <p className="flex w-full justify-center bg-black text-white">
          ®2023 Pablo Amico. Todos los derechos reservados
        </p>
      )}
    </div>
  );
}

export default Footer;
