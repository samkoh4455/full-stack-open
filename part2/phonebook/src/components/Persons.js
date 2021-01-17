import React from 'react';
import Person from './Person.js';

const Persons = ({filteredPersons}) => {
  return (
    <ul>
      {filteredPersons.map((person) => {
        return (
          <Person key={person.name} person={person}/>
        )
      })}
    </ul>
  )
}

export default Persons;