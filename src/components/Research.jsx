import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Research() {
  const { research } = portfolioData;

  return (
    <section id="research" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">04 / Academic Research</span>
          <h2 className="section-title">Network Security &amp; Machine Learning Research</h2>
        </div>

        <article className="research-card">
          <div className="research-meta">
            Undergraduate Research Project // SDN Security
          </div>
          <h3 className="research-title">{research.title}</h3>
          <p className="research-body">{research.summary}</p>

          <ul className="tech-list" style={{ marginBottom: 0 }} aria-label="Research tools and datasets">
            {research.technologies.map((item) => (
              <li key={item} className="tech-item">
                {item}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}