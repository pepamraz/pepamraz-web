import TechTemplate from "../components/TechTemplate";

export const CSharp = () => {
  return (
    <>
      <TechTemplate
        header="C# Developer - Od konzolových aplikací po WPF"
        description="Od roku 2021 jsem se začal učit C# na střední škole, kde jsem nejprve vytvářel konzolové aplikace a později jsem přešel k WPF aplikacím. Během studia jsem se naučil základní algoritmy a vytvořil několik projektů, včetně loterie a maturitní práce zaměřené na evidenci hradů a zámků v ČR."
        counters={[
          {
            number: new Date().getFullYear() - 2021,
            isYear: true,
            title: "Zkušenosti s C#",
            animationTime: 1000,
          },
          {
            number: 10,
            afterNumber: "+",
            title: "Dokončené projekty",
            animationTime: 1500,
          },
        ]}
        accordions={[
          {
            title: "Konzolové aplikace",
            content:
              "Začal jsem s vývojem jednoduchých konzolových aplikací, které mi pomohly pochopit základní syntaxi a programovací principy v C#. Tyto projekty zahrnovaly různé úlohy, od jednoduchých kalkulaček po složitější logické hry.",
          },
          {
            title: "WPF aplikace",
            content:
              "Poté, co jsem získal pevné základy v konzolových aplikacích, jsem se začal věnovat vývoji aplikací pomocí Windows Presentation Foundation (WPF), což mi umožnilo vytvářet vizuálně atraktivnější a interaktivní aplikace.",
          },
          {
            title: "Maturitní práce - Evidování hradů a zámků",
            content:
              "Pro maturitní práci jsem vyvinul aplikaci pro evidenci hradů a zámků v ČR. Aplikace umožňovala uživatelům prohlížet a spravovat data o různých historických lokalitách. Bohužel, byl mi odepřen přístup k mému vlastnímu kódu po dokončení projektu, což bylo velké zklamání.",
          },
        ]}
      />
    </>
  );
};

export default CSharp;
