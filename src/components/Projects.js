// import React from 'react';
// import ProjectCard from './ProjectCard';

// const Projects = ({ projects }) => {
//   return (
//     <div className="projects-section section">
//       <div className="container">
//         <div className="section-header">
//           <h2 className="section-title">Featured Projects</h2>
//           <p className="section-subtitle">Innovative solutions that make a difference</p>
//         </div>
        
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <div className="projects-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Innovative solutions that make a difference</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;