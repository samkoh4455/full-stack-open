import React, {useState} from 'react';
import ReactDOM from 'react-dom';



const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(props.anecdotes.length));
  const [maxIdx, setMaxIdx] = useState(0);

  const handleRandomClick = () => {
    let idx = Math.floor(Math.random() * (props.anecdotes.length - 1));
    if (idx >= selected) {
      idx++;
    }
    // console.log('selected: ', selected, 'idx: ', idx);
    setSelected(idx);
  }

  const handleVoteClick = () => {
    let copyVotes = [...votes];
    copyVotes[selected]++;
    if (selected !== maxIdx && copyVotes[selected] > copyVotes[maxIdx]) {
      setMaxIdx(selected);
    }
    setVotes(copyVotes);
  }

  return (
    <div>
      <button onClick={handleRandomClick}>
        random
      </button>
      <button onClick={handleVoteClick}>
        vote
      </button>
      <p>
        {props.anecdotes[selected]}
      </p>
      <p>
        has {votes[selected]} votes
      </p>
      <h3>Anecdote with most votes: </h3>
      <p>
        {props.anecdotes[maxIdx]}
      </p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));