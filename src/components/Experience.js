// import React from 'react';
// import { MapPin, Calendar } from 'lucide-react';

// const Experience = ({ experiences }) => {
//   return (
//     <div className="experience-section section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Professional Experience</h2>
//           <p className="section-subtitle">My journey in technology and innovation</p>
//         </div>
        
//         <div className="experience-timeline">
//           {experiences.map((exp, index) => (
//             <div key={index} className="timeline-item">
//               <div className="timeline-marker">
//                 <div className="marker-dot"></div>
//                 <div className="marker-line"></div>
//               </div>
              
//               <div className="experience-card">
//                 <div className="experience-header">
//                   <div className="experience-icon">
//                     {exp.icon}
//                   </div>
//                   <div className="experience-info">
//                     <h3>{exp.title}</h3>
//                     <p className="company">{exp.company}</p>
//                     <div className="experience-meta">
//                       <span><MapPin size={14} /> {exp.location}</span>
//                       <span><Calendar size={14} /> {exp.duration}</span>
//                     </div>
//                   </div>
//                 </div>
                
//                 <p className="experience-description">{exp.description}</p>
                
//                 <div className="experience-tech">
//                   {exp.technologies.map((tech, techIndex) => (
//                     <span key={techIndex} className="tech-tag">{tech}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Experience;

import React from 'react';
import { MapPin, Calendar } from 'lucide-react';

const Experience = ({ experiences }) => {
  return (
    <div className="experience-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">My journey in technology and innovation</p>
        </div>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                <div className="marker-line"></div>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-icon">
                    {exp.icon}
                  </div>
                  <div className="experience-info">
                    <h3>{exp.title}</h3>
                    <p className="company">{exp.company}</p>
                    <div className="experience-meta">
                      <span><MapPin size={14} /> {exp.location}</span>
                      <span><Calendar size={14} /> {exp.duration}</span>
                    </div>
                  </div>
                </div>
                
                <p className="experience-description">{exp.description}</p>
                
                <div className="experience-tech">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;