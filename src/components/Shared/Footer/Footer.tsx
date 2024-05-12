import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <p className="footer__info-item">Anastasiia Vorobets</p>
        <p className="footer__info-item">anastasiia.vor@gmail.com</p>
      </div>
      <div className="footer__tech-stack">
        <p className="footer__tech-stack-title">Tech Stack:</p>
        <p className="footer__tech-stack-item">React, TypeScript, SCSS</p>
      </div>
      <div className="footer__api">
        <p className="footer__api-title">API:</p>
        <p className="footer__api-item"><a href="https://rickandmortyapi.com" className="footer__api-link">Rick and Morty API</a></p>
      </div>
    </footer>
  );
};

export default Footer;
