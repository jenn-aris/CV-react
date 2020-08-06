import React from 'react';
import data from '/home/jennaris/Bureau/html/cv_react_v1/src/data/cv';

const { ExperienceProfessionelle } = data

const jobs = ExperienceProfessionelle.map(mission => (
  <li key={mission.id} >    
     <div className="intituleJob">
      {mission.job}
      <div className="date">
        {mission.time}{mission.year}
      </div>
     </div>
    <br /> <div className="descriptJob">{mission.jobDescription}</div>
  </li>
));

export default () => (
  <div className="experiences">
    <h3>Experiences:</h3>
    <ul>
    {jobs}
    </ul>
  </div>
);
