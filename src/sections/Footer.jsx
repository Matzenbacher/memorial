import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Images/logo.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  /* margin: 5rem auto; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;


  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  position: relative;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;

  img {
    width: 15vw;
    height: auto;
    min-width: 120px;
    max-width: 200px;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: ${(props) => props.theme.fontxxl};
    margin-top: 1rem;
    text-align: center;

    @media (max-width: 64em) {
      font-size: ${(props) => props.theme.fontxl};
    }
    
    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontlg};
    }
    
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    margin: 0 2rem;
    gap: 1.5rem;
    
    span {
      transform: none !important;
      text-align: center;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    margin: 0 1rem;
  }
  
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    padding: 1rem 0;
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <LogoContainer>
        <img
          width="300"
          height="300"
          src={Logo}
          alt="Memorial Garden"
          data-scroll
          data-scroll-speed="2"
        />
        <h3 data-scroll data-scroll-speed="-1">
        </h3>
      </LogoContainer>
      <FooterComponent
        initial={{ y: "-600px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{
          duration: 2.5,
        }}
      >
        <ul>
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll("#home")}
          >
            Início
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll("#about")}
          >
            Sobre
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll("#shop")}
          >
            Nosso Espaço
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
            onClick={() => handleScroll(".new-arrival")}
          >
            Diferenciais
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9, y: 0 }}
          >
            <a href="https://instagram.com/memorial.garden" target={"_blank"} rel="noreferrer">
              Instagram
            </a>
          </motion.li>
        </ul>
        <Bottom>
          <span
            data-scroll
            data-scroll-speed="2"
            data-scroll-direction="horizontal"
          >
            &copy; 2025 Memorial Garden. Todos os direitos reservados.
          </span>
          <span
            data-scroll
            data-scroll-speed="-2"
            data-scroll-direction="horizontal"
          >
            Est. Fernando Antônio Paschoal 1.555 • Ourinhos, SP
          </span>
        </Bottom>
      </FooterComponent>
    </Section>
  );
};

export default Footer;
