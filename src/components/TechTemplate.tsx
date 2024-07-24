import { Accordion } from "../components/Accordion";
import { AccordionGroup } from "../components/AccordionGroup";
import Counter from "../components/Counter";

interface CounterData {
  number: number;
  afterNumber?: string;
  title: string | JSX.Element;
  animationTime: number;
  isYear?: boolean;
}

interface AccordionData {
  title: string;
  content: string;
}

interface TechTemplateProps {
  header: string;
  description: string | JSX.Element;
  repositories?: { title: string; url: string; icon: string | JSX.Element }[];
  counters: CounterData[];
  accordions: AccordionData[];
}

export const TechTemplate: React.FC<TechTemplateProps> = ({ header, description, counters, repositories, accordions }) => {
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
      <div className="flex justify-evenly gap-4 flex-wrap">
        {repositories?.map((repository, index) => (        
          <a href={repository.url} target="_blank" className="flex gap-3 items-center" key={index}>
            {repository.icon && typeof repository.icon === "string" ? (
              <img src={repository.icon} alt={repository.title} width={32} />
            ) : (
              repository.icon
            )}
            {repository.title}
          </a>
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
