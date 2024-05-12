import React from 'react';
import { Episode } from '../../../types/episode';
import EpisodeListItem from '../EpisodeListItem/EpisodeListItem';

interface EpisodeListProps {
  episodes: Episode[];
  onEpisodeSelect: (episode: Episode) => void;
}

const EpisodeList: React.FC<EpisodeListProps> = ({ episodes, onEpisodeSelect }) => {
  return (
    <div className="list">
      {episodes.map((episode) => (
        <EpisodeListItem key={episode.id} episode={episode} onEpisodeSelect={onEpisodeSelect} showButton={true} />
      ))}
    </div>
  );
};

export default EpisodeList;
