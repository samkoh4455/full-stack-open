import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Find from './components/Find.js';
import Results from './components/Results.js';

function App() {

  const [ filter, setFilter ] = useState('');
  const [ countries, setCountries ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState('');

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }

  useEffect(hook, []);

  const handleFindChange = (event) => {
    setFilter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(filter);
  }

  const list = countries.filter((country) => {
    return country.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <Find filter={filter} handleFindChange={handleFindChange} handleSubmit={handleSubmit}/>
      <Results list={list}/>
    </>
  )
}

export default App;
