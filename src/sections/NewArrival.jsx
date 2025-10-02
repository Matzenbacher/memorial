import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/11.webp';
import img2 from '../assets/Images/12.webp';
import img3 from '../assets/Images/13.webp';
import img4 from '../assets/Images/14.webp';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 5rem 0;
  background: ${(props) => props.theme.body};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    padding: 3rem 0;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-bottom: 3rem;
  }
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
    margin-bottom: 2rem;
  }
`;

const CardsContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  padding: 0 2rem;

  @media (max-width: 64em) {
    gap: 2rem;
  }
  
  @media (max-width: 48em) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Card = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut"
    }
  })
};

const NewArrival = () => {
  return (
    <Section id="fixed-target" className="new-arrival">
      <Title
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        Diferenciais
      </Title>

      <CardsContainer>
        {differentials.map((item, index) => (
          <Card
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <ImageWrapper>
              <img src={item.img} alt={item.title} />
            </ImageWrapper>
            <CardContent>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default NewArrival;
