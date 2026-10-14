import React from 'react';
import { Code2, Server, Database, Layout, Wrench, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const CATEGORY_ICONS = {
  'Programming Languages': Code2,
  'Backend Development': Server,
  Databases: Database,
  Frontend: Layout,
  'Tools & Platforms': Wrench,
  Integrations: Cpu,
};

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">03 / Technical Stack</span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Organized by engineering domain as documented across academic coursework and
            software projects.
          </p>
        </div>

        <div className="skills-grid">
          {portfolioData.skills.map((group) => {
            const IconComponent = CATEGORY_ICONS[group.category] || Code2;
            return (
              <div key={group.category} className="skill-category">
                <div className="skill-category-header">
                  <IconComponent
                    size={18}
                    color="var(--accent-blue)"
                    aria-hidden="true"
                  />
                  <h3 className="skill-category-title">{group.category}</h3>
                </div>

                <ul className="skill-items">
                  {group.items.map((skill) => (
                    <li key={skill} className="skill-item">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}