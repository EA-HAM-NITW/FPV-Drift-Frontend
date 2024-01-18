import Participants from './Participants.jsx';
import './Leaderboard.css';
import React, { useState } from 'react';

const player1 = {
  title: "Heramb",
  points: 0,
};
const player2 = {
  title: "Rohit",
  points: 0,
};
const player3 = {
  title: "Virat",
  points: 0,
};
const player4 = {
  title: "Dhoni",
  points: 0,
};
const player5 = {
  title: "Jaddu",
  points: 0,
};

let players = [player1, player2, player3, player4, player5];

const Leaderboard = () => {
  const [sorted, setSorted] = useState(false);

  const updateAndSortScores = () => 
  {
    players[0].points="17";
    players[1].points="45";
    players[2].points="98";
    players[3].points="7";
    players[4].points="32";

    players.sort((a, b) => b.points - a.points);
    setSorted(true);
  };

  return (
    <div>
      {players.map((player) => (
        <Participants title={player.title} points={player.points} />
      ))}
      <button onClick={updateAndSortScores} className='update' >Update and Sort Scores</button>
    </div>
  );
};

export default Leaderboard;
