import React, { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <div className="status-badge">
            <span className="status-dot" aria-hidden="true" />
            <span>{personal.status}</span>
          </div>

          <p className="hero-name">
            {personal.name} &mdash; {personal.title}
          </p>

          <h1 className="hero-headline">{personal.headline}</h1>

          <p className="hero-description">{personal.summary}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>Explore Projects</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary">
              <Mail size={16} aria-hidden="true" />
              <span>Get in Touch</span>
            </a>
          </div>

          <div className="hero-links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="Rifat Bin Alam GitHub Profile"
            >
              <Github size={17} aria-hidden="true" />
              <span>github.com/Rifat-Bin-Alam</span>
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              aria-label="Rifat Bin Alam LinkedIn Profile"
            >
              <Linkedin size={17} aria-hidden="true" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>

        <div className="portrait-wrapper">
          <div className="portrait-frame">
            {photoAvailable ? (
              <img
                src={personal.portraitPath}
                alt="Portrait of Rifat Bin Alam, Backend Developer"
                className="portrait-image"
                onError={() => setPhotoAvailable(false)}
              />
            ) : (
              <div
                className="portrait-placeholder"
                role="img"
                aria-label="Reserved portrait frame for Rifat Bin Alam"
              >
                <div className="portrait-top-bar">
                  <span>PORTRAIT // 4:5</span>
                  <span>.NET &amp; SQL</span>
                </div>

                <div className="portrait-center">
                  <div className="portrait-monogram">RBA</div>
                  <div className="portrait-name">{personal.name}</div>
                  <div className="portrait-role">{personal.title}</div>
                </div>

                <div className="portrait-bottom-bar">
                  <span>ASSET SLOT</span>
                  <span>/public/images/profile.jpg</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}