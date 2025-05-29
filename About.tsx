import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lightest">About Me</h2>
        <div className="h-px bg-slate-light/30 flex-grow"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <p className="text-slate mb-4">
            I'm a QA Automation Engineer passionate about ensuring software quality through robust test automation frameworks and methodologies. 
            My expertise lies at the intersection of quality assurance and development, creating testing solutions that are reliable, maintainable, and effective.
          </p>
          <p className="text-slate mb-4">
            With experience across various projects in financial technology, security applications, and web platforms, I've developed a comprehensive approach to quality assurance that combines technical expertise with a deep understanding of business requirements.
          </p>
          <p className="text-slate mb-4">
            I specialize in developing end-to-end test automation frameworks, API testing solutions, and CI/CD integration. My goal is to streamline the testing process while maintaining high standards of quality and reliability.
          </p>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-2.5 rounded-md bg-green/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative aspect-square bg-green/20 rounded-md overflow-hidden">
            {/* Placeholder for profile image */}
            <div className="absolute inset-0 bg-navy/80 flex items-center justify-center text-green">
              <span className="text-6xl">QA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
