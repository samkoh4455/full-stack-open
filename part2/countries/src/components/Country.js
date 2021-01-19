import React from 'react';

const Country = ({name, languages, flag}) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {languages.map(language => (<li key={language.iso639_2}>{language.name}</li>))}
      </ul>
    </div>
  )
}

export default Country;