import { ImFacebook, ImTwitter } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <div className="flex justify-start items-center gap-20 h-28 px-5 bg-black b">
      <Logo textColor={"white"} />
      <div className="flex justify-center items-center gap-5">
        <a href="#">
            <img src="images/appstore.svg" alt="app store" />
        </a>
        <a href="#">
          <img src="images/playstore.svg" alt="play store" />
        </a>
      </div>
      <div>
        <a
          href="#"
          className="inline-block font-playfair font-bold bg-orange text-white p-3 rounded-md ease-in duration-150 hover:bg-green"
        >
          Donar
        </a>
      </div>
      
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="inline-block font-bold bg-blue text-white p-3 rounded-md ease-in duration-150 hover:bg-green"
        >
          <ImFacebook size={20} />
        </a>
        <a
          href="#"
          className="inline-block font-bold bg-blue text-white p-3 rounded-md ease-in duration-150 hover:bg-green"
        >
          <GrInstagram size={20} />
        </a>
        <a
          href="#"
          className="inline-block font-bold bg-blue text-white p-3 rounded-md ease-in duration-150 hover:bg-green"
        >
          <ImTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
