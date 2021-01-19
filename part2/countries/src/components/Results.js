import React from 'react';
import Country from './Country.js';

const Results = ({list}) => {
  if (list.length > 10) {
    return (<div>Too many matches, specify another filter</div>)
  } else if (list.length > 1) {
    return (
      <div>
        {list.map((country) => (<div key={country.alpha3Code}>{country.name}</div>))}
      </div>
    );
  } else if (list.length === 1) {
    return (
      <Country
        name={list[0].name}
        languages={list[0].languages}
        flag={list[0].flag}
      />
    );
  } else {
    return (<div>No matches</div>)
  }
}

export default Results;