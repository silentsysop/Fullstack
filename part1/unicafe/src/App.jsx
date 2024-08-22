import React, { useState } from 'react';

const Button = ({ onClick, text }) => (
  <button className="feedback-button" onClick={onClick}>{text}</button>
);

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total ? ((good - bad) / total).toFixed(1) : 0;
  const positive = total ? (good / total * 100).toFixed(1) + ' %' : '0 %';

  if (total === 0) {
    return <p className="no-feedback">No feedback given</p>;
  }

  return (
    <div className="statistics-container">
      <table className="statistics-table">
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average} />
          <StatisticLine text="Positive" value={positive} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div className="app-container">
      <div className="feedback-section">
        <h1>Give Feedback</h1>
        <div className="button-container">
          <Button onClick={handleGood} text="Good" />
          <Button onClick={handleNeutral} text="Neutral" />
          <Button onClick={handleBad} text="Bad" />
        </div>
      </div>
      <div className="statistics-section">
        <h1>Statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

const styles = `
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .app-container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    width: 80%;
    max-width: 600px;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  h1 {
    color: #ffffff;
    text-align: center;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }

  .feedback-section, .statistics-section {
    transform: translateZ(20px);
    transition: transform 0.3s ease;
  }

  .feedback-section:hover, .statistics-section:hover {
    transform: translateZ(30px) scale(1.05);
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
  }

  .feedback-button {
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    border: none;
    color: white;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .feedback-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 8px rgba(0,0,0,0.15);
  }

  .statistics-container {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    padding: 1rem;
    box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1);
  }

  .statistics-table {
    width: 100%;
    color: #ffffff;
    border-collapse: separate;
    border-spacing: 0 10px;
  }

  .statistics-table td {
    padding: 8px;
    text-align: left;
    background: rgba(255, 255, 255, 0.1);
    transition: transform 0.3s ease;
  }

  .statistics-table tr:hover td {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.2);
  }

  .no-feedback {
    color: #ffffff;
    text-align: center;
    font-style: italic;
  }
`;

export default () => (
  <>
    <style>{styles}</style>
    <App />
  </>
);