import React, { useMemo } from 'react';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage, totalItems, itemsPerPage, onPageChange }) => {

  const totalPages = useMemo(() => Math.ceil(totalItems / itemsPerPage), [totalItems, itemsPerPage]);

  const pages = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [totalPages]);

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {pages.map((pageNumber) => (
          <li key={pageNumber} className={currentPage === pageNumber ? 'active' : ''}>
            <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button> 
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
