import { motion } from 'framer-motion';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/11.webp';
import img2 from '../assets/Images/12.webp';
import img3 from '../assets/Images/13.webp';
import img4 from '../assets/Images/14.webp';

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  position: absolute;
  top: 1rem;
  left: 50%;
  z-index: 11;
  text-align: center;
  white-space: nowrap;
  
  /* Locomotive Scroll aplica transform, então usamos margin para centralizar */
  margin-left: -50%;
  width: 100%;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

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
  padding-top: 5rem;
`;

const CardsContainer = styled.div`
  width: auto;
  padding: 8rem 0 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 2.5rem; /* Espaçamento entre cards */

  @media (max-width: 64em) {
    gap: 2rem;
  }

  /* Force desktop: keep desktop spacing and no native scroll on small screens */
  
  @media (max-width: 30em) {
    gap: 1rem;
  }
`;

const Card = styled(motion.div)`
  display: inline-block;
  width: 20rem;
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

  /* keep desktop card sizes on all viewports */
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

  /* keep desktop image wrapper height on all viewports */
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

  /* keep desktop card content styles on all viewports */
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

    if (!element || !scrollingElement) return;

    let scrollDistance = 1500; // Fase 1: movimento dos cards até o centro
    let holdDistance = 500;    // Fase 2: tempo segurado no centro
    let totalDistance = scrollDistance + holdDistance; // Total do pin
    let movePhaseRatio = scrollDistance / totalDistance;

    // Use same two-step pin + horizontal timeline as other sections
    setTimeout(() => {
  // width used to determine pin scroll length
  let pinWrapWidth = scrollingElement.offsetWidth;

  // start the cards a bit more to the right (15% of viewport)
  const startOffsetPx = Math.round(window.innerWidth * 0.85);
  gsap.set(scrollingElement, { x: startOffsetPx });

      let t1 = gsap.timeline();

      // 1) pin the section for the width of the inner container
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${pinWrapWidth}`,
          scroller: ".App",
          scrub: 1,
          pin: true,
          id: "pin-diferenciais",
        },
        // set section height so the page can scroll through the horizontal content
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      // 2) while pinned, animate the inner container horizontally
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `+=${pinWrapWidth}`,
          scroller: ".App",
          scrub: 1,
          id: "pin-diferenciais-scroll",
        },
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      // Kill any ScrollTriggers and timelines created
      ScrollTrigger.getAll().forEach(st => st.kill());
      gsap.killTweensOf(scrollingElement);
    };
  }, []);

  return (
    <Section ref={ref} id="fixed-target" className="new-arrival">
      <Title data-scroll data-scroll-speed="-2">
        Diferenciais
      </Title>

      <CardsContainer ref={horizontalRef}>
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
