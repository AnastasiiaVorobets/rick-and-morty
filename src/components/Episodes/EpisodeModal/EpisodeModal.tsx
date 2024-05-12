import React, { useState } from 'react';
import { Episode } from '../../../types/episode';
import './EpisodeModal.scss';
import EpisodeListItem from '../EpisodeListItem/EpisodeListItem';

interface EpisodeModalProps {
  episode: Episode;
  onCloseModal: () => void;
}

const EpisodeModal: React.FC<EpisodeModalProps> = ({ episode, onCloseModal }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCloseModal}>&times;</span>
        <EpisodeListItem episode={episode} onEpisodeSelect={onCloseModal} showButton={false} />
        <div className="characters">
          {showMore ? (
            episode.characters.map((character) => (
              <p key={character}>{character}</p>
            ))
          ) : (
            episode.characters.slice(0, 3).map((character) => (
              <p key={character}>{character}</p>
            ))
          )}
        </div>
        {!showMore && episode.characters.length > 3 && (
          <button onClick={handleToggleShowMore}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default EpisodeModal;
