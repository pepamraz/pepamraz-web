import TechTemplate from "../components/TechTemplate";
import LaughingFaceIcon from "../icons/LaughingFaceIcon";

export const Git = () => {
  return (
    <TechTemplate
      header="Git Expert - Zálohování a spolupráce s jistotou"
      description="Během posledních dvou let jsem se naučil efektivně využívat Git nejen pro zálohování mých osobních projektů, ale také pro spolupráci v týmových projektech. Ocenil jsem, jak Git usnadňuje správu verzí a zjednodušuje týmovou spolupráci."
      counters={[
        {
          number: new Date().getFullYear() - 2022,
          isYear: true,
          title: "zkušeností s Gitem",
          animationTime: 1000,
        },
        {
          number: 100,
          afterNumber: "% spokojen",
          title: (
            <>
              když se vyhnu konfliktům
              <LaughingFaceIcon />
            </>
          ),
          animationTime: 1500,
        },
      ]}
      accordions={[
        {
          title: "Začátky s Git",
          content:
            "Začal jsem používat Git záčátkem roku 2022, kdy jsem potřeboval efektivní nástroj pro zálohování a správu kódů svých projektů. Postupně jsem si osvojil základní i pokročilé funkce, jako jsou větve, merge a rebase, které mi umožnily udržet moje projekty organizované s bezpečně uloženými zálohami.",
        },
        {
          title: "Git v týmových projektech",
          content:
            "Git se stal nezbytným nástrojem i v týmovém prostředí, kde umožňuje snadné sdílení změn a spolupráci. Schopnost správně používat Git mi pomohla udržet týmové projekty synchronizované",
        },
        {
          title: "Význam Git pro můj vývoj",
          content:
            "Git nejen zlepšil můj vývojový workflow, ale také mi poskytl jistotu, že moje data jsou bezpečně zálohovaná a že mohu efektivně spolupracovat s dalšími vývojáři. Tato zkušenost je neocenitelná jak pro osobní, tak pro profesionální projekty.",
        },
      ]}
    />
  );
};

export default Git;
