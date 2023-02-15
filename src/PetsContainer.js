import React from 'react';
import Pet from './Pet';
import { useState } from 'react';


const PetsContainer = ({ pets }) => {
  const [ isClicked, setIsClicked ] = useState(false)

  const displayPets = pets.map(pet => (
    <Pet 
      name={pet.name}
      species={pet.species}
    />
  ))

function handleClick() {
  setIsClicked(isClicked => !isClicked)
}

  return (
    <div className={isClicked? "active" : "pets-container"} onClick={handleClick}>
      <h1>Our Pets</h1>
      {displayPets}
    </div>
  )
}

export default PetsContainer;