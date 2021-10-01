import React from "react";
import facebook from "../images/icon-facebook.svg";
import instagram from "../images/icon-instagram.svg";
import pinterest from "../images/icon-pinterest.svg";
import twitter from "../images/icon-twitter.svg";
import footerLogo from "../images/footer-logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <div>
          <img src={footerLogo} alt="" className="block mx-auto" />
        </div>

        <ul className="flex items-center justify-center">
          <li className="mx-5">
            <button>About</button>
          </li>
          <li className="mx-5">
            <button>Services</button>
          </li>
          <li className="mx-5">
            <button>Projects</button>
          </li>
        </ul>

        <ul className="flex items-center justify-center">
          <li className="mx-5">
            <img src={facebook} alt="facebook" />
          </li>
          <li className="mx-5">
            <img src={instagram} alt="instagram" />
          </li>
          <li className="mx-5">
            <img src={twitter} alt="twitter" />
          </li>
          <li className="mx-5">
            <img src={pinterest} alt="pinterest" />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
