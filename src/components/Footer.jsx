import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          &copy; {new Date().getFullYear()} {personal.name}. Built with React &amp; Vite.
        </div>

        <a href="#top" className="btn btn-ghost" aria-label="Back to top">
          <span>Back to top</span>
          <ArrowUp size={14} aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}