import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Accordion = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="w-full">
      <button
        className={`w-full text-left py-2 px-4 focus:outline-none flex justify-between items-center ${
          isOpen ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
        aria-expanded={isOpen}
        onClick={onClick}
      >
        {title}
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-gray-100 p-4">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;
