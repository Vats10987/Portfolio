// import React from 'react';
// import { Award, MapPin, Calendar } from 'lucide-react';

// const About = ({ achievements }) => {
//   return (
//     <div className="about-section section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">About Me</h2>
//           <p className="section-subtitle">Passionate technologist with a drive for innovation</p>
//         </div>
        
//         <div className="about-content">
//           <div className="about-text">
//             <h3>Who I Am</h3>
//             <p>
//               I'm a passionate Data Analyst and Software Developer with a strong foundation in 
//               information technology. My journey in tech has been driven by curiosity and a desire 
//               to solve complex problems through innovative solutions.
//             </p>
//             <div className="about-details">
//               <div className="detail-item">
//                 <div className="detail-icon">
//                   <Award size={20} />
//                 </div>
//                 <div className="detail-content">
//                   <h4>Education</h4>
//                   <p>B.Tech in Information Technology</p>
//                   <span>Charotar University of Science and Technology</span>
//                   <span className="detail-highlight">CGPA: 8.22/10</span>
//                 </div>
//               </div>
//               <div className="detail-item">
//                 <div className="detail-icon">
//                   <Calendar size={20} />
//                 </div>
//                 <div className="detail-content">
//                   <h4>Experience</h4>
//                   <p>1+ Years in Software Development</p>
//                   <span>Specialized in ML, Web Development & Data Analysis</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="about-visual">
//             <h3>Achievements</h3>
//             <div className="achievements-grid">
//               {achievements.map((achievement, index) => (
//                 <div key={index} className="achievement-card">
//                   <div className="achievement-icon">
//                     {achievement.icon}
//                   </div>
//                   <div className="achievement-content">
//                     <h4>{achievement.title}</h4>
//                     <p>{achievement.issuer}</p>
//                     <span className="achievement-year">{achievement.year}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import { Award, MapPin, Calendar } from 'lucide-react';

const About = ({ achievements }) => {
  return (
    <div className="about-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Passionate technologist with a drive for innovation</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              Data Scientist with expertise in machine learning, statistical analysis, and scalable data pipelines, driving data-backed insights and measurable business impact from complex, high-volume datasets.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <Award size={20} />
                </div>
                <div className="detail-content">
                  <h4>Education</h4>
                  <p>M.S. in Computer Science</p>
                  <span>New York Institute of Technology</span>
                  <br />
                  <span className="detail-highlight">GPA: 4.00/4.00</span>
                </div>
                <div className="detail-content">
                  <h4>Education</h4>
                  <p>B.Tech in Information Technology</p>
                  <span>Charotar University of Science and Technology</span>
                  <br />
                  <span className="detail-highlight">GPA: 3.29/4.00</span>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <Calendar size={20} />
                </div>
                <div className="detail-content">
                  <h4>Experience</h4>
                  <p>1+ Years in Software Development</p>
                  <span>Specialized in ML, Web Development & Data Analysis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <h3>Achievements</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.issuer}</p>
                    <span className="achievement-year">{achievement.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;