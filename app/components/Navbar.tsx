"use client";
import "./Navbar.css";
import logo from "../../public/assets/img/logopablo.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

function NavBar() {
  const [language, setLanguage] = useState("en");
  const [showMenu, setShowMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuBackgroundWhite, setIsMenuBackgroundWhite] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const isMobile = useMediaQuery({ maxWidth: 700 });

  useEffect(() => {
    const isSCrolling = () => {
      const headerEl = document.querySelector(".primary-header");

      if (headerEl) {
        let windowPosition = window.scrollY > 200;
        headerEl.classList.toggle("active", windowPosition);
      }
    };
    window.addEventListener("scroll", isSCrolling);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", isSCrolling);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);

      if (currentPosition > 200) {
        setIsMenuBackgroundWhite(true);
      } else {
        setIsMenuBackgroundWhite(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const line1 = language === "en" ? "Home" : "Inicio";
  const line2 = language === "en" ? "Projects" : "Proyectos";
  const line3 = language === "en" ? "Skills" : "Tecnologías";
  const line4 = language === "en" ? "Contact" : "Contacto";

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

  const scrollToContactMobile = () => {
    window.scrollTo({ top: 5800, behavior: "smooth" });
  };

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const sentence1 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.0,
        staggerChildren: 0.2,
      },
    },
  };

  const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 3.5,
        staggerChildren: 0.2,
      },
    },
  };

  const sentence3 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 4.5,
        staggerChildren: 0.2,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 500 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header className="primary-header h-20 max-w-screen w-full items-center justify-between ">
      <nav className="navbar container flex w-full max-w-screen  items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          className="flex w-full items-center justify-between align-middle"
        >
          <Link href="/" className="flex items-center align-middle ">
            <Image priority src={logo} alt="logo" className="logo -mt-2 h-12 w-10 " />
          </Link>
        </motion.div>
        {isMobile ? (
          <div className="pt- relative h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="hamburger nav-icon h-8 cursor-pointer"
              onClick={toggleMenu}
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="M2,6h20M2,12h20M2,18h20"
              />
            </svg>

            {showMenu && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className={`nav-mobile duration-800 absolute -right-10 top-[52px] flex h-screen w-48 flex-col rounded-l-xl  border-white bg-black p-10  text-opacity-90 xsm:top-[48px] sm:top-[64px] ${
                  isMenuBackgroundWhite
                    ? "bg-gradient-to-b from-white  to-black text-black "
                    : "tracking-wide text-white  opacity-80 transition duration-500"
                }`}
              >
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <h3
                    onClick={scrollToHome}
                    className={`load-screen--message cursor-pointer pb-4 duration-500 hover:text-white ${
                      isMenuBackgroundWhite
                        ? "text-black  duration-500  hover:text-blue-600"
                        : "tracking-wide text-white  opacity-80 transition duration-500 hover:text-blue-600"
                    }`}
                  >
                    {line1}
                  </h3>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1.5 }}
                >
                  <h3
                    onClick={scrollToProjects}
                    className={`load-screen--message cursor-pointer pb-4 duration-500 hover:text-white ${
                      isMenuBackgroundWhite
                        ? "text-black  duration-500  hover:text-blue-600"
                        : "tracking-wide text-white  opacity-80 transition duration-500 hover:text-blue-600"
                    }`}
                  >
                    {line2}
                  </h3>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2 }}
                >
                  <h3
                    onClick={scrollToSkills}
                    className={`load-screen--message cursor-pointer pb-4 duration-500 hover:text-white ${
                      isMenuBackgroundWhite
                        ? "text-black  duration-500  hover:text-blue-600"
                        : "tracking-wide text-white  opacity-80 transition duration-500 hover:text-blue-600"
                    }`}
                  >
                    {line3}
                  </h3>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2.5 }}
                >
                  <h3
                    onClick={scrollToContactMobile}
                    className={`load-screen--message cursor-pointer pb-4 duration-500 hover:text-white ${
                      isMenuBackgroundWhite
                        ? "text-black  duration-500  hover:text-blue-600"
                        : "tracking-wide text-white  opacity-80 transition duration-500 hover:text-blue-600"
                    }`}
                  >
                    {line4}
                  </h3>
                </motion.li>
              </motion.ul>
            )}
          </div>
        ) : (
          <motion.ul className="nav-list">
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.0 }}
            >
              <motion.h3
                className={`load-screen--message cursor-pointer pb-4 opacity-80  duration-500 hover:text-blue-600 ${
                  isMenuBackgroundWhite
                    ? "text-black  duration-500  hover:text-blue-600"
                    : "tracking-wide text-white  opacity-80 transition duration-500"
                }`}
                variants={sentence}
                initial="hidden"
                animate="visible"
                onClick={scrollToHome}
              >
                {line1.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.0 }}
            >
              <motion.h3
                className={`load-screen--message cursor-pointer pb-4 opacity-80  duration-500 hover:text-blue-600 ${
                  isMenuBackgroundWhite
                    ? " text-black duration-500 hover:text-blue-600 "
                    : "tracking-wide  text-white opacity-80 transition duration-500"
                }`}
                variants={sentence1}
                initial="hidden"
                animate="visible"
                onClick={scrollToProjects}
              >
                {line2.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              <motion.h3
                className={`load-screen--message cursor-pointer pb-4   opacity-80 duration-500 hover:text-blue-600 ${
                  isMenuBackgroundWhite
                    ? "text-black  duration-500 hover:text-blue-600 "
                    : "tracking-wide text-white  opacity-80 transition duration-500"
                }`}
                variants={sentence2}
                initial="hidden"
                animate="visible"
                onClick={scrollToSkills}
              >
                {line3.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.0 }}
            >
              <motion.h3
                className={`load-screen--message cursor-pointer pb-4   opacity-80 duration-500 hover:text-blue-600 ${
                  isMenuBackgroundWhite
                    ? "text-black  duration-500 hover:text-blue-600 "
                    : "tracking-wide text-white  opacity-80 transition duration-500"
                }`}
                variants={sentence3}
                initial="hidden"
                animate="visible"
                onClick={scrollToContact}
              >
                {line4.split("").map((char, index) => {
                  return (
                    <motion.span key={char + "-" + index} variants={letter}>
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h3>
            </motion.li>
          </motion.ul>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
