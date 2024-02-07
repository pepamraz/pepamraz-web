import React from "react";
import SliderItem from "./SliderItem";

const Slider: React.FC = () => {
  const images = [
    "./tech-icons/pepamraz-cz-technology-icon-wordpress.svg",
    "./tech-icons/pepamraz-cz-technology-icon-php.svg",
    "./tech-icons/pepamraz-cz-technology-icon-react.svg",
    "./tech-icons/pepamraz-cz-technology-icon-css.svg",
    "./tech-icons/pepamraz-cz-technology-icon-html.svg",
    "./tech-icons/pepamraz-cz-technology-icon-javascript.svg",
    "./tech-icons/pepamraz-cz-technology-icon-premiere-pro.svg",
    "./tech-icons/pepamraz-cz-technology-icon-elementor.svg",
    "./tech-icons/pepamraz-cz-technology-icon-git.svg",
    "./tech-icons/pepamraz-cz-technology-icon-woocommerce.svg",
    "./tech-icons/pepamraz-cz-technology-icon-linux.svg",
    "./tech-icons/pepamraz-cz-technology-icon-bash.svg",
    "./tech-icons/pepamraz-cz-technology-icon-c-sharp.svg",
  ];

  return (
    <div className={`flex flex-wrap md:flex-nowrap justify-evenly gap-2 bg-primary border-t-8 border-b-8 border-secondary p-4`} id="technologie">
      {images.map((image, index) => (
        <SliderItem key={index} image={image} />
      ))}
    </div>
  );  
};

export default Slider;
