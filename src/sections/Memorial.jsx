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
  
  @media (max-width: 48em) {
    flex-direction: column;
  }
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
  
  @media (max-width: 48em) {
    position: relative;
    height: auto;
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-shadow: 1px 1px 1px ${(props) => props.theme.body};

  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
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

  @media (max-width: 64em) {
    width: 45%; /* Ajustado para 45% em tablet */
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
  
  @media (max-width: 48em) {
    width: 100%;
    min-height: 60vh;
    height: auto;
    
    &::before {
      display: none;
    }
  }
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

    let scrollDistance = 1000; // Fase 1: movimento do vídeo
    let holdDistance = 900;    // Fase 2: tempo travado
    let totalDistance = scrollDistance + holdDistance; // 1900px total
    let movePhaseRatio = scrollDistance / totalDistance; // 0.526 (53%)

    setTimeout(() => {
      // 🎯 AJUSTADO: Vídeo agora na esquerda, animação da esquerda para direita
      // Queremos: centro do vídeo em 30% do viewport (dentro do container esquerdo)
      const recalculate = () => {
        const viewportWidth = window.innerWidth;
        const videoCard = scrollingElement.querySelector('.media-item');
        const videoCardWidth = videoCard?.offsetWidth || 592;
        
        // Como o vídeo está no container esquerdo (60% da tela), queremos que o centro
        // do vídeo fique aproximadamente no meio do container esquerdo
        // Container esquerdo: 0% a 60% do viewport
        // Centro do container esquerdo: 60% / 2 = 30%
        const targetViewportPercent = 0.30; // 30% do viewport
        
        // Centro do card deve ficar em targetViewportPercent do viewport
        const targetPositionPx = viewportWidth * targetViewportPercent;
        const leftDoCard = targetPositionPx - (videoCardWidth / 2);
        
        // Converter para porcentagem do viewport
        const targetPositionPercent = (leftDoCard / viewportWidth) * 100;
        
        return { targetPositionPercent };
      };
      
      let { targetPositionPercent } = recalculate();
      
      // ✅ IMPORTANTE: Posicionar vídeo fora da tela (-100vw) ANTES de criar o ScrollTrigger
      gsap.set(scrollingElement, { x: '-100vw' });
      console.log('✅ Vídeo posicionado em -100vw (fora da tela)');
      
      // Recalcular em resize
      window.addEventListener('resize', () => {
        const result = recalculate();
        targetPositionPercent = result.targetPositionPercent;
        console.log('Recalculated target position:', targetPositionPercent, '%');
      });
      
      // ScrollTrigger com pin que controla o movimento
      ScrollTrigger.create({
        trigger: element,
        start: "top top",
        end: `+=${totalDistance}`, // Total: 1900px (1000 movimento + 900 hold)
        scroller: ".App",
        pin: true,
        scrub: 1,
        id: "pin-movement",
        onUpdate: (self) => {
          let progress = self.progress;
          
          // FASE 1 (0% → ~53%): Vídeo entra da esquerda até posição alvo (30% viewport)
          if (progress < movePhaseRatio) {
            let moveProgress = progress / movePhaseRatio; // Normaliza para 0-1
            
            // Começar de fora da tela (left = -cardWidth = -100vw aproximadamente)
            const startPercent = -100; // -100% do viewport (completamente fora à esquerda)
            
            // Interpolar de -100vw até targetPositionPercent (30% - cardWidth/2)
            const currentPercent = startPercent + (moveProgress * (targetPositionPercent - startPercent));
            
            gsap.set(scrollingElement, { x: `${currentPercent}vw` });
            console.log(`📍 FASE 1: progress=${(progress*100).toFixed(1)}% | moveProgress=${(moveProgress*100).toFixed(1)}% | x=${currentPercent.toFixed(1)}vw`);
          } 
          // FASE 2 (53% → 100%): Vídeo fixo na posição alvo (30% viewport)
          else {
            gsap.set(scrollingElement, { x: `${targetPositionPercent}vw` });
            console.log(`📍 FASE 2: progress=${(progress*100).toFixed(1)}% | x=${targetPositionPercent.toFixed(1)}vw (TRAVADO)`);
          }
        },
        onLeave: () => {
          // Quando o end vermelho (fim do pin) passar pelo topo da viewport
          console.log('End marker passou pelo start - mutando vídeo');
          if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.muted = true;
          }
        },
        onEnterBack: () => {
          // Quando voltar para dentro da área do pin
          console.log('Voltou para área do pin - desmutando vídeo');
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
          <SectionTitle>O Memorial</SectionTitle>
          <SectionParagraph>
            <br /> <br />
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
