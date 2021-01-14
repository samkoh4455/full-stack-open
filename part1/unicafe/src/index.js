import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const Heading = (props) => <h1>{props.title}</h1>;

const Results = ({name, value}) => <p>{name}: {value}</p>;

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

  const total = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  }

  const average = () => {
    if (total()) {
      return (feedback.good - feedback.bad) / total();
    } else {
      return 0;
    }

  }

  const positive = () => {
    if (total()) {
      return feedback.good / total();
    } else {
      return "";
    }

  }

  return (
    <div>
      <Heading title="give feedback"/>
      <Button handleClick={() => handleGoodClick()} text="good"/>
      <Button handleClick={() => handleNeutralClick()} text="neutral"/>
      <Button handleClick={() => handleBadClick()} text="bad"/>
      <Heading title="statistics"/>
      <Results name="good" value={feedback.good}/>
      <Results name="neutral" value={feedback.neutral}/>
      <Results name="bad" value={feedback.bad}/>
      <Results name="total" value={total()}/>
      <Results name="average" value={average()} />
      <p>positive: {positive()} %</p>
    </div>
  )
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);


