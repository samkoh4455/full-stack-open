import React from 'react';


const Find = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      find countries
      <input
        value={props.filter}
        onChange={props.handleFindChange}
      />
    </form>
  )
}

export default Find;