import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = ({ scrollTo }) => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Vatsal Gandhi. All rights reserved.</p>
        </div>
        <div className="footer-right">
            <nav className="footer-nav">
              <a href="#home" onClick={() => scrollTo('home')}>Home</a>
              <a href="#about" onClick={() => scrollTo('about')}>About</a>
              <a href="#projects" onClick={() => scrollTo('projects')}>Projects</a>
              <a href="#contact" onClick={() => scrollTo('contact')}>Contact</a>
            </nav>
            <div className="footer-social">
              <a href="https://github.com/Vats10987" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/vatsal-gandhi-b52626230/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:gandhivatsal76@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default Footer;