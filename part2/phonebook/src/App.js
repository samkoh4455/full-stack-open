import React, { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import personServices from './services/person.js'



const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');

  useEffect(() => {
    personServices.getAll()
      .then(entries => {
        setPersons(entries)
      })
  }, [])

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (persons.findIndex((person) => newName === person.name) > -1) {
      window.alert(`${newName} is already added to phonebook`);
    } else {
      const newNameObj = {
        name: newName,
        number: newNumber
      }
      personServices.addPerson(newNameObj)
        .then(entry => {
          setPersons(persons.concat(entry));
          setNewName('');
          setNewNumber('');
        })
    }
  }

  const handleDeleteClick = id => {
    let name = persons.find(person => person.id === id).name
    let result = window.confirm(`Delete ${name}?`)
    if (result) {
      personServices.deletePerson(id)
        .then((res) => {
          setPersons(persons.filter(person => person.id !== id))
        })
    }
  }

  return (
    <>
      <h2>Phonebook</h2>
      <Filter
        filter={filter}
        handleFilterChange={handleFilterChange}
      />
      <h3>add a new contact</h3>
      <PersonForm
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
      />
      <h3>Numbers</h3>
      <Persons
        filteredPersons={filteredPersons}
        handleDeleteClick={handleDeleteClick}
      />
    </>
  )
}

export default App