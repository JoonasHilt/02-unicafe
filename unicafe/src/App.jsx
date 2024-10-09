import { useState } from "react";
import Header from "../src/components/Header";
import Statistic from "../src/components/Statistic";
import Button from "../src/components/Button";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodVote = () => {
    const setGoodVote = good + 1;
    setGood(setGoodVote);
  };

  const setNeutralVote = () => {
    const setNeutralVote = neutral + 1;
    setNeutral(setNeutralVote);
  };

  const setBadVote = () => {
    const setBadVote = bad + 1;
    setBad(setBadVote);
  };

  return (
    <>
      <Header />
      <Button handleClick={setGoodVote} text="Good" />
      <Button handleClick={setNeutralVote} text="Neutral" />
      <Button handleClick={setBadVote} text="Bad" />
      <Statistic good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
