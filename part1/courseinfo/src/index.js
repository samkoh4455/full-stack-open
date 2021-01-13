import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => (
  <h1>{props.course}</h1>
);

const Content = (props) => (
  <>
    <p>{props.parts[0].name} {props.parts[0].es}</p>
    <p>{props.parts[1].name} {props.parts[1].es}</p>
    <p>{props.parts[2].name} {props.parts[2].es}</p>
  </>
);

const Total = ({parts}) => (
  <p>Number of exercises {parts[0].es + parts[1].es + parts[2].es}</p>
);


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        es: 10,
      },
      {
        name: 'Using props to pass data',
        es: 7,
      },
      {
        name: 'State of a component',
        es: 14,
      }
    ]
  };

  return (
    <>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));

