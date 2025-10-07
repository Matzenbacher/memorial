import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { SectionTitle, SectionParagraph } from '../styles/SharedComponents';

import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import img4 from "../assets/Images/4.webp";
import img5 from "../assets/Images/5.webp";
import img6 from "../assets/Images/6.webp";
import img7 from "../assets/Images/7.webp";
import img8 from "../assets/Images/8.webp";
import img9 from "../assets/Images/9.webp";
import img10 from "../assets/Images/10.webp";
import img11 from "../assets/Images/11.webp";
import img12 from "../assets/Images/12.webp";

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  /* width: 80vw; */
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;

  /* background-color: orange; */
`;

const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  min-height: 100vh;
  z-index: 10;

  position: fixed;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  @media (max-width: 48em) {
    position: relative;
    left: 0;
    padding-left: 2rem;
    width: 100%;
    overflow-x: auto;
    min-height: 60vh;
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
    cursor: pointer;
    border-radius: 8px;
  }

  h1 {
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 64em) {
    width: 18rem;
    margin-right: 4rem;
    
    img {
      height: 27rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 15rem;
    margin-right: 3rem;
    
    img {
      height: 22.5rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  
  @media (max-width: 30em) {
    width: 12rem;
    margin-right: 2rem;
    
    img {
      height: 18rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontxs};
      margin-top: 0.5rem;
    }
  }
`;
const Product = ({ img, title = "" }) => {
  return (
    // x: 100, y: -100
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img width="400" height="600" src={img} alt={title} />
      <h1>{title}</h1>
    </Item>
  );
};

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;

    let scrollingElement = Horizontalref.current;

    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          pin: true,
          // markers: true,
          // anticipatePin: 1,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `${pinWrapWidth} bottom`,
          scroller: ".App", //locomotive-scroll
          scrub: 1,
          // markers: true,
        },
        x: -pinWrapWidth,

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
    <Section ref={ref} id="shop">
      <Left>
        <SectionTitle>Nosso Espaço</SectionTitle>
        <br /> <br />
        <SectionParagraph>
          O Memorial Garden é o único cemitério modelo parque da região de Ourinhos, 
          projetado para oferecer um ambiente sereno e acolhedor. Nossa estrutura 
          privilegia a harmonia com a natureza, proporcionando um espaço de paz e 
          tranquilidade para homenagear aqueles que amamos.

          Com jardins cuidadosamente planejados e uma arquitetura que respeita a 
          dignidade de cada momento, criamos um lugar onde memórias podem ser 
          preservadas com carinho e respeito. Cada detalhe foi pensado para transmitir 
          conforto e serenidade às famílias.
        </SectionParagraph>
      </Left>
      <Right data-scroll ref={Horizontalref}>
        <Product img={img1} title="Ambiente" />
        <Product img={img2} title="Jardim" />
        <Product img={img3} title="Tranquilidade" />
        <Product img={img4} title="Natureza" />
        <Product img={img5} title="Serenidade" />
        <Product img={img6} title="Paz" />
        <Product img={img7} title="Memória" />
        <Product img={img8} title="Cuidado" />
        <Product img={img9} title="Acolhimento" />
        <Product img={img10} title="Respeito" />
        <Product img={img11} title="Conforto" />
        <Product img={img12} title="Homenagem" />
      </Right>
    </Section>
  );
};

export default Shop;
