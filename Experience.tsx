import React from 'react';
import experienceData from '../data/experienceData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lightest">Experience</h2>
        <div className="h-px bg-slate-light/30 flex-grow"></div>
      </div>
      
      <div className="space-y-12">
        {experienceData.map((experience, index) => (
          <div key={index} className="group">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-1/4 text-slate-light">
                <p className="font-mono">{experience.duration}</p>
              </div>
              
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold text-slate-lightest group-hover:text-green transition-colors">
                  {experience.title} · {experience.company}
                </h3>
                
                <ul className="mt-4 space-y-3">
                  {experience.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-slate relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-green">
                      {responsibility}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.technicalSkills.map((skill, idx) => (
                    <span key={idx} className="text-sm font-mono text-slate-light bg-navy-light px-3 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
