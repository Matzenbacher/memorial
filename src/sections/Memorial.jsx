import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { SectionTitle, SectionParagraph } from '../styles/SharedComponents';

const Section = styled(motion.section)`
  min-height: 100vh;
  height: auto;
  width: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  background-color: ${(props) => props.theme.grey};
  
  /* force desktop layout: no mobile column stacking */
`;

const ContentWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  overflow: hidden;
  box-sizing: border-box;
  
  /* force desktop layout: keep fixed positioning on all viewports */
`;

const TextContainer = styled.div`
  width: 40%; /* Ajustado para 40% para igualar visualmente ao Nosso Espaço */
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  z-index: 10;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;

  /* keep desktop TextContainer styles on all viewports */
`;

const VideoContainer = styled.div`
  width: 60%; /* Ajustado para 60% para compensar o TextContainer */
  height: 100vh;
  background-color: ${(props) => props.theme.grey};
  position: relative;
  overflow: visible; /* Permite vídeo sair pela esquerda */
  flex-shrink: 0;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  /* keep desktop VideoContainer styles on all viewports */
`;

const Item = styled(motion.div)`
  display: inline-block;
  width: 37rem;
  flex-shrink: 0;
  position: relative;
  
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

  /* keep desktop Item styles on all viewports */
`;

const Media = React.forwardRef(({ type, src, title = "" }, ref) => {
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
          ref={ref}
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
});

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const Horizontalref = useRef(null);
  const videoRef = useRef(null); // Ref para controlar o vídeo

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = Horizontalref.current;

    if (!element || !scrollingElement) return;

    gsap.registerPlugin(ScrollTrigger);

    // Force desktop animation for all viewports
    setTimeout(() => {
      let scrollDistance = 1000; // Fase 1: movimento do vídeo
      let holdDistance = 900;    // Fase 2: tempo travado
      let totalDistance = scrollDistance + holdDistance; // 1900px total
      let movePhaseRatio = scrollDistance / totalDistance; // 0.526 (53%)

      const recalculate = () => {
        const viewportWidth = window.innerWidth;
        const videoCard = scrollingElement.querySelector('.media-item');
        const videoCardWidth = videoCard?.offsetWidth || 592;
        
        const targetViewportPercent = 0.30; // 30% do viewport
        const targetPositionPx = viewportWidth * targetViewportPercent;
        const leftDoCard = targetPositionPx - (videoCardWidth / 2);
        const targetPositionPercent = (leftDoCard / viewportWidth) * 100;
        
        return { targetPositionPercent };
      };
      
      let { targetPositionPercent } = recalculate();
      
      const initialOffset = 0.2;
      const initialPosition = -70 + (initialOffset * (targetPositionPercent - (-100)));
      gsap.set(scrollingElement, { x: `${initialPosition}vw` });
      
      window.addEventListener('resize', () => {
        const result = recalculate();
        targetPositionPercent = result.targetPositionPercent;
      });
      
      ScrollTrigger.create({
        trigger: element,
        start: "top top",
        end: `+=${totalDistance}`,
        scroller: ".App",
        pin: true,
        scrub: 1,
        id: "memorial-desktop",
        onUpdate: (self) => {
          let progress = self.progress;
          
          if (progress < movePhaseRatio) {
            let moveProgress = progress / movePhaseRatio;
            const adjustedProgress = Math.min(1, moveProgress + initialOffset);
            const currentPercent = initialPosition + (adjustedProgress * (targetPositionPercent - initialPosition));
            gsap.set(scrollingElement, { x: `${currentPercent}vw` });
          } else {
            gsap.set(scrollingElement, { x: `${targetPositionPercent}vw` });
          }
        },
        onLeave: () => {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.muted = true;
          }
        },
        onEnterBack: () => {
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.muted = false;
          }
        }
      });

      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="about">
      <ContentWrapper>
        {/* <DivisorLine1 /> */}
        {/* <DivisorLine2 /> */}
        {/* <CenterLine /> */}
        <VideoContainer ref={Horizontalref}>
          <Media 
            ref={videoRef}
            type="video" 
            src="/videos/video-institucional.mp4" 
            title=""
          />
        </VideoContainer>
        <TextContainer>
          <SectionTitle data-scroll data-scroll-speed="-1">O Memorial</SectionTitle>
          <SectionParagraph>
            <br /> <br /><br />
            O Memorial Garden é o único cemitério modelo parque da região de Ourinhos,
            projetado para oferecer um ambiente sereno, acolhedor e em harmonia com a natureza.
            <br /> <br />
            Com 14 anos de história, nos dedicamos a preservar memórias e homenagear vidas
            com dignidade e respeito. Nossos jardins cuidadosamente planejados proporcionam
            um espaço de paz e tranquilidade para as famílias.
          </SectionParagraph>
        </TextContainer>
      </ContentWrapper>
    </Section>
  );
};

export default About;
