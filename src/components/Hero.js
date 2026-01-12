// import React from 'react';
// import { ArrowRight, User, Download, Mail, MapPin } from 'lucide-react';
// import profileImage from '../assets/images/Profile.jpg';

// const Hero = () => {
//   return (
//     <div className="hero">
//       <div className="hero-content">
//         <div className="hero-text">
//           <h1 className="hero-title">Hi, I'm Vatsal Gandhi</h1>
//           <p className="hero-subtitle">Data Analyst & Software Developer</p>
//           <p className="hero-description">
//             Transforming ideas into intelligent solutions through cutting-edge technology. 
//             Specialized in machine learning, data analysis, and modern web development.
//             Passionate about creating innovative solutions that make a real impact.
//           </p>
          
//           <div className="hero-info">
//             <div className="info-item">
//               <Mail size={16} />
//               <span>gandhivatsal76@gmail.com</span>
//             </div>
//             <div className="info-item">
//               <MapPin size={16} />
//               <span>Navsari, Gujarat, India</span>
//             </div>
//           </div>
          
//           <div className="hero-actions">
//             <a href="#projects" className="btn-primary">
//               View My Work
//               <ArrowRight size={18} />
//             </a>
//             <a href="#contact" className="btn-secondary">
//               Let's Connect
//             </a>
//             <a href="/documents/Vatsal_Gandhi_Resume.pdf" download className="btn-secondary">
//               <Download size={18} />
//               Download CV
//             </a>
//           </div>
//         </div>
        
//         <div className="hero-image">
//           <div className="hero-image-container">
//             <img 
//               src={profileImage} 
//               alt="Vatsal Gandhi" 
//               className="hero-profile-image"
//             />
//             <div className="hero-image-overlay">
//               <span>Vatsal Gandhi</span>
//               <p>Data Analyst & Developer</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import { ArrowRight, User, Download, Mail, MapPin } from 'lucide-react';
import profileImage from '../assets/images/Profile.jpg';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm Vatsal Gandhi</h1>
          <p className="hero-subtitle">Data Scientist</p>
          <p className="hero-description">
            Data Analyst / Data Scientist with a strong foundation in analytics, machine learning, and scalable data systems, focused on extracting signal from complex datasets and translating insights into measurable business impact. I specialize in building end-to-end data solutions—from data ingestion and validation to modeling, analysis, and visualization.
          </p>
          
          <div className="hero-info">
            <div className="info-item">
              <Mail size={16} />
              <span>gandhivatsal76@gmail.com</span>
            </div>
            <div className="info-item">
              <MapPin size={16} />
              <span>Manhattan, New York</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Connect
            </a>
            <a href="/documents/Vatsal_Gandhi_Resume.pdf" download className="btn-secondary">
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-image-container">
            <img 
              src={profileImage} 
              alt="Vatsal Gandhi" 
              className="hero-profile-image"
            />
            <div className="hero-image-overlay">
              <span>Vatsal Gandhi</span>
              <p>Data Analyst & Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;