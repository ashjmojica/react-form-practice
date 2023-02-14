import React from 'react';
import Pet from './Pet';

const PetsContainer = ({ pets }) => {

  const displayPets = pets.map(pet => (
    <Pet 
      name={pet.name}
      species={pet.species}
    />
  ))

  return (
    <div className="pets-container">
      <h1>Our Pets</h1>
      {displayPets}
    </div>
  )
}

export default PetsContainer;