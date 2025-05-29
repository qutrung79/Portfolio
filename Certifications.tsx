import React from 'react';
import certificationData from '../data/certificationData';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lightest">Certifications</h2>
        <div className="h-px bg-slate-light/30 flex-grow"></div>
      </div>
      
      <div className="space-y-6">
        {certificationData.map((certification, index) => (
          <div key={index} className="group bg-navy-light rounded-lg p-6 hover:bg-navy-light/70 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
              <div className="md:w-1/4">
                <span className="font-mono text-green">{certification.date}</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-lg font-semibold text-slate-lightest group-hover:text-green transition-colors">
                  {certification.title}
                </h3>
                {certification.organization && (
                  <p className="text-slate-light">{certification.organization}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
