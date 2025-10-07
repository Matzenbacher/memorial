import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import logoImg from '../assets/Images/logo.webp';

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  z-index: 6;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: black;

  width: 100%;
`;

const LogoImage = styled(motion.img)`
  width: 20vw;
  height: auto;
  
  @media (max-width: 48em) {
    width: 36vw;
  }
  
  @media (max-width: 30em) {
    width: 48vw;
  }
`;

const logoVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,

    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

const Loader = () => {
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: '100%', opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <LogoImage
        src={logoImg}
        alt="Memorial Garden"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      />
    </Container>
  );
};

export default Loader;
