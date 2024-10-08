import React, { useState } from "react";

const Anecdote = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // Tilat: valittu anekdootti ja anekdoottien äänet
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0)); // Alustetaan taulukko nollilla

  // Funktio satunnaisen anekdootin valintaan
  const handleNextAnecdote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);
    setSelected(randomIndex);
  };

  // Funktio äänestämiseen
  const handleVote = () => {
    const copy = [...points]; // Kopioidaan nykyinen äänitaulukko
    copy[selected] += 1; // Lisätään ääni valitulle anekdootille
    setPoints(copy); // Päivitetään tila uudella taulukolla
  };

  // Etsi eniten ääniä saanut anekdootti
  const mostVotesIndex = points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleNextAnecdote}>next anecdote</button>

      {/* Näytetään anekdootti, jolla on eniten ääniä */}
      <h1>Anecdote with most votes</h1>
      {points[mostVotesIndex] === 0 ? (
        <p>No votes yet</p>
      ) : (
        <div>
          <p>{anecdotes[mostVotesIndex]}</p>
          <p>has {points[mostVotesIndex]} votes</p>
        </div>
      )}
    </div>
  );
};

export default Anecdote;
