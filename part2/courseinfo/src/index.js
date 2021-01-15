import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce((acc, cv) => {
    return acc += cv.exercises;
  }, 0)
  return (
    <p><b>total of {sum} exercises</b></p>
  )
}

const Part = (props) => {
  return (
    <li>
      {props.part.name} {props.part.exercises}
    </li>
  )
}

const Content = ({ course }) => {
  return (
    <>
      <ul>
        {course.parts.map((part) => (
          <Part key={part.id} part={part}/>
        ))}
      </ul>
      <Total course={course}/>
    </>
  )
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course}/>
      <Content course={course}/>
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return courses.map((course) => <Course key={course.id} course={course}/>);
}

ReactDOM.render(<App />, document.getElementById('root'))