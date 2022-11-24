import React from "react";
import { FooterBox } from "./Footer.styled";
import FooterNav from "./FooterNav";
import Socials from "./Socials";
import { Logo } from "../Layouts";

const Footer: React.FC = () => {
  return (
    <FooterBox>
      <div className="footer-container">
        <Logo color="light" />
        <FooterNav />
        <Socials />
      </div>
    </FooterBox>
  );
};

export default Footer;
