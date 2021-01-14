import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Heading = (props) => <h1>{props.title}</h1>;

const Button = (props) => {
  return (
    <button
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  )
}

const Statistic = (props) => (<p>{props.text}: {props.value} {props.unit}</p>);

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad;
  if (!total) {
    return (<p>No feedback given</p>)
  }
  let average = (good - bad) / total;
  let positive = good / total;

  return (
    <>
      <Statistic text="good" value={good} unit=""/>
      <Statistic text="neutral" value={neutral} unit=""/>
      <Statistic text="bad" value={bad} unit=""/>
      <Statistic text="all" value={total} unit=""/>
      <Statistic text="average" value={average} unit=""/>
      <Statistic text="positive" value={positive} unit="%"/>
    </>
  )
}

const App = () => {

  const [feedback, setFeedback] = useState(
    {
      good: 0,
      neutral: 0,
      bad: 0,
    });

  const handleGoodClick = () => {
    setFeedback({...feedback, good: feedback.good + 1})
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
      <Statistics good={feedback.good} neutral={feedback.neutral} bad={feedback.bad} />
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


