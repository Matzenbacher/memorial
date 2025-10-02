import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logoImg from '../assets/Images/logo.webp';

const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 6;

  width: 100%;
  width: fit-content;

  a {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img {
    width: 4rem;
    height: auto;
    
    @media (max-width: 48em) {
      width: 3rem;
    }
    
    @media (max-width: 30em) {
      width: 2.5rem;
    }
  }
`;
const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: 'easeInOut',
    },
  },
};

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <motion.img
          src={logoImg}
          alt="Memorial Garden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
        />
        <Text
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Memorial Garden
        </Text>
      </Link>
    </Container>
  );
};

export default Logo;
