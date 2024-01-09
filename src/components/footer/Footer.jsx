import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem" onClick={handleAboutClick}>Terms Of Use</li>
          <li className="menuItem" onClick={handleAboutClick}>Privacy-Policy</li>
          <li className="menuItem" onClick={handleAboutClick}>
            About
          </li>
          <li className="menuItem" onClick={handleAboutClick}>Blog</li>
          <li className="menuItem" onClick={handleAboutClick}>FAQ</li>
        </ul>
        <div className="infoText">
          "Welcome to CineInsight, your cinematic guide. Thanks for choosing us!
          Our data is sourced directly from TMDb, ensuring accurate and reliable
          information. Need assistance or have a question? We're here to help.
          Happy exploring!"
        </div>
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/vaibhav11kr/" target="_blank"
            className="icon"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav11kr/" target="_blank"
            className="icon"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav11kr/" target="_blank"
            className="icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav11kr/" target="_blank"
            className="icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
