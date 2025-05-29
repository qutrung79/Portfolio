import React from 'react';
import projectsData from '../data/projectsData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-lightest">Projects</h2>
        <div className="h-px bg-slate-light/30 flex-grow"></div>
      </div>
      
      <div className="space-y-12">
        {projectsData.map((project, index) => (
          <div key={index} className="group bg-navy-light rounded-lg p-6 hover:translate-y-[-5px] transition-all duration-300">
            <h3 className="text-xl font-semibold text-slate-lightest group-hover:text-green transition-colors mb-3">
              {project.title}
            </h3>
            
            <p className="text-slate mb-4">{project.description}</p>
            
            {project.highlights && (
              <ul className="mt-4 mb-6 space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-slate relative pl-6 before:content-['▹'] before:absolute before:left-0 before:text-green">
                    {highlight}
                  </li>
                ))}
              </ul>
            )}
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="text-sm font-mono text-green bg-navy px-3 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
