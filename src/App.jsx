import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Research from './components/Research';
import EducationAndCert from './components/EducationAndCert';
import AdditionalInfo from './components/AdditionalInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Research />
        <EducationAndCert />
        <AdditionalInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}