import React, { useState, useEffect } from "react";
import Snowflake from "../icons/SnowflakeIcon";

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const avatarClasses = `max-h-[420px] image ${isTransitioning ? 'animate-out' : 'animate-in'}`
  const photoClasses = `max-h-[396px] mb-6 rounded-2xl image ${isTransitioning ? 'animate-out' : 'animate-in'}`

  const images = [
    { src: "pepa-mraz-cz-programator-macbook.PNG", className: avatarClasses, alt: "" },
    { src: "pepamraz-cz-usmev-na-utesu.webp", className: photoClasses, alt: "Úsměv na útesu v Chorvatsku 🪸" },
    { src: "pepamraz-cz-svaly-u-more.webp", className: photoClasses, alt: "Svaly u moře 🏝️" },
    { src: "pepamraz-cz-stojka-na-strese.webp", className: photoClasses, alt: "Stojka na střeše budovy 🤸‍♂️" },
    { src: "pepa-mraz-cz-bro-frajer-borec.webp", className: avatarClasses, alt: "" },
    { src: 'pepamraz-cz-dymka-v-turecku.webp', className: photoClasses, alt: 'V Turecku kouřící vodní dýmku s přítelem 🚬' },
    { src: "pepamraz-cz-ve-meste-v-cervene-mikine.webp", className: photoClasses, alt: "Město Ostrava, červená mikina 🌆" },
    { src: "pepamraz-cz-workout-svaly-dlouhe-vlasy.webp", className: photoClasses, alt: "Svaly, workout a dlouhé vlasy 💪" },
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
          Pepa&nbsp;<div className="text-blue-500 font-bold">Mráz<Snowflake /></div>
        </h2>
        <button onClick={() => (window.location.href = "#kontakt")}>
          Kotaktovat <i className="pl-2 fa-solid fa-envelope"></i>
        </button>
      </div>
      <div className="px-4 image-container drop-shadow-2xl relative">
        <img src={images[activeIndex].src} className={images[activeIndex].className} alt={images[activeIndex].alt} />
        <h3 className={`image absolute -bottom-2 p-2 bg-opacity-50 font-mono font-bold drop-shadow-xl ${isTransitioning ? 'animate-out' : 'animate-in'}`}>{images[activeIndex].alt}</h3>
      </div>
    </div>
  );
};

export default Hero;
