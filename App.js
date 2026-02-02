import React from 'react';
import { experiences } from '../utils/data/experience';

const ExperienceList = () => {
  return (
    <div>
      {experiences.map(exp => (
        <div key={exp.id}>
          <h3>{exp.title} at {exp.company} {exp.duration}</h3>
          <ul>
            {exp.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;