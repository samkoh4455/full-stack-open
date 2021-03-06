import React, { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import personServices from './services/person.js'
import Notification from './components/Notification.js'



const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filter, setFilter ] = useState('');
  const [ notification, setNotification ] = useState({message: null, isError: false});

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
    let idx = persons.findIndex((person) => newName.toLowerCase() === person.name.toLowerCase())
    if (idx > -1) {
      if (newNumber === persons[idx].number) {
        window.alert(`${newName} is already added to phonebook`);
      } else {
        const id = persons[idx].id;
        const msg = 'is already added to the phonebook, replace the old number with a new one?';
        const result = window.confirm(`${persons[idx].name} ${msg}`);
        if (result) {
          const updateObj = { ...persons[idx], number: newNumber}
          personServices.updatePerson(persons[idx].id, updateObj)
            .then(updatedPerson => {
              setPersons(persons.map(person => person.id !== id ? person : updatedPerson))
              successNotification(`Updated ${updatedPerson.name}`)
            })
            .catch(err => {
              errorNotification(`Information of ${persons[idx].name} has already been removed from server`)
            })
        }
      }
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
          successNotification(`Added ${newNameObj.name}`)
        })
    }
  }

  const successNotification = msg => {
    setNotification({message: msg, isError: false});
    setTimeout(() => {
      setNotification({message: null, isError: false});
    }, 3000)
  }

  const errorNotification = err => {
    setNotification({message: err, isError: true});
    setTimeout(() => {
      setNotification({message: null, isError: true});
    }, 5000)
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
      <Notification message={notification.message} isError={notification.isError}/>
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