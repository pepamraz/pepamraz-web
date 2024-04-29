import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const images = [
    "pepa-mraz-cz-programator-macbook.PNG",
    "pepa-mraz-cz-bro-frajer-borec.webp",
    "pepa-mraz-cz-hodny-muz.webp"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % images.length);
        setIsTransitioning(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section grid grid-cols-1 place-items-center md:grid-cols-2" id="hero">
      <div className="p-4 flex flex-col gap-y-8 items-center md:items-start justify-evenly">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Programátor
          <br />
          webových stránek
        </h1>
        <h2 className="flex text-2xl">
          Pepa&nbsp;<div className="text-blue-500 font-bold">Mráz</div>
        </h2>
        <button onClick={() => (window.location.href = "#kontakt")}>
          Kotaktovat <i className="pl-2 fa-solid fa-envelope"></i>
        </button>
      </div>
      <div className="px-4 image-container">
        <img src={images[activeIndex]} alt="Pepa Mráz Programátor avatar" className={`max-h-[420px] image ${isTransitioning ? 'animate-out' : 'animate-in'}`} />
      </div>
    </div>
  );
};

export default Hero;
