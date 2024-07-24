import TechTemplate from "../components/TechTemplate";

export const WooCommerce = () => {
  return (
    <TechTemplate
      header="WooCommerce Developer - Efektivní design a rychlý vývoj webů"
      description={
        <>
          Začátkem roku 2023 jsem se naučil pracovat s WooCommerce, když jsme
          spustili online obchod{" "}
          <a href="https://greenly.cz" target="_blank">
            Greenly.cz
          </a>{" "}
          s přírodními produkty. Tato zkušenost mi poskytla hluboký vhled do
          vytváření a správy e-commerce platforem na WordPress, včetně
          důležitosti SEO a výběru správného hostingu pro optimální výkon.
        </>
      }
      counters={[
        {
          number: new Date().getFullYear() - 2023,
          isYear: true,
          afterNumber: " rok",
          title: "zkušeností s WooCommerce",
          animationTime: 1000,
        },
      ]}
      accordions={[
        {
          title: "Začátek práce s WooCommerce",
          content:
            "Moje první zkušenosti s WooCommerce přišly s výzvami, jako je zvládnutí nastavení produktů a integrace platebních bran, což byly klíčové aspekty pro úspěch Greenly.cz. Tento projekt mi také umožnil prohloubit své znalosti o SEO a významu výběru kvalitního hostingu, což je zásadní pro rychlý a spolehlivý e-shop.",
        },
        {
          title: "Optimalizace WooCommerce a SEO",
          content:
            "S WooCommerce jsem se naučil nejen spravovat e-commerce funkce, ale také optimalizovat obchody pro vyhledávače. SEO se stalo klíčovým prvkem mé práce, zajišťující, že naše produkty dosahují maximální viditelnosti a přitahují cílený provoz.",
        },
        {
          title: "Význam kvalitního hostingu pro WooCommerce",
          content:
            "Správný výběr hostingu je kritický pro úspěch jakéhokoli WooCommerce projektu, jelikož platforma vyžaduje výkonné servery pro rychlou odezvu a spolehlivost. Moje zkušenost s vybíráním hostingu pro Greenly.cz potvrdila, jak velký dopad má hosting na celkový výkon webu a uživatelskou zkušenost.",
        },
      ]}
    />
  );
};

export default WooCommerce;
