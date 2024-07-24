import TechTemplate from "../components/TechTemplate";

export const CSS = () => {
  return (
    <TechTemplate
      header="CSS Developer - Stylování pro krásnější web"
      description="S CSS jsem se seznámil krátce po učení HTML v roce 2020. První zkušenosti byly frustrující z důvodů s pozicováním elementů, avšak po objevení flexboxů a CSS gridů, jsem si začal psaní CSS užívat a pozicování všeho na webu se stalo pro mě jednoduchým procesem. Dnes, s dobrou znalostí CSS a SCSS, efektivně využívám jak čisté CSS, tak frameworky jako Tailwind CSS a Bootstrap pro vytváření esteticky přitažlivých webových stránek."
      counters={[
        {
          number: new Date().getFullYear() - 2020,
          isYear: true,
          title: "zkušenosti s CSS",
          animationTime: 1000,
        },
        {
          number: 2,
          afterNumber: "",
          title: "oblíbené CSS frameworky",
          animationTime: 1500,
        },
      ]}
      accordions={[
        {
          title: "První kroky s CSS",
          content:
            "Po základním seznámení s HTML jsem začal s CSS, což zpočátku bylo frustrující, zejména kvůli pozicování elementů. Jakmile jsem ale objevil flexbox a CSS grid, začal jsem si psaní CSS užívat a pochopil jeho potenciál ve webdesignu.",
        },
        {
          title: "Využití SCSS pro efektivnější styling",
          content:
            "SCSS mi umožnilo jít dále v optimalizaci mého workflow. S jeho pomocí jsem se naučil lépe organizovat a udržovat CSS kód, využívající jeho pokročilé funkce jako proměnné, mixiny apod. což značně zlepšilo moji produktivitu a kvalitu kódu.",
        },
        {
          title: "Přechod na CSS frameworky",
          content:
            "Po zvládnutí základů jsem se pustil do učení s CSS frameworky jako Tailwind CSS a Bootstrap, které mi umožňují rychleji a efektivněji vytvářet responsivní a vizuálně přitažlivé designy. Důležité pro mě bylo porozumět, jak tyto nástroje fungují, abych je mohl plně využít.",
        },
        {
          title: "Využití CSS v praxi",
          content:
            "Dnes používám čisté CSS hlavně při vývoji WordPress webů, kde často potřebuji přizpůsobit nebo vylepšit stávající šablony. Vlastní projekty často vyžadují rychlý vývoj, kde se spoléhám na CSS frameworky, které značně zjednodušují a zrychlují práci.",
        },
      ]}
    />
  );
};

export default CSS;
