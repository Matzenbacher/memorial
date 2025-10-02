import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

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
  transform: translateX(-50%);

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
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

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 64em) {
    width: 40%;
    p {
      font-size: ${(props) => props.theme.fontmd};
      width: 90%;
    }
  }

  @media (max-width: 48em) {
    width: 100%;
    position: relative;
    min-height: auto;
    padding: 3rem 2rem;
    
    p {
      font-size: ${(props) => props.theme.fontsm};
      width: 100%;
    }
  }
  
  @media (max-width: 30em) {
    padding: 2rem 1rem;
    
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const Left = styled.div`
  position: absolute;
  right: 35%;
  padding-right: 30%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 4rem;
  
  @media (max-width: 48em) {
    position: relative;
    right: 0;
    padding: 2rem;
    width: 100%;
    min-height: 60vh;
    flex-direction: column;
  }
`;

const Item = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 28rem;
  
  img, video {
    width: 100%;
    height: 28rem;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  iframe {
    width: 100%;
    height: 28rem;
    border: none;
    border-radius: 12px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }

  h1 {
    font-weight: 500;
    text-align: center;
    margin-top: 1.5rem;
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 64em) {
    max-width: 24rem;
    
    img, video, iframe {
      height: 24rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: 1rem;
    }
  }

  @media (max-width: 48em) {
    max-width: 100%;
    
    img, video, iframe {
      height: 20rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  
  @media (max-width: 30em) {
    img, video, iframe {
      height: 16rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontxs};
      margin-top: 0.75rem;
    }
  }
`;

const Media = ({ type, src, title = "" }) => {
  return (
    <Item className="media-item">
      {type === "map" && (
        <iframe
          title={title}
          src={src}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      )}
      {type === "video" && (
        <video 
          controls 
          preload="metadata"
          playsInline
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeo.
        </video>
      )}
      <h1>{title}</h1>
    </Item>
  );
};

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let leftElement = Horizontalref.current;
    
    if (!element || !leftElement) return;
    
    let items = leftElement.querySelectorAll('.media-item');
    if (items.length === 0) return;

    setTimeout(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "+=200%",
          scroller: ".App",
          pin: true,
          pinSpacing: true,
          scrub: 1,
          // markers: true,
        }
      });

      // Fase 1: Aproximação (0% - 40%)
      t1.fromTo(items[0], 
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.out" },
        0
      );
      
      t1.fromTo(items[1], 
        { x: 200, opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.out" },
        0
      );

      // Fase 2: Pausa (40% - 60%) - elementos ficam parados
      t1.to({}, { duration: 0.5 });

      // Fase 3: Distanciamento (60% - 100%)
      t1.to(items[0], { 
        x: -200, 
        opacity: 0, 
        ease: "power2.in" 
      });
      
      t1.to(items[1], { 
        x: 200, 
        opacity: 0, 
        ease: "power2.in" 
      }, "<");
      
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="about">
      <Title data-scroll data-scroll-speed="-2">
        Sobre
      </Title>
      <Right>
        <p>
          O Memorial Garden é o único cemitério modelo parque da região de Ourinhos,
          projetado para oferecer um ambiente sereno, acolhedor e em harmonia com a natureza.
          <br /> <br />
          Com 14 anos de história, nos dedicamos a preservar memórias e homenagear vidas
          com dignidade e respeito. Nossos jardins cuidadosamente planejados proporcionam
          um espaço de paz e tranquilidade para as famílias.
        </p>
      </Right>
      <Left data-scroll ref={Horizontalref}>
        <Media 
          type="video" 
          src="/videos/video-institucional.mp4" 
          title="Vídeo Institucional"
        />
        <Media 
          type="map" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29412.0!2d-49.8766!3d-22.9766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU4JzM1LjgiUyA0OcKwNTInMzUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr&maptype=roadmap&disableDefaultUI=true&zoomControl=false" 
          title="Nossa Localização"
        />
      </Left>
    </Section>
  );
};

export default About;
