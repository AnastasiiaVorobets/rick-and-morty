import React from 'react';
import './Filters.scss';

interface FiltersProps {
  searchTerm: string;
  statusFilter: '' | 'Alive' | 'Dead' | 'unknown';
  genderFilter: '' | 'Male' | 'Female' | 'Genderless' | 'unknown';
  onSearchTermChange: React.Dispatch<React.SetStateAction<string>>;
  onStatusFilterChange: React.Dispatch<React.SetStateAction<'' | 'Alive' | 'Dead' | 'unknown'>>;
  onGenderFilterChange: React.Dispatch<React.SetStateAction<'' | 'Male' | 'Female' | 'Genderless' | 'unknown'>>;
  hasFilteredCharacters: boolean;
}

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  statusFilter,
  genderFilter,
  onSearchTermChange,
  onStatusFilterChange,
  onGenderFilterChange,
  hasFilteredCharacters,
}) => {
  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchTermChange(e.target.value);
  };

  const handleStatusFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusFilterChange(e.target.value as '' | 'Alive' | 'Dead' | 'unknown');
  };

  const handleGenderFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onGenderFilterChange(e.target.value as '' | 'Male' | 'Female' | 'Genderless' | 'unknown');
  };

  return (
    <div className="filters">
      <div className="filter-controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <select value={statusFilter} onChange={handleStatusFilterChange}>
          {['', 'Alive', 'Dead', 'unknown'].map(status => (
            <option key={status} value={status}>{status || 'All Status'}</option>
          ))}
        </select>
        <select value={genderFilter} onChange={handleGenderFilterChange}>
          {['', 'Male', 'Female', 'Genderless', 'unknown'].map(gender => (
            <option key={gender} value={gender}>{gender || 'All Gender'}</option>
          ))}
        </select>
      </div>
      {hasFilteredCharacters ? null : (
        <p className="no-characters-message">No characters found with the current filters</p>
      )}
    </div>
  );
};

export default Filters;
