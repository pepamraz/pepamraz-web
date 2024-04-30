import React, { useState } from "react";

export const AccordionGroup = ({ children }) => {
  const [openAccordionId, setOpenAccordionId] = useState(0);

  const handleToggle = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  const renderChildrenWithIds = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isOpen: index === openAccordionId,
      onClick: () => handleToggle(index),
    })
  );

  return <div className="flex flex-col gap-3">{renderChildrenWithIds}</div>;
};

export default AccordionGroup;
