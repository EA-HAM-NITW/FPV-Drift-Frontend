import "./App.css";
import { useWS } from "./context/WebSocketContext";
import AddIcon from "@mui/icons-material/Add";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useEffect } from "react";
import xurl from "./assets/fpv_temp.jpg";

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
        {leaderBoard.map((x) => (
          <div
            key={x.name}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.1)",
              padding: "10px",
              borderRadius: "5px",
              margin: "1em",
              width: "20vw",
            }}
          >
            <p>{x.name}</p>
            {admin && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifySelf: "flex-end",
                  marginLeft: "5vw",
                }}
              >
                <IconButton
                  onClick={() =>
                    change({ action: "move", name: x.name, dir: "up" })
                  }
                >
                  <KeyboardArrowUpIcon
                    style={{
                      fill: "white",
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() =>
                    change({ action: "move", name: x.name, dir: "down" })
                  }
                >
                  <KeyboardArrowDownon
                    style={{
                      fill: "white",
                    }}
                  />
                </IconButton>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
