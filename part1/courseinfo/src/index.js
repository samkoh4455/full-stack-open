import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course}</h1>
);

const Content = (props) => (
  <p>{props.name} {props.exercises}</p>
);

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
);


const App = () => {
  const course = 'Half Stack application development'

  const part1 = {
    name: 'Fundamentals of React',
    es: 10,
  };

  const part2 = {
    name: 'Using props to pass data',
    es: 7,
  };

  const part3 = {
    name: 'State of a component',
    es: 14,
  };


  return (
    <>
      <Header course={course}/>
      <Content name={part1.name} exercises={part1.es}/>
      <Content name={part2.name} exercises={part2.es}/>
      <Content name={part3.name} exercises={part3.es}/>
      <Total total={part1.es + part2.es + part3.es}/>
    </>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));

