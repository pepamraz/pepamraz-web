import React from "react";

type SliderItemProps = {
  image?: string;
  text?: string;
  showTitle?: boolean;
};

const SliderItem: React.FC<SliderItemProps> = ({
  image,
  text,
  showTitle = false,
}) => {
  return (
    <div className="slider-item flex flex-col items-center justify-center">
      {image && (
        <img className="w-16" src={image} alt={text ?? "Slider image"} />
      )}
      {showTitle && <>{text && <span>{text}</span>}</>}
    </div>
  );
};

export default SliderItem;
