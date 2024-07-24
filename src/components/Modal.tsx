import { useEffect, useState, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Captions } from "yet-another-react-lightbox/plugins";

interface ThumbnailsRef {
  visible: boolean;
  hide: () => void;
  show: () => void;
}

const Modal = ({ tech, onClose, onNext, onPrevious }) => {
  const [open, setOpen] = useState(false);
  const thumbnailsRef = useRef<ThumbnailsRef>(null);
  const captionsRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      document.body.style.overflow = "visible";
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

function formatTitle(imagePath) {
  const filename = imagePath.split('/').pop();
  const nameWithoutExtension = filename.split('.').slice(0, -1).join('.');
  let cleanedName = nameWithoutExtension.replace('pepamraz-cz-', '').replace('tech-image-', '');
  
  const czDomainPattern = /(\w+)-cz/;
  const czMatch = cleanedName.match(czDomainPattern);
  
  if (czMatch) {
    cleanedName = cleanedName.replace(czDomainPattern, `${czMatch[1]}.cz`);
  }

  const formattedTitle = cleanedName
    .split('-')
    .map(word => word.includes('.cz') ? word : word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return formattedTitle;
}

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-20"
      onClick={handleBackdropClick}
    >
      <button
        onClick={onClose}
        className="absolute top-20 lg:top-2 right-2 text-white z-50"
      >
        X
      </button>
      <div className="absolute bottom-6 modal-navigation flex gap-3 z-50 pointer-events-auto text-4xl">
        <button className="hover:scale-110 hover:bg-indigo-700 transition-all" onClick={onPrevious}>{"<"}</button>
        <button className="hover:scale-110 hover:bg-indigo-700 transition-all" onClick={onNext}>{">"}</button>
      </div>
      <div
        className={"modal bg-white p-6 rounded-lg shadow-lg min-h-[700px] max-h-[700px] flex flex-col lg:flex-row z-40 overflow-auto gap-3 " + (tech.images.length > 0 ? "lg:min-w-[960px] max-w-[1160px]" : "max-w-[760px]")}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={"w-full lg:sticky top-0 " + (tech.images.length > 0 ? "lg:w-[50%]" : "")}>
          <div className="flex flex-col gap-3 overflow-auto max-h-full">
            <div className="title flex gap-3">
              <h2 className="font-bold font-mono text-2xl">{tech.title}</h2>
              <img src={tech.icon} className="max-h-8" />
            </div>
            {tech.body}
          </div>
        </div>
        {tech.images.length > 0 &&
          <div className="w-full lg:w-[50%] flex flex-col gap-2 min-h-full">
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              slides={
                tech.images.map((image) => (
                  {
                    src: image, title: formatTitle(image),
                  }
                ))
              }
              plugins={[Thumbnails, Captions]}
              thumbnails={{ ref: thumbnailsRef }}
              on={{
                click: () => {
                  (thumbnailsRef.current?.visible
                    ? thumbnailsRef.current?.hide
                    : thumbnailsRef.current?.show)?.();
                },
              }}
              captions={{ ref: captionsRef }}
            />

            {tech.images.map((image, index) => (
              <LazyLoadImage
                key={index}
                src={image}
                alt={`${tech.title} illustration`}
                effect="blur"
                onClick={() => setOpen(true)}
                className="cursor-pointer"
              />
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default Modal;
