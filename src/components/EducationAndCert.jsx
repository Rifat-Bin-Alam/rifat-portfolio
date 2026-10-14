import React from 'react';
import { Award, ExternalLink, FileCheck2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EducationAndCert() {
  const { education, recognition, certification } = portfolioData;

  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">05 / Academic Background &amp; Credentials</span>
          <h2 className="section-title">Education, Recognition &amp; Certification</h2>
        </div>

        <div className="edu-layout">
          {/* Education Timeline */}
          <div>
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}
            >
              Academic Timeline
            </h3>

            <div className="timeline">
              {education.map((item) => (
                <div key={item.degree} className="timeline-item">
                  <div className="timeline-period">{item.period}</div>
                  <h4 className="timeline-degree">{item.degree}</h4>
                  <div className="timeline-institution">{item.institution}</div>
                  {item.note && <div className="timeline-note">{item.note}</div>}
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Certification Column */}
          <div className="recognition-stack">
            {/* Academic Recognition */}
            <div className="info-box">
              <div className="info-box-label">
                <Award
                  size={14}
                  style={{ verticalAlign: 'middle', marginRight: '6px' }}
                  aria-hidden="true"
                />
                Academic Recognition
              </div>
              <h3 className="info-box-title">{recognition.title}</h3>
              <p className="info-box-sub" style={{ marginBottom: 0 }}>
                {recognition.period} &mdash; {recognition.institution}
              </p>
            </div>

            {/* Certification */}
            <div id="certification" className="info-box">
              <div className="info-box-label">
                <FileCheck2
                  size={14}
                  style={{ verticalAlign: 'middle', marginRight: '6px' }}
                  aria-hidden="true"
                />
                Certification
              </div>
              <h3 className="info-box-title">{certification.title}</h3>
              <p className="info-box-sub">
                {certification.platform} &bull; {certification.type} &bull;{' '}
                {certification.date} ({certification.duration})
              </p>

              <a
                href={certification.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <span>Verify Certificate on Udemy</span>
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}