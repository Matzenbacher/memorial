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

// Use desktop title & paragraph styles (force desktop layout)
const Title = styled(SectionTitle)``;
const Paragraph = styled(SectionParagraph)``;

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: -5 auto;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  /* force desktop layout: no mobile column stacking */
  background-color: ${(props) => props.theme.grey};
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
  /* shift up 2rem from perfect center */
  transform: translateY(-2rem);

    
  /* keep desktop Left styles on all viewports */
`;
const Right = styled.div`
  position: absolute;
  left: 35%;
  padding-left: 30%;
  background-color: ${props => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  /* keep desktop Right styles on all viewports */
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



  /* keep desktop Item styles on all viewports */
`;
const Product = ({ img, title = "" }) => {
  return (
    <Item
      className="gallery-item"
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
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;

    if (!element || !scrollingElement) return;

    gsap.registerPlugin(ScrollTrigger);

    // Force desktop behavior for all viewports: animate title first, then two-step timeline (pin then horizontal scroll)
    setTimeout(() => {
      // animate title down a bit before carousel pins
      if (titleRef.current) {
        gsap.set(titleRef.current, { y: -60, opacity: 0 });
        gsap.to(titleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            // start earlier so the title drops before the carousel pins
            start: "top 95%",
            end: "top 75%",
            scroller: ".App",
            id: "nosso-espaco-title",
            toggleActions: "play none none reverse",
          },
        });
      }

      let pinWrapWidth = scrollingElement.offsetWidth;
      let t1 = gsap.timeline();

      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${pinWrapWidth}`,
          scroller: ".App",
          scrub: 1,
          pin: true,
          id: "nosso-espaco-pin-desktop",
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none",
      });

      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `+=${pinWrapWidth}`,
          scroller: ".App",
          scrub: 1,
          id: "nosso-espaco-scroll-desktop",
        },
        x: -pinWrapWidth,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="shop">
      <Left>
        <Title ref={titleRef} data-scroll data-scroll-speed="-1">Nosso Espaço</Title>
        <br /> <br /> <br />
        <Paragraph>
          O Memorial Garden é o único cemitério modelo parque da região de Ourinhos, 
          projetado para oferecer um ambiente sereno e acolhedor. Nossa estrutura 
          privilegia a harmonia com a natureza, proporcionando um espaço de paz e 
          tranquilidade para homenagear aqueles que amamos.

          Com jardins cuidadosamente planejados e uma arquitetura que respeita a 
          dignidade de cada momento, criamos um lugar onde memórias podem ser 
          preservadas com carinho e respeito. Cada detalhe foi pensado para transmitir 
          conforto e serenidade às famílias.
        </Paragraph>
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
