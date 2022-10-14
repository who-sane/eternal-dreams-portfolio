import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from "./FooterElements";

const Footer = () => {
  const toggleHome = ()=>{
    scroll.scrollToTop();
  }
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> About Us </FooterLinkTitle>
              <FooterLink to="about">More About Me</FooterLink>
              <FooterLink to="visionary">What is Eternal Dreams?</FooterLink>
              <FooterLink to="visionary">Aspirations</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> Social Media </FooterLinkTitle>
              <FooterLink to="about">Youtube</FooterLink>
              <FooterLink to="visionary">Instagram</FooterLink>
              <FooterLink to="visionary">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle> Contact Us </FooterLinkTitle>
              <FooterLink to="about">Email</FooterLink>
              <FooterLink to="visionary">Sponsorships</FooterLink>
              <FooterLink to="visionary">LinkedIn</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle> More </FooterLinkTitle>
              <FooterLink to="about">Download Resume`</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Kevin Lieu</SocialLogo>
            <WebsiteRights>
              Eternal Dreams © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="https://www.instagram.com/_kevinlieu_/?hl=en" target="_blank"aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="http://www.linkedin.com/in/Kevin-Lieu-Film" target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/channel/UCZjJIZjlK3URqKlklmc2pQw" target="_blank"
               aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
