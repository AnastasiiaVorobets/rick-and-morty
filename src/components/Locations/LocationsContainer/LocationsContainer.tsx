import React, { useEffect, useState, useMemo } from 'react';
import LocationList from '../LocationList/LocationList';
import Pagination from '../../Shared/Pagination/Pagination';
import { Location } from '../../../types/location';
import { paginateList } from '../../../helpers/paginateList';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../../../graphql/queries';

const LocationsContainer: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { loading, data } = useQuery(GET_LOCATIONS);

  const itemsPerPage = 8;

  useEffect(() => {
    if (data && data.locations) {
      setLocations(data.locations.results);
    }
  }, [data]);

  const handlePageChange = useMemo(() => (page: number) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [setCurrentPage]);

  const locationsToShow = useMemo(() => paginateList(currentPage, itemsPerPage, locations), [currentPage, locations, itemsPerPage]);

  return loading ? (
    <p className='loading'>Loading...</p>
  ) : (
    <div>
      <h1>Locations</h1>
      <LocationList locations={locationsToShow} />
      <Pagination
        currentPage={currentPage}
        totalItems={locations.length}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default LocationsContainer;
