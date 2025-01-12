import React, { useEffect, useRef } from 'react';

function TextReveal({ children, delay = 0 }) {
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [delay]);

  return (
    <span className="text-reveal-container">
      <span ref={textRef} className="text-reveal">
        {children}
      </span>
    </span>
  );
}

export default TextReveal;
