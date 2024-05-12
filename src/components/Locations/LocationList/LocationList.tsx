import React from 'react';
import { Location } from '../../../types/location';
import LocationItem from '../LocationItem/LocationItem';

interface LocationListProps {
  locations: Location[];
}

const LocationList: React.FC<LocationListProps> = ({ locations }) => {
  return (
    <div className="list">
      {locations.map(location => (
        <LocationItem key={location.id} location={location} />
      ))}
    </div>
  );
};

export default LocationList;
