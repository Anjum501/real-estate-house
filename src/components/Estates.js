// src/components/Estates.js
import React, { useState, useEffect } from 'react';
import EstateCard from './EstateCard';

const Estates = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    // Fetch estates data from a JSON file or an API
    // setEstates(fetchedEstates);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {estates.map(estate => (
        <EstateCard key={estate.id} estate={estate} />
      ))}
    </div>
  );
};

export default Estates;
