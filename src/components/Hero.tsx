import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="hero-section grid grid-cols-1 place-items-center md:grid-cols-2" id="hero">
      <div className="p-4 flex flex-col gap-y-8 items-center md:items-start justify-evenly">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Programátor
          <br />
          webových stránek
        </h1>
        <h2 className="flex text-2xl">
          Pepa&nbsp;
          <div className="text-blue-500 font-bold">Mráz</div>
        </h2>
        <button onClick={() => (window.location.href = "#kontakt")}>
          Kotaktovat <i className="pl-2 fa-solid fa-envelope"></i>
        </button>
      </div>
      <div className="px-4">
        <img src="IMG_3285.PNG" alt="Pepa Mráz Programátor avatar" />
      </div>
    </div>
  );
};

export default Hero;
