import { useEffect, useState } from 'react';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 300);
    const frame = requestAnimationFrame(update);
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
    };
  }, []);
  return visible ? (
    <a href="#home" className="scroll-top is-visible" aria-label="Volver al inicio">
      <i className="lni lni-chevron-up" aria-hidden="true" />
    </a>
  ) : null;
}
