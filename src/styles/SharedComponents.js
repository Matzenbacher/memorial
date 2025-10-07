import styled from 'styled-components';

/**
 * Título de seção padrão (h2)
 * Usado em: About.jsx, Shop.jsx (Left component)
 */
export const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-bottom: 1.5rem;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
  
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontmd};
    margin-bottom: 1rem;
  }
`;

/**
 * Parágrafo de seção padrão (p)
 * Usado em: About.jsx, Shop.jsx (Left component)
 */
export const SectionParagraph = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  width: 80%;
  margin: 0 auto;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontmd};
    width: 90%;
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
    width: 100%;
  }
  
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

/**
 * Título absoluto no topo da seção (h1)
 * Usado em: Shop.jsx, NewArrival.jsx
 */
export const AbsoluteTitle = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: ${(props) => props.theme.primary};
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 11;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
