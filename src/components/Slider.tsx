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
import { Elementor } from "../technologies/Elementor";
import { Git } from "../technologies/Git";
import { WooCommerce } from "../technologies/WooCommerce";
import { Linux } from "../technologies/Linux";
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
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-wordpress.svg",
      title: "Wordpress",
      body: <Wordpress />,
      images: [
        "./tech/tech-images/wordpress/pepamraz-cz-nejlepsiwebovky-cz-homepage.webp",
        "./tech/tech-images/woocommerce/pepamraz-cz-greenly-cz-homepage.webp",
        "./tech/tech-images/wordpress/pepamraz-cz-tech-image-laptop-wordpress-icon.jpg",
        "./tech/tech-images/wordpress/pepamraz-cz-tech-image-wordpress-hosting-panel.jpg",
        "./tech/tech-images/wordpress/pepamraz-cz-tech-image-wordpress-programmer.jpg",
      ],
    },
    PHP: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-php.svg",
      title: "PHP",
      body: <PHP />,
      images: [
        "./tech/tech-images/php/pepamraz-cz-tech-image-php-elephant-laptop.jpg",
        "./tech/tech-images/php/pepamraz-cz-tech-image-website-programming-languages.jpg",
      ],
    },
    React: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-react.svg",
      title: "React",
      body: <ReactFramework />,
      images: [
        "./tech/tech-images/react-framework/pepamraz-cz-tech-image-react-app.jpg",
        "./tech/tech-images/react-framework/pepamraz-cz-tech-image-react-router.jpg",
      ],
    },
    CSS: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-css.svg",
      title: "CSS",
      body: <CSS />,
      images: [
        "./tech/tech-images/css/pepamraz-cz-tech-image-css-book.jpg",
        "./tech/tech-images/css/pepamraz-cz-tech-image-css-code-lines.jpg",
      ],
    },
    HTML: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-html.svg",
      title: "HTML",
      body: <HTML />,
      images: [
        "./tech/tech-images/html/pepamraz-cz-tech-image-browser-icons.jpg",
        "./tech/tech-images/php/pepamraz-cz-tech-image-website-programming-languages.jpg",
      ],
    },
    JavaScript: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-javascript.svg",
      title: "JavaScript",
      body: <JavaScript />,
      images: [
        "./tech/tech-images/js/pepamraz-cz-tech-image-javascript-book.jpg",
        "./tech/tech-images/js/pepamraz-cz-tech-image-javascript.jpg",
      ],
    },
    Elementor: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-elementor.svg",
      title: "Elementor",
      body: <Elementor />,
      images: [
        "./tech/tech-images/wordpress/pepamraz-cz-nejlepsiwebovky-cz-homepage.webp",
        "./tech/tech-images/woocommerce/pepamraz-cz-greenly-cz-homepage.webp",
        "./tech/tech-images/elementor/takemotion-cz.webp",
      ],
    },
    Git: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-git.svg",
      title: "Git",
      body: <Git />,
      images: [
        "./tech/tech-images/git/github-desktop-screenshot.jpg",
        "./tech/tech-images/git/pepamraz-cz-tech-image-github-repository.jpg",
        "./tech/tech-images/git/pepamraz-cz-tech-image-gitlab.jpg",
      ],
    },
    WooCommerce: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-woocommerce.svg",
      title: "WooCommerce",
      body: <WooCommerce />,
      images: [
        "./tech/tech-images/woocommerce/pepamraz-cz-greenly-cz-homepage.webp",
        "./tech/tech-images/woocommerce/pepamraz-cz-tech-image-woocommerce.jpg",
      ],
    },
    Linux: {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-linux.svg",
      title: "Linux",
      body: <Linux />,
      images: [
        "./tech/tech-images/linux/obesenec-nahled.png",
        "./tech/tech-images/linux/pepamraz-cz-kubuntu.webp",
        "./tech/tech-images/linux/pepamraz-cz-tech-image-debian-neofetch.jpg",
        "./tech/tech-images/linux/pepamraz-cz-tech-image-terminal-ubuntu.jpg",
      ],
    },
    "C#": {
      icon: "./tech/tech-icons/pepamraz-cz-technology-icon-c-sharp.svg",
      title: "C#",
      body: <CSharp />,
      images: [
        "./tech/tech-images/csharp/pepamraz-cz-csharp-code-lottery.webp",
        "./tech/tech-images/csharp/pepamraz-cz-tech-image-visual-studio.jpg",
      ],
    },
  },
];

const Slider: React.FC = () => {
  const [selectedTech, setSelectedTech] = useState<Technology | null>(null);

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
    } else if (currentIndex === allTechnologies.length - 1) {
      setSelectedTech(technologies[0][allTechnologies[0]]);
    }
  };

  const handlePrevious = () => {
    const currentIndex = findTechIndex(selectedTech);
    if (currentIndex > 0) {
      setSelectedTech(technologies[0][allTechnologies[currentIndex - 1]]);
    } else if (currentIndex === 0) {
      setSelectedTech(technologies[0][allTechnologies[allTechnologies.length - 1]]);
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
