import React from 'react';

const Pet = ({ name, species }) => {
  return (
    <div className="pet-card">
      <h2>{name}</h2>
      <p>{species}</p>
    </div>
  )
}

export default Pet;