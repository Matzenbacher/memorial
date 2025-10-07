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
  
  /* Espaçamento extra para evitar conflito com pin anterior */
  //margin-top: 2rem;
  
  /* Linha vermelha no centro do viewport (50%) - DEBUG */
  &::before {
    content: '';
    position: fixed;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, 
      #FF0000 0%, 
      #FF3984 50%, 
      #FF0000 100%);
    transform: translateX(-2px);
    z-index: 1000;
    opacity: 0.9;
    pointer-events: none;
    box-shadow: 0 0 15px rgba(255, 0, 0, 0.6);
    
    @media (max-width: 48em) {
      display: none;
    }
  }
`;

const CardsContainer = styled.div`
  width: auto;
  padding: 8rem 0 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 2.5rem; /* Espaçamento entre cards */
  
  /* Linha azul no centro do container dos cards - DEBUG */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, 
      #0000FF 0%, 
      #6C20AF 50%, 
      #0000FF 100%);
    transform: translateX(-2px);
    z-index: 1001;
    opacity: 0.9;
    pointer-events: none;
    box-shadow: 0 0 15px rgba(0, 0, 255, 0.6);
    
    @media (max-width: 48em) {
      display: none;
    }
  }

  @media (max-width: 64em) {
    gap: 2rem;
  }

  @media (max-width: 48em) {
    padding: 6rem 0 3rem 0;
    gap: 1.5rem;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
    
    &::-webkit-scrollbar {
      height: 8px;
    }
    
    &::-webkit-scrollbar-track {
      background: ${(props) => props.theme.grey};
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: ${(props) => props.theme.primary};
      border-radius: 10px;
    }
  }
  
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

  @media (max-width: 64em) {
    width: 18rem;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
  
  @media (max-width: 30em) {
    width: 12rem;
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

    if (!element || !scrollingElement) return;

    let pinDuration = 1500; // Reduzido de 2000 para 1500 para evitar conflito

    setTimeout(() => {
      // Verificar se é mobile (desabilita animação GSAP)
      const isMobile = window.innerWidth <= 768; // 48em = 768px
      
      if (isMobile) {
        console.log('📱 Mobile detected - usando scroll nativo');
        return; // Não criar ScrollTrigger em mobile
      }
      
      // 🎯 SIMPLES: Linha vermelha = 50% viewport | Linha azul = centro do container
      // Queremos: centro do container em 50% do viewport SEMPRE
      const recalculate = () => {
        const viewportWidth = window.innerWidth;
        const containerWidth = scrollingElement.offsetWidth;
        
        // Linha vermelha está SEMPRE em 50% do viewport (em pixels)
        const linhaVermelhaEmPx = viewportWidth * 0.5;
        
        // Centro do container deve ficar em 50% do viewport
        // Se o container tem left=0 inicialmente, seu centro está em containerWidth/2
        // Para mover o centro para 50% do viewport:
        // left do container = 50%viewport - containerWidth/2
        const leftDoContainer = linhaVermelhaEmPx - (containerWidth / 2);
        
        // 🔧 AJUSTE: Mover mais para a esquerda (valores negativos = esquerda)
        const ajusteEsquerda = -140; // -50px para a esquerda
        
        // Converter para porcentagem do viewport (não do container!)
        const targetPositionPercent = ((leftDoContainer + ajusteEsquerda) / viewportWidth) * 100;
        
        console.log('🎯 Diferenciais - Posições calculadas:', {
          viewport: viewportWidth + 'px',
          linhaVermelha: linhaVermelhaEmPx + 'px (50% viewport)',
          containerWidth: containerWidth + 'px',
          leftDoContainer: leftDoContainer + 'px',
          ajusteEsquerda: ajusteEsquerda + 'px',
          targetPercent: targetPositionPercent.toFixed(2) + '% do viewport'
        });
        
        return { targetPositionPercent };
      };
      
      let { targetPositionPercent } = recalculate();
      
      // ✅ IMPORTANTE: Posicionar cards fora da tela (100vw) ANTES de criar o ScrollTrigger
      gsap.set(scrollingElement, { x: '100vw' });
      console.log('✅ Cards posicionados em 100vw (fora da tela à direita)');
      console.log('🎯 Vão para:', targetPositionPercent.toFixed(2), 'vw (centro alinhado)');
      
      // Recalcular em resize
      window.addEventListener('resize', () => {
        const result = recalculate();
        targetPositionPercent = result.targetPositionPercent;
        console.log('♻️ Recalculado target position:', targetPositionPercent.toFixed(2), 'vw');
      });
      
      // ScrollTrigger: anima continuamente de 100vw até targetPositionPercent
      ScrollTrigger.create({
        trigger: element,
        start: "top top", // Mudou de "top-=300 top" para "top top"
        end: `+=${pinDuration}`,
        scroller: ".App",
        pin: true,
        scrub: 1,
        markers: { startColor: "green", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20 },
        id: "pin-diferenciais",
        onUpdate: (self) => {
          let progress = self.progress; // 0 → 1
          
          // Começar de fora da tela (right = 100vw)
          const startPercent = 100;
          
          // Interpolar de 100vw até targetPositionPercent
          const currentPercent = startPercent + (progress * (targetPositionPercent - startPercent));
          
          gsap.set(scrollingElement, { x: `${currentPercent}vw` });
          
          if (progress === 0 || progress === 1 || Math.abs(progress - 0.5) < 0.01) {
            console.log(`📍 progress=${(progress*100).toFixed(1)}% | x=${currentPercent.toFixed(2)}vw | target=${targetPositionPercent.toFixed(2)}vw`);
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
