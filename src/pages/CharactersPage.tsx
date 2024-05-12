import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import CharactersContainer from '../components/Characters/CharactersContainer/CharactersContainer';

const CharacterPage: React.FC = () => {
  return (
    <div className="character_page">
      <Header />
      <CharactersContainer />
      <Footer />
    </div>
  );
};

export default CharacterPage;
