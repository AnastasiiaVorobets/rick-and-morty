import React, { useState, useEffect } from 'react';
import { Episode } from '../../../types/episode';
import { Character } from '../../../types/character';
import './EpisodeModal.scss';
import EpisodeListItem from '../EpisodeListItem/EpisodeListItem';
import EpisodeCharacterItem from '../EpisodeCharacterItem/EpisodeCharacterItem';

interface EpisodeModalProps {
  episode: Episode;
  onCloseModal: () => void;
}

const EpisodeModal: React.FC<EpisodeModalProps> = ({ episode, onCloseModal }) => {
  const [showMore, setShowMore] = useState(false);
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const charactersPromises = episode.characters.map(async (characterUrl) => {
          const response = await fetch(characterUrl);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return {
            id: data.id,
            name: data.name,
            status: data.status,
            species: data.species,
            type: data.type,
            gender: data.gender,
            origin: data.origin,
            location: data.location,
            image: data.image
          };
        });

        const charactersData = await Promise.all(charactersPromises);
        setCharactersData(charactersData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching characters data:', error);
      }
    };

    fetchCharactersData();
  }, [episode.characters]);

  const handleToggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onCloseModal}>&times;</span>
        <EpisodeListItem episode={episode} onEpisodeSelect={onCloseModal} showButton={false} />
        {loading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className="characters">
            {showMore
              ? charactersData.map((character) => (
                  <EpisodeCharacterItem key={character.id} {...character} />
                ))
              : charactersData.slice(0, 3).map((character) => (
                  <EpisodeCharacterItem key={character.id} {...character} />
                ))}
          </div>
        )}
        {!showMore && charactersData.length > 3 && (
          <button onClick={handleToggleShowMore} className='show-button'>Show more</button>
        )}
      </div>
    </div>
  );
};

export default EpisodeModal;
