import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Heading = (props) => <h1>{props.title}</h1>;

const Results = ({rating, votes}) => <p>{rating}: {votes}</p>;

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  )
}

const App = () => {

  const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0});

  const handleGoodClick = () => {
    setFeedback({...feedback, good: feedback.good + 1 })
  }

  const handleNeutralClick = () => {
    setFeedback({...feedback, neutral: feedback.neutral + 1})
  }

  const handleBadClick = () => {
    setFeedback({...feedback, bad: feedback.bad + 1})
  }

  return (
    <div>
      <Heading title="give feedback"/>
      <Button handleClick={() => handleGoodClick()} text="good"/>
      <Button handleClick={() => handleNeutralClick()} text="neutral"/>
      <Button handleClick={() => handleBadClick()} text="bad"/>
      <Heading title="statistics"/>
      <Results rating="good" votes={feedback.good}/>
      <Results rating="neutral" votes={feedback.neutral}/>
      <Results rating="bad" votes={feedback.bad}/>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


