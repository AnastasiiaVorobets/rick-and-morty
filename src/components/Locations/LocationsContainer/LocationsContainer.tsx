import React, { useEffect, useState, useMemo } from 'react';
import LocationList from '../LocationList/LocationList';
import Pagination from '../../Shared/Pagination/Pagination';
import { Location } from '../../../types/location';
import { paginateList } from '../../../helpers/paginateList';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../../../graphql/queries';

const LocationsContainer: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const { loading, data } = useQuery(GET_LOCATIONS);

  useEffect(() => {
    if (data && data.locations) {
      setLocations(data.locations.results);
    }
  }, [data]);

  return loading ? (
    <p className='loading'>Loading...</p>
  ) : (
    <div>
      <h1>Locations</h1>
      <LocationList locations={locations} />
    </div>
  );
};

export default LocationsContainer;
