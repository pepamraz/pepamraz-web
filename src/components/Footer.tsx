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
      name: "🍃 Kup si něco na Greenly.cz",
      url: "https://greenly.cz",
    },
    {
      name: "📸 Koukni na moje fotky",
      url: "https://instagram.com/pepa_mraz",
    },
    {
      name: "🎥 Zhlédni má videa",
      url: "https://www.youtube.com/channel/UCMlo7Ew_x0FjDqlvctXkGTg",
    },
    {
      name: "✉️ Napiš mi e-mail",
      url: "mailto:ahoj@pepamraz.cz",
    },
  ];

  const allProjectsLinks = [
    {
      emoji: "🌿",
      name: "Greenly.cz",
      description: "E-shop",
      url: "https://greenly.cz",
    },
    {
      emoji: "🖼️",
      name: "img.pepamraz.cz",
      description: "Komprese obrázků pro web",
      url: "https://img.pepamraz.cz",
    }
  ];

  return (
    <div className="bg-primary border-secondary border-t-8 p-12">
      <div className="grid grid-cols-1 md:grid-cols-4 max-w-5xl m-auto gap-y-6">
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
                className="text-white hover:text-secondary"
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
              <li key={index}>
                <a href={link.url} className="no-underline text-white hover:text-secondary">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Next Steps Links Section */}
        <div className="three">
          <h2 className="text-2xl text-secondary font-bold">Co dál?</h2>
          <ul className="footer-links text-white">
            {nextStepsLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="no-underline text-white hover:text-secondary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* All of my projects */}
        <div className="four">
          <h2 className="text-2xl text-secondary font-bold">Všechny projekty</h2>
          <ul className="footer-links text-white">
            {allProjectsLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  target={link.url.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="no-underline text-white hover:text-secondary flex"
                >
                  <div className="emoji">
                    {link.emoji}
                  </div>
                  <div className="project">
                    {link.name}
                    <small>
                      &nbsp;-&nbsp;{link.description}
                    </small>
                  </div>
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
