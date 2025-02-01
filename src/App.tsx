import React from "react";
import "./App.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Signature from "./components/Signature";

import sectionsData from "./data/SectionData.json";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <div className="max-w-5xl m-auto pt-24">
        <Hero />
      </div>
      <Slider />
      <div className="max-w-5xl m-auto">
        {sectionsData.map((section, index) => (
          <Section
            key={index}
            id={section.id}
            title={section.title}
            content={section.content}
            button={section.button}
            icon={section.icon}
            link={section.link}
            image1={section.image1}
            image2={section.image2}
            switchSides={index % 2 == 1}
          />
        ))}
      </div>
      <Footer />
      <Signature />
    </>
  );
};

export default App;
