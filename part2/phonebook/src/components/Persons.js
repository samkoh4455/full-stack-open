import React from 'react';
import Person from './Person.js';

const Persons = ({filteredPersons, handleDeleteClick}) => {
  return (
    <ul>
      {filteredPersons.map((person) => {
        return (
          <Person
            key={person.name}
            person={person}
            handleDeleteClick={() => handleDeleteClick(person.id)}
          />
        )
      })}
    </ul>
  )
}

export default Persons;