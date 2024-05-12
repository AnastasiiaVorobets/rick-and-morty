import React from 'react';
import { Episode } from '../../../types/episode';

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
        <h3 className="item__title">{name}</h3>
        <p className="item__info">{episodeNumber}</p>
        <p className="item__info">{air_date}</p>
        <p className="item__info">{created}</p>
      </div>
      {showButton && <button onClick={handleButtonClick}>Info</button>}
    </div>
  );
};

export default EpisodeListItem;
