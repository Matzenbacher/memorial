import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  padding: 5rem 0;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (max-width: 48em) {
    width: 90vw;
    padding: 3rem 0;
  }

  @media (max-width: 30em) {
    width: 90vw;
    padding: 2rem 0;
  }
`;

const Left = styled.div`
  width: 100%;
  max-width: 900px;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 400;
  position: relative;
  z-index: 5;
  margin-bottom: 3rem;
  line-height: 2;
  font-family: 'Georgia', 'Times New Roman', serif;
  color: ${(props) => props.theme.dark};
  letter-spacing: 0.3px;

  p {
    margin-bottom: 2rem;
    position: relative;
    overflow: visible;
    text-align: justify;
    
    .char {
      display: inline-block;
      opacity: 0;
      will-change: opacity, transform;
    }
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 90%;
    line-height: 1.9;
  }
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
    margin-bottom: 2rem;
    line-height: 1.8;
    text-align: left;
  }
  
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
`;

const Right = styled(motion.div)`
  width: 100%;
  max-width: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  .map-container {
    width: 100%;
    height: 350px;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    pointer-events: none;
  }

  a {
    font-size: ${(props) => props.theme.fontxs};
    color: ${(props) => props.theme.text};
    text-decoration: none;
    opacity: 0.6;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
      text-decoration: underline;
    }
  }

  @media (max-width: 64em) {
    width: 90%;
    
    .map-container {
      height: 300px;
    }
  }

  @media (max-width: 48em) {
    .map-container {
      height: 250px;
    }
  }

  @media (max-width: 30em) {
    .map-container {
      height: 200px;
    }
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  width: 100%;
  max-width: 900px;
  margin-bottom: 3rem;
  text-align: left;

  span {
    display: inline-block;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-bottom: 2.5rem;
    width: 90%;
  }
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin-bottom: 2rem;
  }
`;

const About = () => {
  const paragraph1Ref = useRef(null);
  const paragraph2Ref = useRef(null);
  const paragraph3Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const paragraphs = [paragraph1Ref.current, paragraph2Ref.current, paragraph3Ref.current];

    paragraphs.forEach((p, index) => {
      if (p) {
        // Dividir o texto em caracteres
        const text = p.textContent;
        const chars = text.split('');
        p.innerHTML = chars.map(char => 
          char === ' ' ? '&nbsp;' : `<span class="char">${char}</span>`
        ).join('');
        
        const charElements = p.querySelectorAll('.char');
        
        // Criar timeline com ScrollTrigger sincronizado
        gsap.timeline({
          scrollTrigger: {
            trigger: p,
            start: "top 80%",
            end: "top 30%",
            scrub: 1.5,
            scroller: ".App"
          }
        })
        .fromTo(charElements, 
          {
            opacity: 0
          },
          {
            opacity: 1,
            stagger: 0.01,
            ease: "none",
            duration: 0.3
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Section id="fixed-target" className="about">
      <Title>
        Sobre o Memorial Garden
      </Title>
      <Left>
        <p ref={paragraph1Ref}>O Memorial Garden é o único cemitério modelo parque da região de Ourinhos, projetado para oferecer um ambiente sereno, acolhedor e em harmonia com a natureza.</p>
        <p ref={paragraph2Ref}>Com 14 anos de história, nos dedicamos a preservar memórias e homenagear vidas com dignidade e respeito. Nossos jardins cuidadosamente planejados proporcionam um espaço de paz e tranquilidade para as famílias.</p>
        <p ref={paragraph3Ref}>Oferecemos estrutura completa com espaço cerimonial, velório e sepultamento, além de plantão 24 horas. Mais de 2.000 famílias já foram acolhidas em nosso cemitério parque, que se destaca pela arquitetura respeitosa e ambiente natural.</p>
      </Left>

      <Right
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="map-container">
          <iframe
            title="Localização Memorial Garden"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14706.0!2d-49.8766!3d-22.9766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU4JzM1LjgiUyA0OcKwNTInMzUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&maptype=roadmap&disableDefaultUI=true&zoomControl=true"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a 
          href="https://www.google.com/maps/place/Est.+Fernando+Ant%C3%B4nio+Paschoal,+1555+-+%C3%81gua+do+Jacu,+Ourinhos+-+SP" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Ver no Google Maps
        </a>
      </Right>
    </Section>
  );
};

export default About;
