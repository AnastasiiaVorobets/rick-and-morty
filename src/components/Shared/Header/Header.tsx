import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Rick & Morty App</div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="/" className="header__nav-link">Episodes</a>
            </li>
            <li className="header__nav-item">
              <a href="/characters" className="header__nav-link">Characters</a>
            </li>
            <li className="header__nav-item">
              <a href="/locations" className="header__nav-link">Locations</a>
            </li>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
