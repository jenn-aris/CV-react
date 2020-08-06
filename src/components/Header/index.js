import React from 'react';
import data from '/home/jennaris/Bureau/html/cv_react_v1/src/data/cv';
import githubLogo from '/home/jennaris/Bureau/html/cv_react_v1/src/assets/github.png';
import linkedinLogo from '/home/jennaris/Bureau/html/cv_react_v1/src/assets/linkedin.png';
import mailLogo from '/home/jennaris/Bureau/html/cv_react_v1/src/assets/mail.png';
import phoneLogo from '/home/jennaris/Bureau/html/cv_react_v1/src/assets/phone.png';
import portefolioLogo from '/home/jennaris/Bureau/html/cv_react_v1/src/assets/portefolio.png';

const { title, photoJenn, PersonalInfo } = data;
console.log('debug', title, photoJenn, PersonalInfo);

// Un composant React est une fonction qui retourne
// un élément React (=== le résultat de React.createElement())
export default () => (<div className="content">
  <div className="welcome-section">
    <h1>Jennifer ARISTIZABAL</h1>
    <p>Développeur web fullstack spécialisé React js</p>
  </div>
 
    <header className="header">
      <img
        src={photoJenn}
        alt={title}
        className="header-image"
      />
    </header>
    <div className="logos">
    <a href="https://jenn-aris.github.io/"><img src={portefolioLogo} className="portefolioLogo" alt="portefolio logo" target="_blank"/></a>
        <a href="https://github.com/jenn-aris"><img src={githubLogo} className="githubLogo" alt="github logo" target="_blank"/></a>
        <a href="https://www.linkedin.com/in/jenn-aris/"><img src={linkedinLogo} className="linkedinLogo" alt="linkedin logo" target="_blank" /></a>
        <img src={mailLogo} className="mailLogo" alt="email logo"/><address>jennaris.dev@gmail.com</address>
        <img src={phoneLogo} className="phoneLogo" alt="phone logo" /><address>0672349601</address>
    </div>
  </div>
);
