import React from "react";
import { Accordion } from "../components/Accordion";
import { AccordionGroup } from "../components/AccordionGroup";
import Counter from "../components/Counter";

interface CounterData {
  number: number;
  afterNumber?: string;
  title: string;
  animationTime: number;
  isYear?: boolean;
}

interface AccordionData {
  title: string;
  content: string;
}

interface TechTemplateProps {
  header: string;
  description: string;
  counters: CounterData[];
  accordions: AccordionData[];
}

export const TechTemplate: React.FC<TechTemplateProps> = ({ header, description, counters, accordions }) => {
  return (
    <>
      <h3 className="font-serif">{header}</h3>
      <p>{description}</p>
      <div className="flex justify-evenly sm:flex-row flex-col">
        {counters.map((counter, index) => (
          <Counter
            key={index}
            number={counter.number}
            afterNumber={counter.afterNumber}
            title={counter.title}
            animationTime={counter.animationTime}
            isYear={counter.isYear}
          />
        ))}
      </div>
      <AccordionGroup>
        {accordions.map((accordion, index) => (
          <Accordion
            key={index}
            title={accordion.title}
            content={accordion.content}
          />
        ))}
      </AccordionGroup>
    </>
  );
};

export default TechTemplate;
