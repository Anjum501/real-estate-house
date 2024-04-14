// src/components/EstateCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const EstateCard = ({ estate }) => {
  return (
    <div className="border p-4 rounded">
      <img src={estate.image} alt={estate.estate_title} />
      <h3>{estate.estate_title}</h3>
      <p>{estate.description}</p>
      <Link to={`/estates/${estate.id}`}>View Property</Link>
    </div>
  );
};

export default EstateCard;
