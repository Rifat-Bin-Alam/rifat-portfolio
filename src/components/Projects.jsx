import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import {
  RecruitmentArchitectureVisual,
  FoodOrderingArchitectureVisual,
} from './ProjectVisuals';

export default function Projects() {
  const { featured, secondary, supporting, phpGroup } = portfolioData.projects;

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">02 / Selected Work</span>
          <h2 className="section-title">Software Engineering Projects</h2>
          <p className="section-subtitle">
            Backend and full-stack web applications built with ASP.NET Core MVC, C#,
            Entity Framework Core, Django, and relational SQL databases.
          </p>
        </div>

        <div className="projects-stack">
          {/* Primary Featured Project */}
          <article className="project-featured">
            <div>
              <span className="project-tag-label">{featured.label}</span>
              <h3 className="project-title">{featured.title}</h3>
              <p className="project-desc">{featured.description}</p>

              <ul className="project-capabilities">
                {featured.capabilities.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
              </ul>

              <ul className="tech-list" aria-label="Technologies used">
                {featured.technologies.map((tech) => (
                  <li key={tech} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={featured.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <Github size={16} aria-hidden="true" />
                <span>{featured.repoLabel}</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <RecruitmentArchitectureVisual />
          </article>

          {/* Secondary Substantial Project */}
          <article className="project-secondary">
            <div>
              <span className="project-tag-label">{secondary.label}</span>
              <h3 className="project-title">{secondary.title}</h3>
              <p className="project-desc">{secondary.description}</p>

              <ul className="project-capabilities">
                {secondary.capabilities.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
              </ul>

              <ul className="tech-list" aria-label="Technologies used">
                {secondary.technologies.map((tech) => (
                  <li key={tech} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={secondary.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={16} aria-hidden="true" />
                <span>{secondary.repoLabel}</span>
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            </div>

            <FoodOrderingArchitectureVisual />
          </article>

          {/* Supporting Projects Row */}
          <div className="projects-lower-grid">
            {/* Project 3: Smart Delivery */}
            <article className="project-panel">
              <div>
                <span className="project-tag-label">{supporting.label}</span>
                <h3 className="project-title">{supporting.title}</h3>
                <p className="project-desc">{supporting.description}</p>
              </div>

              <div>
                <ul className="tech-list" aria-label="Technologies used">
                  {supporting.technologies.map((tech) => (
                    <li key={tech} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>

                <a
                  href={supporting.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  <Github size={15} aria-hidden="true" />
                  <span>{supporting.repoLabel}</span>
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </div>
            </article>

            {/* Project 4: PHP Database Applications */}
            <article className="project-panel">
              <div>
                <span className="project-tag-label">{phpGroup.label}</span>
                <h3 className="project-title">{phpGroup.title}</h3>
                <p className="project-desc">{phpGroup.description}</p>

                <div className="php-subprojects">
                  {phpGroup.applications.map((app) => (
                    <div key={app.name} className="php-subproject-row">
                      <span className="php-subproject-name">{app.name}</span>
                      <a
                        href={app.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="php-subproject-link"
                        aria-label={`${app.name} on GitHub`}
                      >
                        <span>GitHub</span>
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <ul className="tech-list" style={{ marginBottom: 0 }} aria-label="Technologies used">
                {phpGroup.technologies.map((tech) => (
                  <li key={tech} className="tech-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}