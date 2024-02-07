import React, { useState } from "react";
import linksData from "../data/SectionData.json";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white px-4 lg:rounded-b-2xl fixed w-full max-w-5xl top-0 shadow-2xl z-10">
      <div className="container mx-auto py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-bold">Pepa Mráz</a>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {/* Burger Icon */}
            <span>☰</span>
          </button>
          {/* Dropdown Menu */}
          <div className={`absolute top-16 right-0 mt-2 w-full md:w-auto md:static md:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <nav className="bg-primary md:bg-none">
              <ul className="flex flex-col md:flex-row gap-x-8">
                {linksData.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-white hover:text-secondary block px-3 py-2 rounded-md text-base font-medium">
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
