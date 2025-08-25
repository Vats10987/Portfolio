import React from 'react';

const Skills = ({ skills, softSkills }) => {
  return (
    <div className="skills-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

      <div className="technical-skills">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <h4>{category}</h4>
              <div className="skill-tags">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="soft-skills">
        <h3>Professional Skills</h3>
        <div className="soft-skills-grid">
          {softSkills.map((skill, index) => (
            <div key={index} className="soft-skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Skills;