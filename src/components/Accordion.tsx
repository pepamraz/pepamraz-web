import React, { useState } from 'react';

export const Accordion: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="w-full">
            <button
                className="w-full bg-blue-600 text-left py-2 px-4 focus:outline-none"
                {...isOpen && { 'aria-expanded': 'true' }}
                onClick={toggleAccordion}
            >
                Accordion Title
            </button>
            <div
                className={`overflow-hidden transition-max-height duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
                <div className="bg-gray-100 p-4">
                    Accordion Content
                </div>
            </div>
        </div>
    );
};

export default Accordion;