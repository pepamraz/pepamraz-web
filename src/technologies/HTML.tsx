import React from "react";
import TechTemplate from "../components/TechTemplate";

export const HTML = () => {
  return (
    <>
      <TechTemplate
        header="HTML Specialist - Základy moderního webdesignu"
        description="Mé první kroky s weby jsem podnikl již jako malý harant, ale skutečné pochopení a kontrolu nad webdesignem jsem získal na střední škole díky HTML a CSS. HTML, ač zdánlivě jednoduché, je základem mé každodenní práce s moderními technologiemi jako React a Svelte."
        counters={[
          {
            number: new Date().getFullYear() - 2011,
            isYear: true,
            title: 'zkušeností s "weby"',
            animationTime: 3000,
          },
          {
            number: new Date().getFullYear() - 2020,
            isYear: true,
            title: 'zkušeností čistě s HTML',
            animationTime: 1500,
          },
        ]}
        accordions={[
          {
            title: "Začátky s HTML a CSS",
            content:
              "Na střední škole jsem se začal učit HTML a CSS, což mi umožnilo poprvé plně kontrolovat vzhled webových stránek. To byl klíčový moment, kdy jsem pochopil možnosti a význam dobrého designu.",
          },
          {
            title: "Využití HTML v moderních technologiích",
            content:
              "Ačkoliv nyní pracuji převážně s Reactem a Svelte, HTML je stále nezbytnou součástí mého vývojářského procesu. JSX a Svelte komponenty jsou vytvářeny s využitím HTML syntaxe, což mi umožňuje efektivně převádět designy do funkčních webových aplikací.",
          },
          {
            title: "HTML v každodenním použití",
            content:
              "I když dnes již nepíšu čisté .html soubory tak často, moje práce s JSX a Svelte neustále vyžaduje porozumění HTML. Každodenní používání této technologie je důkazem její nezbytnosti a univerzálnosti.",
          },
        ]}
      />
    </>
  );
};

export default HTML;
