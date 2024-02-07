import React from "react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/pepa_mraz",
      icon: "fab fa-instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCMlo7Ew_x0FjDqlvctXkGTg",
      icon: "fab fa-youtube",
    },
  ];

  const searchLinks = [
    {
      name: "Tvé jméno",
      url: "#hero",
    },
    {
      name: "Technologie, které používáš",
      url: "#technologie",
    },
    {
      name: "Webového vývojáře",
      url: "#weby",
    },
    {
      name: "Někoho, kdo stříhá videa",
      url: "#video",
    },
    {
      name: "Kde tě můžu kontaktovat",
      url: "#kontakt",
    },
  ];

  const nextStepsLinks = [
    {
      name: "Napiš",
      url: "mailto:boss@pepamraz.cz",
    },
    {
      name: "Koukni na moje fotky",
      url: "https://instagram.com/pepa_mraz",
    },
    {
      name: "Zhlédni má videa",
      url: "https://www.youtube.com/channel/UCMlo7Ew_x0FjDqlvctXkGTg",
    },
  ];

  return (
    <div className="bg-primary border-secondary border-t-8 p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-5xl m-auto gap-y-6">
        {/* Social Links Section */}
        <div className="one flex flex-col gap-y-4">
          <h2 className="text-4xl text-secondary font-bold">Pepa Mráz</h2>
          <div className="icons flex gap-x-2 text-secondary text-2xl">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Search Links Section */}
        <div className="two">
          <h2 className="text-2xl text-secondary font-bold">Hledám...</h2>
          <ul className="footer-links text-white">
            {searchLinks.map((link, index) => (
              <li key={index} className="hover:text-secondary">
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Steps Links Section */}
        <div className="three">
          <h2 className="text-2xl text-secondary font-bold">Co dál?</h2>
          <ul className="footer-links text-white">
            {nextStepsLinks.map((link, index) => (
              <li key={index} className="hover:text-secondary">
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
