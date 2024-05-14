import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Character } from '../../../types/character';
import { filterCharacters } from '../../../helpers/filterCharacters';
import CharacterList from '../CharacterList/CharacterList';
import Filters from '../Filters/Filters';
import Pagination from '../../Shared/Pagination/Pagination';

const CharactersContainer: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'' | 'Alive' | 'Dead' | 'unknown'>('');
  const [genderFilter, setGenderFilter] = useState<'' | 'Male' | 'Female' | 'Genderless' | 'unknown' >('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(1);

  const hasFilteredCharacters = filteredCharacters.length > 0;


  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);
        setFilteredCharacters(response.data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, [currentPage]);

  useEffect(() => {
    const filtered = filterCharacters(characters, searchTerm, statusFilter, genderFilter);
    setFilteredCharacters(filtered);
  }, [characters, searchTerm, statusFilter, genderFilter]);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <h1>Characters</h1>
      <Filters
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        genderFilter={genderFilter}
        onGenderFilterChange={setGenderFilter}
        hasFilteredCharacters={hasFilteredCharacters}
      />
      <CharacterList characters={filteredCharacters} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CharactersContainer;
