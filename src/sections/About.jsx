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
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const TextContainer = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  min-height: 100vh;
  z-index: 10;
  position: fixed;
  right: 0;
  top: 0;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  h2 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.primary};
    margin-bottom: 2rem;
  }

  p {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
    line-height: 1.6;
  }

  @media (max-width: 64em) {
    width: 40%;
    
    h2 {
      font-size: ${(props) => props.theme.fontxl};
      margin-bottom: 1.5rem;
    }
    
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
    
    h2 {
      font-size: ${(props) => props.theme.fontlg};
    }
    
    p {
      font-size: ${(props) => props.theme.fontsm};
      width: 100%;
    }
  }
  
  @media (max-width: 30em) {
    padding: 2rem 1rem;
    
    h2 {
      font-size: ${(props) => props.theme.fontmd};
      margin-bottom: 1rem;
    }
    
    p {
      font-size: ${(props) => props.theme.fontxs};
    }
  }
`;

const VideoContainer = styled.div`
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
    min-height: 60vh;
  }
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 37rem;
  margin-left: 6rem;
  flex-shrink: 0;
  
  video {
    width: 100%;
    height: 26rem;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  iframe {
    width: 100%;
    height: 26rem;
    border: none;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-weight: 500;
    text-align: center;
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fontlg};
  }

  @media (max-width: 64em) {
    width: 32rem;
    margin-left: 4rem;
    
    video, iframe {
      height: 22rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontmd};
    }
  }

  @media (max-width: 48em) {
    width: 25rem;
    margin-left: 3rem;
    
    video, iframe {
      height: 20rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontsm};
    }
  }
  
  @media (max-width: 30em) {
    width: 20rem;
    margin-left: 2rem;
    
    video, iframe {
      height: 16rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontxs};
      margin-top: 0.5rem;
    }
  }
`;

const Media = ({ type, src, title = "" }) => {
  return (
    <Item className="media-item">
      <h1>{title}</h1>
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
    </Item>
  );
};

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Horizontalref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;

    if (!element || !scrollingElement) return;

    let pinWrapWidth = scrollingElement.offsetWidth;
    // Usar valores fixos para garantir funcionamento
    let scrollDistance = 2000; // Distância fixa de scroll para completar a animação
    let t1 = gsap.timeline();

    setTimeout(() => {
      // Pin da seção durante a animação
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: `+=${scrollDistance}`, // Scroll fixo de 2000px
          scroller: ".App",
          scrub: 1, // Velocidade 1:1
          pin: true,
          markers: true, // Temporário para debug
        },
        ease: "none",
      });

      // Move o vídeo horizontalmente até centralizar
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: `+=${scrollDistance}`, // Mesmo scroll fixo
          scroller: ".App",
          scrub: 1, // Velocidade 1:1
          markers: true, // Temporário para debug
        },
        x: 215, // Movimento fixo de 215px para a esquerda para centralizar
        ease: "none",
      });
      
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="about">
      <Title data-scroll data-scroll-speed="-2">
      </Title>
      <TextContainer>
        <h2>Sobre</h2>
        <p>
          O Memorial Garden é o único cemitério modelo parque da região de Ourinhos,
          projetado para oferecer um ambiente sereno, acolhedor e em harmonia com a natureza.
          <br /> <br />
          Com 14 anos de história, nos dedicamos a preservar memórias e homenagear vidas
          com dignidade e respeito. Nossos jardins cuidadosamente planejados proporcionam
          um espaço de paz e tranquilidade para as famílias.
        </p>
      </TextContainer>
      <VideoContainer data-scroll ref={Horizontalref}>
        <Media 
          type="video" 
          src="/videos/video-institucional.mp4" 
          title=""
        />
      </VideoContainer>
    </Section>
  );
};

export default About;
