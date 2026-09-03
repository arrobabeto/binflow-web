import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Animaciones de entrada al hacer scroll.
 *
 * Los elementos marcados con `data-reveal` empiezan ocultos (ver global.css)
 * y se revelan al entrar en viewport. Si el usuario prefiere menos movimiento,
 * se muestran de inmediato sin animar.
 */
export function initReveal(): void {
  const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  targets.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        once: true
      },
      onStart: () => el.classList.add('is-visible')
    });
  });
}
