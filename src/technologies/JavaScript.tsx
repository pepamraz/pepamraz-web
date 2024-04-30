import React from "react";
import TechTemplate from "../components/TechTemplate";

export const JavaScript = () => {
  return (
    <>
      <TechTemplate
        header="JavaScript Developer - Specializace na webové hry a moderní frameworky"
        description="Javascript jsem se dokázal dobře naučit na vývoji interaktivních webových her, včetně RPG a multiplayer her. Můj počáteční přístup zahrnoval klasický JavaScript, ale postupem času jsem přešel na modernější frameworky jako React a Svelte, který mám zvlášť rád pro jeho jednoduchost a efektivitu."
        counters={[
          {
            number: new Date().getFullYear() - 2021,
            isYear: true,
            title: "Zkušenosti s JavaScriptem",
            animationTime: 1000,
          },
          {
            number: 2,
            afterNumber: " hry",
            title: "Vytvořené webové RPG hry",
            animationTime: 1500,
          },
        ]}
        accordions={[
          {
            title: "Začátky s JavaScriptem",
            content:
              "Moje první kroky v JavaScriptu byly zaměřeny na základní techniky a principy programování. Postupem času jsem začal experimentovat s pokročilejšími koncepty a zapojil se do tvorby složitějších projektů jako webové hry.",
          },
          {
            title: "Přechod na React a Svelte",
            content:
              "Ačkoliv jsem začínal s klasickým JavaScriptem, moje preference se časem posunuly k využívání moderních frameworků. React mi umožňuje vytvářet robustní uživatelské rozhraní, zatímco Svelte zaujme svou jednoduchostí a nízkou režií, což je ideální pro rychlé a efektivní vývoj aplikací.",
          },
          {
            title: "Vývoj RPG a multiplayer her",
            content:
              "Jedním z mých hlavních úspěchů je vývoj dvou webových RPG her, včetně jedné multiplayer hry. Tyto projekty mi poskytly cenné zkušenosti s plánováním, vývojem a optimalizací pro multiplayerové prostředí.",
          },
        ]}
      />
    </>
  );
};

export default JavaScript;
