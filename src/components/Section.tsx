import React from "react";

interface SectionProps {
  id?: string;
  title?: string;
  content?: string;
  button?: string;
  icon?: string;
  link?: string;
  image1?: string;
  image2?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  content,
  button,
  icon,
  link,
  image1,
  image2,
}) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 py-16 px-4 md:px-4 gap-y-12"
      id={id}
    >
      <div className="left flex justify-center flex-col items-start gap-6">
        <h2 className="font-bold font-mono text-2xl">{title}</h2>
        <p>{content}</p>
        {button && (
          <a
            className="m-auto md:m-0"
            href={link ?? ""}
            target={
              link?.startsWith("http") &&
              !link.startsWith(window.location.origin)
                ? "_blank"
                : undefined
            }
          >
            <button>
              {button}
              <i className={"pl-2 " + icon}></i>
            </button>
          </a>
        )}
      </div>
      <div className="right relative w-full flex justify-center">
        {image1 && (
          <img
            src={image1}
            alt={title ?? "Obrázek sekce"}
            className={`md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 max-w-72 max-h-full object-contain object-center ${
              image2 ? "w-1/2" : "w-full"
            }`}
          />
        )}
        {image2 && (
          <img
            src={image2}
            alt={title ?? "Obrázek sekce 2"}
            className={`md:absolute md:max-w-32 md:max-h-full md:right-0 md:bottom-0 object-contain object-center ${
              image1 ? "w-1/2" : "w-full"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Section;
