import React from 'react';
import Leaderboard from './Leaderboard';
import './App.css'; 

function App() {
  return (
    <div className="outer">
      <div className="background">
        <h1 className="upper">LEADERBOARD</h1>
        <Leaderboard />
      </div>
    </div>
  );
}

export default App;
