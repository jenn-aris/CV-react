import React from 'react';
import data from '/home/jennaris/Bureau/html/cv_react_v1/src/data/cv';
import opquastLogo from '/home/jennaris/Bureau/html/cv_react_v1/src/assets/opquast-pic.svg';
import freecodecampLogo from '/home/jennaris/Bureau/html/cv_react_v1/src/assets/freecodecamp.jpg';

const { infoperso , CompetencesTechniques , LangageVivante , Hobbies } = data

const infolist = infoperso.map((info) => 
  <li key={info} className="info">{info}</li>
);

const competenceslist = CompetencesTechniques.map((competence) =>
  <li key={competence} className="competence">{competence}</li>
);

const languelist = LangageVivante.map((langue) =>
  <li key={langue} className="langue">{langue}</li>
);

const hobbielist = Hobbies.map((hobbie) =>
  <li key={hobbie} className="hobbie">{hobbie}</li>
);
export default () => (
    <div className="infoPerso">
      <h3>Infos Perso:</h3>
      <ul className="informations">
          {infolist}
      </ul>
      <h4>Compétences techniques:</h4>
      <ul className="competences">
          {competenceslist}
      </ul>
      
      <h4> Certifications:</h4>
      <div className="certifs">
        <h5>Formation et Certification <br />Opquast : Maîtrise de la Qualité en projet Web</h5>
        <img src={opquastLogo} alt="opquast certification logo"/>   
        <a href="https://directory.opquast.com/fr/certificat/I4Q5XN/" target="_blank" rel="noopener noreferrer" >lien d'authentification </a>

        <h5>Formation et Certification : <br /> Responsive Web Design</h5>
        <img src={freecodecampLogo} alt="freecodecamp logo"/>   
        <a href="https://www.freecodecamp.org/certification/jenn-aris/responsive-web-design" target="_blank" rel="noopener noreferrer" >lien d'authentification</a>
      </div>

      <h4> Langues vivantes:</h4>
      <ul className="langues">
        {languelist}
      </ul>
      <h4> centres d'interets:</h4>
      <ul className="hobbies">
        {hobbielist}
      </ul>
    </div>
);