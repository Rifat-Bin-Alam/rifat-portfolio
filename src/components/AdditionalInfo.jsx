import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function AdditionalInfo() {
  const { languages, membership } = portfolioData.additional;

  return (
    <section id="additional" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">06 / Additional Information</span>
          <h2 className="section-title">Languages &amp; University Membership</h2>
        </div>

        <div className="additional-grid">
          <div className="info-box" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="info-box-label">Spoken Languages</div>
            <div className="lang-grid">
              {languages.map((lang) => (
                <div key={lang.name} className="lang-item">
                  <span className="lang-name">{lang.name}</span>
                  <span className="lang-level">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="info-box" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="info-box-label">Academic Society Membership</div>
            <h3 className="info-box-title">
              {membership.role}, {membership.organization}
            </h3>
            <p className="info-box-sub" style={{ marginBottom: 0 }}>
              Active Period: {membership.period}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}