import TechTemplate from "../components/TechTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping, faHandshake } from "@fortawesome/free-solid-svg-icons";

export const Elementor = () => {
  return (
    <TechTemplate
      header="Elementor Developer - Efektivní design a rychlý vývoj webů"
      description="Jako zkušený webový vývojář a designér jsem využil Elementor pro vytvoření desítek webových stránek pro klienty od roku 2022. Tato zkušenost mi umožnila efektivně přetvořit wireframy, designy a webové koncepty do plně funkčních webových stránek s vysokou úrovní profesionality a moderního designu."
      counters={[
        {
          number: new Date().getFullYear() - 2022,
          isYear: true,
          title: "zkušeností s Elementorem",
          animationTime: 1000,
        },
        {
          number: 10,
          afterNumber: "+ webů",
          title: "vytvořených pro klienty",
          animationTime: 1500,
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
          title: "Začátky s Elementorem",
          content:
            "Začal jsem používat Elementor koncem roku 2022, což mi otevřelo nové možnosti v oblasti webového designu a vývoje. Rychle jsem si osvojil intuitivní drag-and-drop rozhraní, které zjednodušilo proces designu a umožnilo mi rychle realizovat projekty pro klienty.",
        },
        {
          title: "Projekty s Elementorem",
          content:
            "V průběhu let jsem s pomocí Elementoru vytvořil desítky webových stránek, které se liší rozmanitostí a komplexností. Tyto projekty zahrnovaly vše od jednoduchých prezentací až po složité e-commerce platformy, což dokazuje flexibilitu a sílu tohoto nástroje.",
        },
        {
          title: "Přínos Elementoru do mé práce",
          content:
            "Elementor nejenže zefektivnil můj pracovní proces, ale také zvýšil moji schopnost rychle reagovat na požadavky klientů a nabízet řešení na míru. Jeho rozsáhlé možnosti přizpůsobení a integrovatelnost s dalšími pluginy a technologiemi jsou klíčové pro můj úspěch jako webového vývojáře.",
        },
      ]}
    />
  );
};

export default Elementor;
