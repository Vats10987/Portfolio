// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import {
//   Sun, Moon, Download, Menu, X, ChevronDown
// } from 'lucide-react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Cursor from './components/Cursor';
// import useActiveSection from './hooks/useActiveSection';
// import achievements from './data/achievements';
// import experiences from './data/experiences';
// import projects from './data/projects';
// import skills from './data/skills';
// import softSkills from './data/softSkills';
// import './App.css';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const sectionsRef = useRef({
//     home: null,
//     about: null,
//     experience: null,
//     projects: null,
//     skills: null,
//     contact: null
//   });

//   const activeSection = useActiveSection(Object.values(sectionsRef.current));

//   useEffect(() => {
//     const saved = localStorage.getItem('theme');
//     if (saved) setDarkMode(saved === 'dark');

//     const t = setTimeout(() => setIsLoading(false), 900);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     document.documentElement.style.scrollBehavior = 'smooth';
//     document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
//     localStorage.setItem('theme', darkMode ? 'dark' : 'light');
//   }, [darkMode]);

//   const toggleTheme = useCallback(() => setDarkMode(v => !v), []);
//   const toggleMobile = useCallback(() => setMobileOpen(v => !v), []);
//   const closeMobile = useCallback(() => setMobileOpen(false), []);

//   const scrollTo = useCallback((id) => {
//     closeMobile();
//     const el = sectionsRef.current[id];
//     if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//   }, [closeMobile]);

//   const resumeHref = useMemo(() => '/documents/Vatsal_Gandhi_Resume.pdf', []);

//   return (
//     <div className={`App ${darkMode ? 'dark' : 'light'}`}>
//       {isLoading && (
//         <div className="loading-screen">
//           <div className="loading-content">
//             <div className="loading-logo"> <Download size={36} /> </div>
//             <h2>Vatsal Gandhi</h2>
//           </div>
//         </div>
//       )}

//       <Cursor />

//       <header className="header">
//         <div className="container header-inner">
//           <div className="logo" onClick={() => scrollTo('home')}>
//             {/* <div className="logo-icon"> <Download size={20} /> </div> */}
//             <span className="logo-text">Vatsal Gandhi</span>
//           </div>

//           <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
//             <a className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Home</a>
//             <a className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>About</a>
//             <a className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollTo('experience')}>Experience</a>
//             <a className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollTo('projects')}>Projects</a>
//             <a className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollTo('skills')}>Skills</a>
//             <a className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>Contact</a>

//             <a className="resume-btn" href={resumeHref} download>
//               <Download size={14} /> <span>Resume</span>
//             </a>
//           </nav>

//           <div className="header-actions">
//             <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
//               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button>
//             <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle mobile menu">
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </header>

//       <main>
//         <section id="home" ref={el => sectionsRef.current.home = el}><Hero /></section>
//         <section id="about" ref={el => sectionsRef.current.about = el}><About achievements={achievements} /></section>
//         <section id="experience" ref={el => sectionsRef.current.experience = el}><Experience experiences={experiences} /></section>
//         <section id="projects" ref={el => sectionsRef.current.projects = el}><Projects projects={projects} /></section>
//         <section id="skills" ref={el => sectionsRef.current.skills = el}><Skills skills={skills} softSkills={softSkills} /></section>
//         <section id="contact" ref={el => sectionsRef.current.contact = el}><Contact /></section>
//       </main>

//       <Footer scrollTo={scrollTo} />

//       <button
//         className="scroll-to-top"
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         aria-label="Scroll to top"
//       >
//         <ChevronDown size={20} />
//       </button>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import {
  Sun, Moon, Download, Menu, X, ChevronDown
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import useActiveSection from './hooks/useActiveSection';
import achievements from './data/achievements';
import experiences from './data/experiences';
import projects from './data/projects';
import skills from './data/skills';
import softSkills from './data/softSkills';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const sectionsRef = useRef({
    home: null,
    about: null,
    experience: null,
    projects: null,
    skills: null,
    contact: null
  });

  const activeSection = useActiveSection(Object.values(sectionsRef.current));

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) setDarkMode(saved === 'dark');

    const t = setTimeout(() => setIsLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleTheme = useCallback(() => setDarkMode(v => !v), []);
  const toggleMobile = useCallback(() => setMobileOpen(v => !v), []);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const scrollTo = useCallback((id) => {
    closeMobile();
    const el = sectionsRef.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [closeMobile]);

  const resumeHref = useMemo(() => '/documents/Vatsal_Gandhi_Resume.pdf', []);

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      {isLoading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-logo"> <Download size={36} /> </div>
            <h2>Vatsal Gandhi</h2>
          </div>
        </div>
      )}

      <Cursor />

      <header className="header">
        <div className="container header-inner">
          <div className="logo" onClick={() => scrollTo('home')}>
            {/* <div className="logo-icon"> <Download size={20} /> </div> */}
            <span className="logo-text">Vatsal Gandhi</span>
          </div>

          <nav className={`nav-links ${mobileOpen ? 'open' : ''}`}>
            <a className={activeSection === 'home' ? 'active' : ''} onClick={() => scrollTo('home')}>Home</a>
            <a className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollTo('about')}>About</a>
            <a className={activeSection === 'experience' ? 'active' : ''} onClick={() => scrollTo('experience')}>Experience</a>
            <a className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollTo('projects')}>Projects</a>
            <a className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollTo('skills')}>Skills</a>
            <a className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollTo('contact')}>Contact</a>

            <a className="resume-btn" href={resumeHref} download>
              <Download size={14} /> <span>Resume</span>
            </a>
          </nav>

          <div className="header-actions">
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle mobile menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" ref={el => sectionsRef.current.home = el}><Hero /></section>
        <section id="about" ref={el => sectionsRef.current.about = el}><About achievements={achievements} /></section>
        <section id="experience" ref={el => sectionsRef.current.experience = el}><Experience experiences={experiences} /></section>
        <section id="projects" ref={el => sectionsRef.current.projects = el}><Projects projects={projects} /></section>
        <section id="skills" ref={el => sectionsRef.current.skills = el}><Skills skills={skills} softSkills={softSkills} /></section>
        <section id="contact" ref={el => sectionsRef.current.contact = el}><Contact /></section>
      </main>

      <Footer scrollTo={scrollTo} />

      <button
        className="scroll-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ChevronDown size={20} />
      </button>
    </div>
  );
}

export default App;