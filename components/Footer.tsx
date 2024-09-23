import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Listo para realizar <span className="text-purple">tu </span> 
           orientacion vocacional?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactate conmigo para saber aun mas sobre las universidades y sus carreras
        </p>
        <a href="https://wa.me/qr/WDFXN4WAF3Q6G1" target="_blank">
          <MagicButton
            title="Contactame"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        
  
      </div>
    </footer>
  );
};

export default Footer;
