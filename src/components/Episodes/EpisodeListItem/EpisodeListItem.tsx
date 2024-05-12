import React from 'react';
import { Episode } from '../../../types/episode';
import { formatDateString } from '../../../helpers/formatDateString';

interface EpisodeListItemProps {
  episode: Episode;
  onEpisodeSelect: (episode: Episode) => void;
  showButton: boolean;
}

const EpisodeListItem: React.FC<EpisodeListItemProps> = ({ episode, onEpisodeSelect, showButton }) => {
  const { id, name, episode: episodeNumber, air_date, created } = episode;

  const handleButtonClick = () => {
    onEpisodeSelect(episode);
  };

  return (
    <div key={id} className="item">
      <div className='item__details'>
        <img
          src={`https://via.placeholder.com/200x200?text=${name}`}
          alt="Placeholder"
          className="item__image"
        />
        <div>
          <h3 className="item__title">{id} {name}</h3>
          <div className='item__info-block'>
            <p className="item__info">{episodeNumber}</p>
            <p className="item__info">Air Date: {air_date}</p>
            <p className="item__info">Created: {formatDateString(created)}</p>
          </div>
        </div>
      </div>
      {showButton && <button onClick={handleButtonClick}>Info</button>}
    </div>
  );
};

export default EpisodeListItem;
