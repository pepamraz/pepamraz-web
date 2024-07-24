import React, { useState, useEffect } from "react";
import linksData from "../data/SectionData.json";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-primary text-white px-4 fixed top-0 shadow-2xl z-10 transition-all duration-300 ${
        isScrolled
          ? "w-full max-w-full rounded-none"
          : "w-full max-w-5xl lg:rounded-b-2xl"
      }`}
     style={{left: '50%', transform: 'translateX(-50%)'}}
    >
      <div className="container mx-auto py-4 max-w-[992px]">
        <div className="flex justify-between items-center">
          <a
            href="#hero"
            className="text-2xl font-bold text-white no-underline"
          >
            Pepa Mráz
          </a>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* Burger Icon */}
            <span>☰</span>
          </button>
          {/* Dropdown Menu */}
          <div
            className={`absolute top-16 right-0 mt-2 w-full md:w-auto md:static md:block ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <nav className="bg-primary md:bg-none">
              <ul className="flex flex-col md:flex-row gap-x-8">
                {linksData.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-white hover:text-secondary block px-3 py-2 rounded-md text-base font-medium no-underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
