import React, { useEffect } from "react";

const Modal = ({ tech, onClose, onNext, onPrevious }) => {
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
      {/* <div className="absolute bottom-6 modal-navigation flex gap-3 z-50 pointer-events-auto">
        <button className="hover:scale-110" onClick={onPrevious}>{"<"}</button>
        <button className="hover:scale-110" onClick={onNext}>{">"}</button>
      </div> */}
      <div
        className="modal bg-white p-6 rounded-lg shadow-lg lg:min-w-[960px] min-h-96 max-h-[700px] flex flex-col lg:flex-row z-40 overflow-auto gap-3 max-w-[1160px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:w-[50%] lg:sticky top-0">
          <div>
            <div className="title flex">
              <h2 className="font-bold font-mono text-2xl">{tech.title}</h2>
              <img src={tech.icon} className="max-h-8" />
            </div>
            {tech.body}
          </div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col gap-2">
          {tech.images.map((image, index) => (
            <img key={index} src={image} alt={`${tech.title} illustration`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
