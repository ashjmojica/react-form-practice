import React, { useState } from 'react';

const NewPet = ({ setPets }) => {

  // TODO 1. Create state to hold your form data, whether individual states (name, species) or an object ({ name: '', species: '' })
const [myData, setMyData] = useState({
  species: '' , 
  name: ''
})

  // TODO 2. Wire up your input elements - when you type in the input, it needs to trigger a function to set your state. Remember to add a `value` property that lines up with your state.
const handleChange = (e) => {
  setMyData({
    ...myData,
    [e.target.name]: e.target.value,
  });
}


  // TODO 3. Wire up the form element with a function to handle submitting the form. This function will need to send a POST request, AND add your new object to the array of Pets (from App.js) - how can we get access to that setter function from here? How do we add to an array non-destructively?
const handleSubmit = (e) => {
  e.preventDefault();

  fetch('http://localhost:8004/pets', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'
  },
  body: JSON.stringify(myData)
})
.then(response => response.json())
.then(data => setPets(list => [...list, data]))
}





  return (
    <div className="form-container">
      <h1>Add Your Pet</h1>
      <form className="pet-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={myData.name}
        />
        <input 
          type="text" 
          placeholder="Species" 
          name="species"
          onChange={handleChange}
          value={myData.species}
        />

        <input type="submit" value="Add your pet" className="btn" />
      </form>
    </div>
  )

}

export default NewPet;