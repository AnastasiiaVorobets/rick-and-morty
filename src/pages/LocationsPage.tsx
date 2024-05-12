import React from 'react';
import Header from '../components/Shared/Header/Header';
import Footer from '../components/Shared/Footer/Footer';
import LocationsContainer from '../components/Locations/LocationsContainer/LocationsContainer';

const LocationsPage: React.FC = () => {
  return (
    <div className="episodes_page">
      <Header />
      <LocationsContainer />
      <Footer />
    </div>
  );
};

export default LocationsPage;
