import React, { useMemo } from 'react';
import './Pagination.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage, totalPages, onPageChange }) => {

  const pages = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [totalPages]);

  const visiblePages = pages.slice(Math.max(0, currentPage - 3), Math.min(pages.length, currentPage + 2));

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="arrow" onClick={() => onPageChange(currentPage - 1)}>
            <span>«</span>
          </li>
        )}
        {visiblePages.map((pageNumber) => (
          <li key={pageNumber} className={currentPage === pageNumber ? 'active' : ''}>
            <button onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="arrow" onClick={() => onPageChange(currentPage + 1)}>
            <span>»</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
