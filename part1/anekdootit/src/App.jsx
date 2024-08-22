import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const indexOfMostVoted = votes.indexOf(maxVotes);
    return {
      anecdote: anecdotes[indexOfMostVoted],
      votes: maxVotes
    };
  };

  const mostVoted = getMostVotedAnecdote();

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Anecdote of the day</h1>
        <div className="card">
          <p className="anecdote">{anecdotes[selected]}</p>
          <p className="votes">has {votes[selected]} votes</p>
          <div className="button-group">
            <button className="button vote-button" onClick={handleVote}>Vote</button>
            <button className="button next-button" onClick={handleNextAnecdote}>Next anecdote</button>
          </div>
        </div>
      </div>
      
      <div className="container">
        <h1 className="title">Anecdote with most votes</h1>
        <div className="card">
          <p className="anecdote">{mostVoted.anecdote}</p>
          <p className="votes">has {mostVoted.votes} votes</p>
        </div>
      </div>
      
      <style jsx>{`
        .app {
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #6e8efb, #a777e3);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-sizing: border-box;
        }
        
        .container {
          width: 100%;
          max-width: 600px;
          margin-bottom: 40px;
        }
        
        .title {
          color: white;
          text-align: center;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          margin-bottom: 20px;
        }
        
        .card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 30px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border: 1px solid rgba(255, 255, 255, 0.18);
          transform: perspective(1000px) rotateX(5deg);
          transition: transform 0.3s ease;
        }
        
        .card:hover {
          transform: perspective(1000px) rotateX(0deg);
        }
        
        .anecdote {
          color: white;
          font-size: 18px;
          margin-bottom: 15px;
          line-height: 1.6;
        }
        
        .votes {
          color: #ffd700;
          font-weight: bold;
          margin-bottom: 20px;
        }
        
        .button-group {
          display: flex;
          justify-content: space-between;
        }
        
        .button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
        }
        
        .vote-button {
          background-color: #4CAF50;
        }
        
        .next-button {
          background-color: #3498db;
        }
        
        .button:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        
        .button:active {
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default App;