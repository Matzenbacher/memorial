import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  background: #FFFFFF;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  right: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    right: 2rem;
  }
`;

const Left = styled.div`
  position: absolute;
  right: 35%;
  padding-right: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  @media (max-width: 48em) {
    position: relative;
    right: 0;
    padding-right: 2rem;
    width: 100%;
    overflow-x: auto;
    min-height: 60vh;
  }
`;

const Right = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  @media (max-width: 64em) {
    width: 40%;
  }

  @media (max-width: 48em) {
    width: 100%;
    position: relative;
    min-height: auto;
    padding: 3rem 2rem;
  }
  
  @media (max-width: 30em) {
    padding: 2rem 1rem;
  }
`;

const TextContainer = styled.div`
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 90%;
  }

  @media (max-width: 48em) {
    width: 100%;
  }
`;

const Item = styled.div`
  .map-container {
    display: inline-block;
    width: 20rem;
    margin-left: 6rem;
    flex-shrink: 0;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  iframe {
    width: 100%;
    height: 30rem;
    border: none;
    pointer-events: none;
  }

  @media (max-width: 64em) {
    .map-container {
      width: 18rem;
      margin-left: 4rem;
    }
    
    iframe {
      height: 27rem;
    }
  }

  @media (max-width: 48em) {
    .map-container {
      width: 15rem;
      margin-left: 3rem;
    }
    
    iframe {
      height: 22.5rem;
    }
  }
  
  @media (max-width: 30em) {
    .map-container {
      width: 12rem;
      margin-left: 2rem;
    }
    
    iframe {
      height: 18rem;
    }
  }

`;

const Line = styled(motion.span)`
  display: block;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  line-height: 1.6;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const About = () => {
  return (
    <Section id="fixed-target" className="about">
      <Title data-scroll data-scroll-speed="-2">
        Sobre o Memorial Garden
      </Title>
      <Left data-scroll>
        <Item>
          <div className="map-container">
            <iframe
              title="Localização Memorial Garden"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14706.0!2d-49.8766!3d-22.9766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU4JzM1LjgiUyA0OcKwNTInMzUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&maptype=roadmap&disableDefaultUI=true&zoomControl=true"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Item>
      </Left>
      <Right>
        <TextContainer>
          <Line
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            O Memorial Garden é o único cemitério modelo parque da região de Ourinhos, projetado para oferecer um ambiente sereno, acolhedor e em harmonia com a natureza.
          </Line>
          <br /><br />
          <Line
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            Com 14 anos de história, nos dedicamos a preservar memórias e homenagear vidas com dignidade e respeito. Nossos jardins cuidadosamente planejados proporcionam um espaço de paz e tranquilidade para as famílias.
          </Line>
          <br /><br />
          <Line
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
          >
            Oferecemos estrutura completa com espaço cerimonial, velório e sepultamento, além de plantão 24 horas. Mais de 2.000 famílias já foram acolhidas em nosso cemitério parque, que se destaca pela arquitetura respeitosa e ambiente natural.
          </Line>
        </TextContainer>
      </Right>
    </Section>
  );
};

export default About;
