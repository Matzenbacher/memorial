import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hook para gerenciar animações GSAP responsivas usando matchMedia
 * Baseado na documentação oficial: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()
 * 
 * @param {Function} setupFunction - Função que recebe o contexto matchMedia e configura as animações
 * @param {Array} dependencies - Array de dependências para o useEffect
 * 
 * @example
 * useGSAPMatchMedia((mm) => {
 *   mm.add("(min-width: 1024px)", () => {
 *     // Animações desktop
 *     gsap.to(".element", { x: 100 });
 *     return () => {}; // Cleanup
 *   });
 *   
 *   mm.add("(max-width: 1023px)", () => {
 *     // Animações mobile
 *     gsap.to(".element", { y: 100 });
 *     return () => {}; // Cleanup
 *   });
 * }, []);
 */
const useGSAPMatchMedia = (setupFunction, dependencies = []) => {
  const mmRef = useRef(null);

  useEffect(() => {
    // Criar instância matchMedia
    const mm = gsap.matchMedia();
    mmRef.current = mm;

    // Executar função de setup com o contexto matchMedia
    if (setupFunction && typeof setupFunction === 'function') {
      setupFunction(mm);
    }

    // Cleanup: reverter todas as animações do matchMedia
    return () => {
      if (mmRef.current) {
        mmRef.current.revert();
      }
    };
  }, dependencies); // eslint-disable-line react-hooks/exhaustive-deps

  return mmRef.current;
};

export default useGSAPMatchMedia;
