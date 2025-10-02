import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

import MainVideo from "../assets/sky.mp4";

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  
  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    object-position: center center;

    @media (max-width: 64em) {
      object-position: center center;
    }
    
    @media (max-width: 48em) {
      object-position: center center;
      height: 100vh;
    }
    
    @media (max-width: 30em) {
      object-position: center center;
    }
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  padding: 0 2rem;

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: ${(props) => props.theme.fontxxxl};
    font-weight: 400;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    line-height: 1.3;
    text-align: center;
    color: #ffffff;
    opacity: 1;

    @media (max-width: 64em) {
      font-size: ${(props) => props.theme.fontxxl};
    }
    
    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
      line-height: 1.2;
    }
    
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontlg};
      br {
        display: none;
      }
    }
  }
  
  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
    margin: 0 auto;
    margin-top: 1rem;
    text-align: center;
    max-width: 90%;
    color: #ffffff;
    opacity: 1;

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: 0.75rem;
    }
    
    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontsm};
      margin-top: 0.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  return (
    <VideoContainer data-scroll>
      <DarkOverlay />

      <Title variants={container} initial="hidden" animate="show">
        <motion.h1
          variants={item}
          data-scroll
          data-scroll-speed="2"
        >
          Preservamos a memória de histórias<br/>que não devem ser esquecidas
        </motion.h1>
        <motion.h2
          variants={item}
          data-scroll
          data-scroll-delay="0.04"
          data-scroll-speed="1"
        >
          Cemitério Parque Memorial Garden • Ourinhos SP
        </motion.h2>
      </Title>

      <video src={MainVideo} type="video/mp4" autoPlay muted loop />
    </VideoContainer>
  );
};

export default CoverVideo;
