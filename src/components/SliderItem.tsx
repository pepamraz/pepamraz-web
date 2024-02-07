import React from "react";

type SliderItemProps = {
  image?: string;
  text?: string;
};

const SliderItem: React.FC<SliderItemProps> = ({ image, text }) => {
  return (
    <div className="slider-item flex flex-col items-center justify-center">
      {image && <img className="w-16" src={image} alt={text ?? "Slider image"} />}
      {text && <span>{text}</span>}
    </div>
  );
};

export default SliderItem;
