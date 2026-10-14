import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">01 / Profile</span>
          <h2 className="section-title">Backend Engineering Foundation</h2>
        </div>

        <div className="about-grid">
          <div className="about-prose">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <aside className="about-highlights" aria-label="Documented Focus Areas">
            <h3 className="about-highlights-title">Documented Experience</h3>
            <ul className="about-list">
              {about.highlights.map((item, idx) => (
                <li key={idx} className="about-list-item">
                  <span className="about-list-bullet" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}