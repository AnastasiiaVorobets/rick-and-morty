import React from 'react';
import { Location } from '../../../types/location';

interface LocationItemProps {
  location: Location;
}

const LocationItem: React.FC<LocationItemProps> = ({ location }) => {
  const { id, name, type, dimension } = location;

  return (
    <div className="item">
      <div className='item__details'>
        <img
          src={`https://via.placeholder.com/200x200?text=${name}`}
          alt="Placeholder"
          className="item__image"
        />
        <div>
          <h3 className="item__title">{id} {name}</h3>
          <div className='item__info-block'>
            <p className="item__info">Type: {type}</p>
            <p className="item__info">Dimension: {dimension}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationItem;
