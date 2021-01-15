import React from 'react';

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


export default Course;