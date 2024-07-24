import TechTemplate from "../components/TechTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSkull } from "@fortawesome/free-solid-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";

export const Linux = () => {
  return (
    <>
      <TechTemplate
        header="Linux Expert - Specialista na různé distribuce a serverové management"
        description="Od roku 2020, kdy jsem se seznámil s Linuxem na střední škole, jsem prošel cestou od GNOME Linux Mint přes Kubuntu na starém MacBooku až po experimentování s různými distribucemi v VirtualBoxu. V současnosti používám Linuxové servery pro hosting VPS serverů, na kterých běží webové stránky a e-shopy."
        counters={[
          {
            number: new Date().getFullYear() - 2020,
            isYear: true,
            title: "Zkušenosti s Linuxem",
            animationTime: 1000,
          },
          {
            number: 5,
            afterNumber: "+",
            title: "Vyzkoušené distribuce",
            animationTime: 1500,
          },
        ]}
        repositories={[
          {
            title: "Oběšenec napsaný v Shellu",
            url: "https://github.com/pepamraz/hangman-shell",
            icon: <FontAwesomeIcon icon={faSkull} size="2xl" />,
          },
          {
            title: "18 různých Bash skriptů",
            url: "https://github.com/pepamraz/linux-bash-skripty",
            icon: <FontAwesomeIcon icon={faLinux} size="2xl" />,
          },
        ]}
        accordions={[
          {
            title: "První zkušenosti s Linux Mint a GNOME",
            content:
              "Můj první kontakt s Linuxem byl ve školním prostředí s Linux Mint a desktopovým prostředím GNOME. Zde jsem se naučil základní příkazy a principy Linuxu, které tvoří základ mé dnešní práce.",
          },
          {
            title: "Přechod na Kubuntu",
            content:
              "Po školních zkušenostech jsem přeinstaloval starý MacBook na Kubuntu, což mi umožnilo zlepšit jeho výkon a začít se více věnovat Linuxovému ekosystému.",
          },
          {
            title: "Experimenty s různými distribucemi",
            content:
              "V rámci mého rozvoje jsem experimentoval s Arch Linux, Ubuntu, Kali Linux, Fedora, PopOS a dokonce i s legendárním (i když není Linuxová distribuce, ale rozhodně to je zajímavý operační systém) TempleOS ve VirtualBoxu.",
          },
          {
            title: "Správa Linuxových serverů",
            content:
              "V současnosti spravuji několik Linuxových serverů pro VPS, na kterých hostuji webové stránky a e-shopy. Mými úkoly jsou instalace programovacích jazyků, databází, Redis a další nezbytné software.",
          },
        ]}
      />
    </>
  );
};

export default Linux;
