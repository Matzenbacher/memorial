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
  left: 0;
  top: 0;
  width: 65%;
  background-color: ${(props) => props.theme.grey};
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  
  @media (max-width: 64em) {
    width: 60%;
  }
  
  @media (max-width: 48em) {
    position: relative;
    padding: 3rem 2rem;
    width: 100%;
    min-height: 60vh;
  }
`;

const Item = styled(motion.div)`
  width: 100%;
  max-width: 37rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img, video {
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
    max-width: 32rem;
    
    img, video, iframe {
      height: 22rem;
    }
    
    h1 {
      font-size: ${(props) => props.theme.fontmd};
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
    let leftElement = Horizontalref.current;
    
    if (!element || !leftElement) return;
    
    let items = leftElement.querySelectorAll('.media-item');
    if (items.length === 0) return;

    setTimeout(() => {
      let t1 = gsap.timeline({
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "+=100%",
          scroller: ".App",
          pin: true,
          pinSpacing: true,
          scrub: 1,
        }
      });

      // Apenas aproximação - elementos aparecem e ficam
      t1.fromTo(items[0], 
        { x: -200, opacity: 0 },
        { x: 0, opacity: 1, ease: "power2.out" }
      );
      
      // Elementos ficam parados no final
      t1.to({}, { duration: 0.5 });
      
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
      <TextContainer>
        <h2>Vídeo Institucional</h2>
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
