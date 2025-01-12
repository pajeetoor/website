import React, { useState, useEffect } from 'react';

const investors = [
  'A16z',
  'Coinbase',
  'Robinhood',
  'Paradigm',
  'Binance',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % investors.length);
    }, 2000); // Change interval to 2 seconds

    return () => clearInterval(interval);
  }, [currentIndex, investors.length]);

  return (
    <div className="max-w-4xl mx-auto mb-16">
      <div
        key={currentIndex}
        className="feature-card animate-border-glow p-8 flex items-center justify-center gap-4 cursor-pointer hover:scale-105 transition-transform duration-300"
        onClick={() => window.open(`https://www.${investors[currentIndex].toLowerCase()}.com`, '_blank')}
      >
        <h3 className="text-2xl font-bold text-white tech-text">Backed By:</h3>
        <h3 className="text-2xl font-bold text-[#FF9933] tech-text">
          {investors[currentIndex]}
        </h3>
      </div>
    </div>
  );
};

export default Carousel;
