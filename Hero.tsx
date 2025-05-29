import React from 'react';
import siteConfig from '../data/siteConfig';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <h1 className="text-green text-lg font-mono mb-5">Hi, my name is</h1>
      <h2 className="text-5xl md:text-7xl font-bold text-slate-lightest mb-4">QA Automation Engineer</h2>
      <h3 className="text-4xl md:text-6xl font-bold text-slate-light mb-8">I build robust test automation frameworks.</h3>
      <p className="text-slate max-w-xl text-lg mb-12">
        {siteConfig.description} Specializing in creating reliable, maintainable test automation solutions 
        that ensure software quality and streamline the delivery process.
      </p>
      <div>
        <a 
          href="#projects" 
          className="inline-block px-6 py-3 border-2 border-green text-green font-medium rounded hover:bg-green/10 transition-colors"
        >
          Check out my work
        </a>
      </div>
    </section>
  );
};

export default Hero;
