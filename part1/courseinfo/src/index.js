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
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const content = [
    {
      part: 1,
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      part: 2,
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      part: 3,
      name: 'State of a component',
      exercises: 14,
    },
  ];


  return (
    <>
      <Header course={course}/>
      {content.map((val) => {
        return (<Content key={val.part} name={val.name} exercises={val.exercises}/>)
        // return (<Content name={val.name} exercises={val.exercises}/>)
      })}
      <Total total={content.reduce((acc, cv) => {
        return acc + cv.exercises;
      }, 0)}/>
    </>
  )
};


ReactDOM.render(<App />, document.getElementById('root'));

