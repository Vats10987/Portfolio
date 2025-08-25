import React from 'react';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleTheme, mobileOpen, toggleMobile, activeSection, scrollTo }) => {
  return (
    <nav className={`navbar ${mobileOpen ? 'open' : ''}`}>
      <div className="logo" onClick={() => scrollTo('home')}>
        <span>Vatsal Gandhi</span>
      </div>
      <div className="nav-links">
        <a className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Home</a>
        <a className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>About</a>
        <a className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollTo('experience')}>Experience</a>
        <a className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollTo('projects')}>Projects</a>
        <a className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollTo('skills')}>Skills</a>
        <a className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>Contact</a>
        <a className="resume-btn" href="/documents/Vatsal_Gandhi_Resume.pdf" download>
          <Download size={14} /> <span>Resume</span>
        </a>
      </div>
      <div className="header-actions">
        <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle menu">
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;