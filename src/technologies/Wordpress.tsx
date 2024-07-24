import TechTemplate from "../components/TechTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faHandshake } from "@fortawesome/free-solid-svg-icons";

export const Wordpress = () => {
  return (
    <>
      <TechTemplate
        header="WordPress Expert - Tvůrce webů pro podnikatele a firmy"
        description="Jako zkušený WordPress developer mám rozsáhlé znalosti tvorbou webů pro firmy a pluginů, které zlepšují uživatelskou zkušenost a efektivitu webových stránek. Mým cílem je poskytnout řešení, která jsou nejen vizuálně přitažlivá, ale také optimalizovaná pro vyhledávače a výkon."
        counters={[
          {
            number: 20,
            afterNumber: "+",
            title: "Hotových projektů",
            animationTime: 1500,
          },
          {
            number: new Date().getFullYear() - 2022,
            isYear: true,
            title: "Zkušeností s WordPressem",
            animationTime: 500,
          },
        ]}
        repositories={[
          {
            title: "NejlepšíWebovky.cz",
            url: "https://nejlepsiwebovky.cz",
            icon: <FontAwesomeIcon icon={faWordpress} size="2xl" />,
          },
          {
            title: "Weby pro klienty",
            url: "https://nejlepsiwebovky.cz/reference/",
            icon: <FontAwesomeIcon icon={faHandshake} size="2xl" />,
          },
          {
            title: "Greenly.cz",
            url: "https://greenly.cz",
            icon: <FontAwesomeIcon icon={faCartShopping} size="2xl" />,
          },
        ]}
        accordions={[
          {
            title: "Co je to WordPress?",
            content:
              "WordPress je nejpoužívanější open-source systém pro správu obsahu (CMS), který umožňuje uživatelům snadno publikovat, spravovat a organizovat širokou škálu obsahu na webových stránkách.",
          },
          {
            title: "Moje zkušenosti s WordPress",
            content:
              "Jako tvůrce webových stránek pro firmy a podnikatele pracuji už přes 2 roky, během kterých jsem pracoval na více než 20 projektech, od jednoduchých jednostránkových webů až po e-shopy nebo rozsáhlé webové aplikace.",
          },
          {
            title: "Optimalizace a bezpečnost",
            content:
              "Zajišťuji, že všechny weby na platformě WordPress jsou nejen vizuálně atraktivní, ale také dobře optimalizované pro rychlé načítání a zabezpečené proti internetovým hrozbám.",
          },
        ]}
      />
    </>
  );
};

export default Wordpress;
