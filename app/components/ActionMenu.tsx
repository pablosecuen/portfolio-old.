import React from "react";
import whatsapp from "../../public//assets/svg/whatsapp.svg";
import github from "../../public//assets/svg/github.svg";
import linkedin from "../../public//assets/svg/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

function ActionMenu(props: any) {
  const { language } = props;

  const title1 = language === "en" ? "Access to my Linkedin" : "Acceso a mi Linkedin";
  const title2 = language === "en" ? " Access to my Github" : "Acceso a mi Github";
  const title3 = language === "en" ? "Chatea conmigo" : "Chat with me";

  return (
    <div className="absolute right-0  bottom-72 w-24 z-50 ">
      <div className="sticky bottom-0 flex flex-col">
        <Link href="https://www.linkedin.com/in/pablo-j-amico/" title={title1}>
          <Image
            src={linkedin}
            alt="Linkedin"
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12"
          ></Image>
        </Link>
        <Link href="https://github.com/pablosecuen">
          <Image
            src={github}
            alt="github"
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12 "
            title={title2}
          ></Image>
        </Link>
        <Link href="https://wa.me/+5493417206026">
          <Image
            alt="whatsapp"
            src={whatsapp}
            className="h-0 w-0 cursor-pointer md:my-4 md:h-12 md:w-12"
            title={title3}
          ></Image>
        </Link>
      </div>
    </div>
  );
}

export default ActionMenu;
