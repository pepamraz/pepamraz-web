import TechTemplate from "../components/TechTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faGithub } from "@fortawesome/free-brands-svg-icons";

export const ReactFramework = () => {
  return (
    <>
      <TechTemplate
        header="React Developer - Moderní přístupy a efektivní řešení"
        description="Po zpočátku skeptickém přístupu k Reactu jsem si tento framework oblíbil po dokončení několika projektů. Nyní ho považuji za klíčový nástroj pro vývoj dynamických webových aplikací, včetně tohoto webu, který je vytvořen s využitím Reactu a TypeScriptu."
        counters={[
          {
            number: new Date().getFullYear() - 2023,
            isYear: true,
            title: "Zkušenosti s Reactem",
            animationTime: 1000,
          },
          {
            number: 100,
            afterNumber: " %",
            title: "Tohoto webu v Reactu",
            animationTime: 1500,
          },
        ]}
        repositories={[
          {
            title: "PHP Enjoyeři",
            url: "https://pepamraz.github.io/php-enjoyeri-website/",
            icon: <FontAwesomeIcon icon={faPhp} size="2xl" />,
          },
          {
            title: "PHP Enjoyeři Repository",
            url: "https://github.com/pepamraz/php-enjoyeri-website",
            icon: <FontAwesomeIcon icon={faGithub} size="2xl" />,
          },
        ]}
        accordions={[
          {
            title: "Přechod na React",
            content:
              "Zprvu jsem byl váhavý přijmout React kvůli zvyku na tradiční JavaScript, ale s narůstajícím počtem projektů jsem pochopil jeho výhody, jako je komponentní architektura a bohatý ekosystém.",
          },
          {
            title: "Projekty v Reactu",
            content:
              "Od jednoduchých jednostránkových aplikací až po komplexní webové platformy, React mi umožnil vytvářet vysoce interaktivní a uživatelsky přívětivé rozhraní s využitím moderních technologií jako TypeScript a široké škály knihoven.",
          },
          {
            title: "Integrace s jinými technologiemi",
            content:
              "React perfektně spolupracuje s mnoha dalšími technologiemi, což mi umožňuje využívat nejlepší dostupné nástroje pro každý projekt, včetně propojení s backendem v PHP nebo s JavaScriptovými hrami, které jsem vyvinul.",
          },
        ]}
      />
    </>
  );
};

export default ReactFramework;
