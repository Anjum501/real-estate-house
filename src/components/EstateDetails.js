// src/components/EstateDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const EstateDetails = () => {
  const { estateId } = useParams();
  const [estate, setEstate] = useState(null);

  useEffect(() => {
    // Fetch estate details based on estateId
    // setEstate(fetchedEstate);
  }, [estateId]);

  return (
    <div className="p-4">
      {estate ? (
        <>
          <img src={estate.image} alt={estate.estate_title} />
          <h1>{estate.estate_title}</h1>
          {/* Display other estate details */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EstateDetails;
