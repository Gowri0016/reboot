import AOS from 'aos';
import 'aos/dist/aos.css';

export function initAOS() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 900;
  AOS.init({
    duration: isMobile ? 400 : 800,
    once: true,
    easing: 'ease-in-out',
    offset: isMobile ? 40 : 120,
    delay: isMobile ? 0 : 100,
    mirror: false,
  });
}
