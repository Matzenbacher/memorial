import { motion } from 'framer-motion';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/11.webp';
import img2 from '../assets/Images/12.webp';
import img3 from '../assets/Images/13.webp';
import img4 from '../assets/Images/14.webp';

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  background: ${(props) => props.theme.body};
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.grey};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const CardsContainer = styled.div`
  width: 100%;
  padding: 8rem 0 4rem 0;
  padding-left: calc(200vw - 10rem);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  @media (max-width: 48em) {
    padding: 6rem 0 3rem 0;
    padding-left: calc(50vw - 7.5rem);
    overflow-x: auto;
  }
`;

const Card = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 2.5rem;
  flex-shrink: 0;
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 64em) {
    width: 18rem;
    margin-right: 2rem;
  }

  @media (max-width: 48em) {
    width: 15rem;
    margin-right: 1.5rem;
  }
  
  @media (max-width: 30em) {
    width: 12rem;
    margin-right: 1rem;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.1);
  }

  @media (max-width: 48em) {
    height: 220px;
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  text-align: center;

  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: ${(props) => props.theme.fontmd};
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: ${(props) => props.theme.dark};
    line-height: 1.6;
  }

  @media (max-width: 48em) {
    padding: 1.5rem;
    
    h2 {
      font-size: ${(props) => props.theme.fontmd};
    }
    
    p {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
`;

const differentials = [
  {
    img: img1,
    title: "Economia de até 40%",
    description: "O Memorial Garden oferece plano preventivo que garante economia significativa e segurança para sua família."
  },
  {
    img: img2,
    title: "Ambiente Acolhedor",
    description: "Nosso ambiente foi planejado para transmitir tranquilidade, com jardins serenos e estrutura completa."
  },
  {
    img: img3,
    title: "Plantão 24 horas",
    description: "Conte com nosso plantão 24 horas para atendimento emergencial sempre que precisar."
  },
  {
    img: img4,
    title: "Plano Preventivo",
    description: "Planejamento antecipado que proporciona economia e tranquilidade para você e sua família."
  }
];

const DifferentialCard = ({ img, title, description }) => {
  return (
    <Card
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <ImageWrapper>
        <img src={img} alt={title} />
      </ImageWrapper>
      <CardContent>
        <h2>{title}</h2>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let windowWidth = window.innerWidth;
    let scrollWidth = scrollingElement.scrollWidth;
    
    // Calcula quanto precisa mover para centralizar todos os 4 cards
    // scrollWidth = largura total dos cards (~4000px)
    // windowWidth = viewport (~1400px)
    // Queremos mover até que todos caibam centralizados
    let movementDistance = scrollWidth - windowWidth;
    
    let pinWrapWidth = movementDistance * 2; // multiplica para controlar duração
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
          pin: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App",
          scrub: 1,
        },
        x: -movementDistance, // move apenas o necessário para centralizar
        ease: "none",
      });
      
      ScrollTrigger.refresh();
    }, 1000);

    ScrollTrigger.refresh();

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Title data-scroll data-scroll-speed="-2">
        Diferenciais
      </Title>

      <CardsContainer data-scroll ref={horizontalRef}>
        {differentials.map((item, index) => (
          <DifferentialCard
            key={index}
            img={item.img}
            title={item.title}
            description={item.description}
          />
        ))}
      </CardsContainer>
    </Section>
  );
};

export default NewArrival;
