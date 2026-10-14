import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">07 / Contact</span>
          <h2 className="section-title">Initiate a Conversation</h2>
        </div>

        <div className="contact-box">
          <div>
            <h3
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                marginBottom: '12px',
                color: 'var(--text-primary)',
              }}
            >
              Available for Backend &amp; Software Development Internships
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              If you are recruiting for a backend or software engineer—particularly
              involving C#, ASP.NET Core, .NET, or relational databases—feel free to reach out
              directly via email or connect on GitHub and LinkedIn.
            </p>

            <div className="contact-actions">
              <a href={`mailto:${personal.email}`} className="btn btn-primary">
                <Mail size={16} aria-hidden="true" />
                <span>{personal.email}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-secondary"
                aria-label="Copy email address to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={16} color="var(--accent-blue)" aria-hidden="true" />
                    <span>Email Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} aria-hidden="true" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="contact-channels">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-link"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <Github size={18} color="var(--accent-blue)" aria-hidden="true" />
                <span>GitHub</span>
              </span>
              <span className="channel-meta">
                /Rifat-Bin-Alam <ExternalLink size={12} aria-hidden="true" />
              </span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-link"
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                <Linkedin size={18} color="var(--accent-blue)" aria-hidden="true" />
                <span>LinkedIn</span>
              </span>
              <span className="channel-meta">
                /in/rifat-bin-alam <ExternalLink size={12} aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}