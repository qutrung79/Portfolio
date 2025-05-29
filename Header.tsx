import React from 'react';
import siteConfig from '../data/siteConfig';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-navy/90 backdrop-blur-sm z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-green text-xl font-semibold hover:text-green-bright transition-colors">
          {siteConfig.name}
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="text-slate hover:text-green transition-colors">About</a></li>
            <li><a href="#experience" className="text-slate hover:text-green transition-colors">Experience</a></li>
            <li><a href="#projects" className="text-slate hover:text-green transition-colors">Projects</a></li>
            <li><a href="#skills" className="text-slate hover:text-green transition-colors">Skills</a></li>
            <li><a href="#certifications" className="text-slate hover:text-green transition-colors">Certifications</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
