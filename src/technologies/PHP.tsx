import React from "react";
import TechTemplate from "../components/TechTemplate";

export const PHP = () => {
  return (
    <>
      <TechTemplate
        header="PHP Developer - Expert na backendové technologie a LAMP stack"
        description="Od roku 2020 jsem získal zkušenosti s PHP během studia na střední škole a postupně jsem rozšířil své dovednosti na vývoj komplexních backendových systémů, včetně použití LAMP stacku, frameworku Laravel a tvorby specifických pluginů a funkcí pro WordPress."
        counters={[
          {
            number: new Date().getFullYear() - 2020,
            isYear: true,
            title: "Zkušenosti s PHP",
            animationTime: 1000,
          },
          {
            number: 1,
            afterNumber: "",
            title: "Vytvořené multiplayerové hry",
            animationTime: 1500,
          },
        ]}
        accordions={[
          {
            title: "Začátky s PHP a LAMP",
            content:
              "Moje cesta s PHP začala v roce 2020, kdy jsem se na střední začal učit základní funkce PHP v rámci LAMP tech stacku. Rychle jsem pochopil základy a začal je aplikovat na reálné projekty.",
          },
          {
            title: "Vývoj s Laravel",
            content:
              "Laravel jsem začal používat pro tvorbu fullstack aplikací či pouze Backend API s využitím jiné části pro Frontend, což mi umožnilo efektivněji řešit komplexní backendové úlohy a zlepšit celkovou strukturu a udržitelnost projektů.",
          },
          {
            title: "Vytváření pluginů pro WordPress",
            content:
              "V oblasti WordPress jsem se specializoval na vývoj pluginů a psaní code snippetů, které rozšiřují standardní funkcionality WordPressu. Toto mi umožňuje přizpůsobit platformu mým specifickým potřebám a potřebám klientů, které klasický WordPress nenabízí.",
          },
        ]}
      />
    </>
  );
};

export default PHP;
