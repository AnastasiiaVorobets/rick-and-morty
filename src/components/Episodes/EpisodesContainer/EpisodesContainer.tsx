import React, { useState, useEffect } from 'react';
import { Episode } from '../../../types/episode';
import EpisodeList from '../EpisodeList/EpisodeList';
import EpisodeModal from '../EpisodeModal/EpisodeModal';
import Pagination from '../../Shared/Pagination/Pagination';

const EpisodesContainer: React.FC = () => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode?page=${currentPage}&pageSize=${itemsPerPage}`);
        if (!response.ok) {
          throw new Error('Failed to fetch episodes');
        }
        const data = await response.json();
        setEpisodes(data.results);
      }
      catch (error) {
        console.error('Error fetching episodes:', error);
      }
    };
    fetchData();
  }, [currentPage, itemsPerPage]);

  const handleEpisodeSelect = (episode: Episode) => {
    setSelectedEpisode(episode);
  };

  const handleCloseModal = () => {
    setSelectedEpisode(null);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="episodes-container">
      <h1>Episodes</h1>
      <EpisodeList episodes={episodes} onEpisodeSelect={handleEpisodeSelect} />
      {episodes.length > 0 && (
        <Pagination
          currentPage={currentPage}
          totalItems={episodes.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
        />
      )}
      {selectedEpisode && (
        <EpisodeModal episode={selectedEpisode} onCloseModal={handleCloseModal} />
      )}
    </div>
  );
};

export default EpisodesContainer;
