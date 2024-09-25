import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [vote, setAll] = useState(0);

  const setGoodVote = (goodVote) => {
    console.log("good value is now", goodVote);
    setGood(goodVote);
  };

  const setNeutralVote = (neutralVote) => {
    console.log("neutral value is now", neutralVote);
    setNeutral(neutralVote);
  };

  const setBadVote = (badVote) => {
    console.log("bad vote value is now", badVote);
    setBad(badVote);
  };

  const total = good + neutral + bad;
  const average = total > 0 ? (good - bad) / total : 0;
  const positive = total > 0 ? (good / total) * 100 : 0;

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button handleClick={() => setGoodVote(good + 1)} text="Good" />
      <Button handleClick={() => setNeutralVote(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setBadVote(bad + 1)} text="Bad" />

      <h1>Statistics!</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All votes: {total}</p>
      <p>Average score is: {average}</p>
      <p>Positive score is: {positive} %</p>
    </div>
  );
};

export default App;
