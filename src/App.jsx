import "./App.css";
import { useWS } from "./context/WebSocketContext";
import AddIcon from "@mui/icons-material/Add";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useEffect } from "react";
import Leaderboard from "./componenets/Leaderboard";

function App() {
  const { leaderBoard, change } = useWS();
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    console.log(window.location.hash);
    if (window.location.hash == "#admin") {
      setAdmin(true);
    }
  }, []);
  return (
    <>
    <div className="banner">
      <h1 style={{ fontSize:'75px'}}>Leaderboard</h1>
    </div>
    
      <div style={{ display: "flex", justifyContent: "center"}}>
        
        {admin && (
          <div
            style={{
              display: "flex",
              width: "20vw",
              justifyContent: "center",
              margin: "1em",
              padding: "10px",
            }}
          >
            
            <IconButton
              onClick={() =>
                change({ action: "add", name: leaderBoard.length + 1 })
              }
            >
              <AddIcon
                style={{
                  fill: "white",
                }}
              />
            </IconButton>
            <IconButton onClick={() => change({ action: "delete" })}>
              <DeleteIcon
                style={{
                  fill: "white",
                }}
              />
            </IconButton>
          </div>
        )}
        <Leaderboard admin={admin} leaderBoard={leaderBoard} change={change} />
      </div>
    </>
  );
}

export default App;
