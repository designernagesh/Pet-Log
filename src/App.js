import { useState } from 'react';
import './App.css';
import PetForm from './components/PetForm';

const App = () => {
  let formData = [];
  const [ details, setDetails ] = useState({
    "petType": "",
    "petName": "",
    "ownerName": "",
    "illness": "",
  });

  const addPetHandler = (e) => {
    e.preventDefault();
    formData.push(details);
    let newData = [...formData];
    console.log(newData);
    setDetails({
      "petType": "",
      "petName": "",
      "ownerName": "",
      "illness": "",
    });
  }
  
  const changeHandler = (e) => {
    setDetails((prev) => {
      return { ...prev, [e.target.name] : e.target.value };
    })
  }
  return (
    <>
      <h1>Pet Log</h1>
      <PetForm details={details} changeHandler={changeHandler} addPetHandler={addPetHandler} />
    </>
  );
}

export default App;
