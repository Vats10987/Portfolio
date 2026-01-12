// import React from 'react';
// import { ExternalLink, Github } from 'lucide-react';

// const ProjectCard = ({ project }) => {
//   return (
//     <div className="project-card">
//       <div 
//         className="project-image"
//         style={{
//           backgroundImage: `url(${project.image})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         {/* Overlay with links */}
//         <div className="project-overlay">
//           <div className="project-links">
//             {project.githubUrl && (
//               <a
//                 href={project.githubUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="project-link"
//               >
//                 <Github size={20} />
//               </a>
//             )}
//             {project.liveUrl && project.liveUrl !== "#" && (
//               <a
//                 href={project.liveUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="project-link"
//               >
//                 <ExternalLink size={20} />
//               </a>
//             )}
//           </div>
//         </div>
//       </div>
      
//       {/* Project Content */}
//       <div className="project-content">
//         <div className="project-category">{project.category}</div>
//         <h3 className="project-title">{project.title}</h3>
//         <p className="project-description">{project.description}</p>
        
//         {/* Features */}
//         <div className="project-features">
//           {project.features.map((feature, index) => (
//             <span key={index} className="feature-tag">{feature}</span>
//           ))}
//         </div>
        
//         {/* Technologies */}
//         <div className="project-tech">
//           {project.technologies.map((tech, index) => (
//             <span key={index} className="tech-tag">{tech}</span>
//           ))}
//         </div>
        
//         {/* Action Buttons */}
//         <div className="project-actions">
//           {project.githubUrl && (
//             <a
//               href={project.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-outline"
//             >
//               <Github size={16} />
//               View Code
//             </a>
//           )}
//           {project.liveUrl && project.liveUrl !== "#" && (
//             <a
//               href={project.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="btn btn-primary"
//             >
//               <ExternalLink size={16} />
//               Live Demo
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div 
        className="project-image"
        style={{
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay with links */}
        <div className="project-overlay">
          <div className="project-links">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <Github size={20} />
              </a>
            )}
            {project.liveUrl && project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      {/* Project Content */}
      <div className="project-content">
        <div className="project-category">{project.category}</div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        {/* Features */}
        <div className="project-features">
          {project.features.map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        
        {/* Technologies */}
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="project-actions">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <Github size={16} />
              View Code
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
