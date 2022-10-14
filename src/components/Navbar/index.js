import React, { useState, useEffect } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  SocialIcons, 
  SocialIconLink
} from "./NavbarElements";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 600) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              Kevin Lieu
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  id="aboutNav"
                  to="about"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  About{" "}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="visionary"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  Visionary{" "}
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to="portfolio"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  {" "}
                  Portfolio{" "}
                </NavLinks>
              </NavItem>
            </NavMenu>
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
            <NavBtn>
              <NavBtnLink to="/contact">Contact</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
