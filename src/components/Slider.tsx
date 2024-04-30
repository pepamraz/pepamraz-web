import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import SliderItem from "./SliderItem";
import Modal from "./Modal";
import { Wordpress } from "../technologies/Wordpress";
import { PHP } from "../technologies/PHP";
import { ReactFramework } from "../technologies/ReactFramework";
import { CSS } from "../technologies/CSS";
import { HTML } from "../technologies/HTML";
import { JavaScript } from "../technologies/JavaScript";
import { PremierePro } from "../technologies/PremierePro";
import { Elementor } from "../technologies/Elementor";
import { Git } from "../technologies/Git";
import { WooCommerce } from "../technologies/WooCommerce";
import { Linux } from "../technologies/Linux";
import { Bash } from "../technologies/Bash";
import { CSharp } from "../technologies/CSharp";

interface Technology {
  icon: string;
  title: string;
  body: JSX.Element;
  images: string[];
}

interface TechnologyMap {
  [key: string]: Technology;
}

const technologies: TechnologyMap[] = [
  {
    Wordpress: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-wordpress.svg",
      title: "Wordpress",
      body: <Wordpress />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    PHP: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-php.svg",
      title: "PHP",
      body: <PHP />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    React: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-react.svg",
      title: "React",
      body: <ReactFramework />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    CSS: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-css.svg",
      title: "CSS",
      body: <CSS />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    HTML: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-html.svg",
      title: "HTML",
      body: <HTML />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    JavaScript: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-javascript.svg",
      title: "JavaScript",
      body: <JavaScript />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    "Premiere Pro": {
      icon: "./tech-icons/pepamraz-cz-technology-icon-premiere-pro.svg",
      title: "Premiere Pro",
      body: <PremierePro />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    Elementor: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-elementor.svg",
      title: "Elementor",
      body: <Elementor />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    Git: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-git.svg",
      title: "Git",
      body: <Git />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    WooCommerce: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-woocommerce.svg",
      title: "WooCommerce",
      body: <WooCommerce />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    Linux: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-linux.svg",
      title: "Linux",
      body: <Linux />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    Bash: {
      icon: "./tech-icons/pepamraz-cz-technology-icon-bash.svg",
      title: "Bash",
      body: <Bash />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
    "C#": {
      icon: "./tech-icons/pepamraz-cz-technology-icon-c-sharp.svg",
      title: "C#",
      body: <CSharp />,
      images: [
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
        "https://picsum.photos/1080",
      ],
    },
  },
];

const Slider: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const allTechnologies = Object.keys(technologies[0]);

  const handleItemClick = (tech) => {
    setSelectedTech(tech);
  };

  const findTechIndex = (tech) => {
    return allTechnologies.findIndex((key) => technologies[0][key] === tech);
  };

  const handleNext = () => {
    const currentIndex = findTechIndex(selectedTech);
    if (currentIndex >= 0 && currentIndex < allTechnologies.length - 1) {
      setSelectedTech(technologies[0][allTechnologies[currentIndex + 1]]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = findTechIndex(selectedTech);
    if (currentIndex > 0) {
      setSelectedTech(technologies[0][allTechnologies[currentIndex - 1]]);
    }
  };

  return (
    <div
      className={`flex flex-wrap md:flex-nowrap justify-evenly gap-2 bg-primary border-t-8 border-b-8 border-secondary p-4`}
      id="technologie"
    >
      {technologies.map((techMap) =>
        Object.keys(techMap).map((key) => (
          <Tippy key={key} content={techMap[key].title} placement="bottom">
            <div
              key={key}
              onClick={() => handleItemClick(techMap[key])}
              style={{ cursor: "pointer" }}
            >
              <SliderItem
                image={techMap[key].icon}
                text={techMap[key].title}
                showTitle={false}
              />
            </div>
          </Tippy>
        ))
      )}
      {selectedTech && (
        <Modal
          tech={selectedTech}
          onClose={() => setSelectedTech(null)}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </div>
  );
};

export default Slider;
