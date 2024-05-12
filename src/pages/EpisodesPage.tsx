import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import EpisodesContainer from '../components/Episodes/EpisodesContainer/EpisodesContainer';

const EpisodesPage: React.FC = () => {
  return (
    <div className="episodes_page">
      <Header />
      <EpisodesContainer />
      <Footer />
    </div>
  );
};

export default EpisodesPage;
