import React from 'react';
import skillsData from '../data/skillsData';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lightest">Skills</h2>
        <div className="h-px bg-slate-light/30 flex-grow"></div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="bg-navy-light rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green mb-4">{skillCategory.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillCategory.items.map((skill, idx) => (
                <span key={idx} className="text-slate-lightest bg-navy px-3 py-1 rounded font-mono text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
