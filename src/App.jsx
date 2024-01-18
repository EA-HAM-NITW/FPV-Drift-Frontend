import "./App.css";
import { useWS } from "./context/WebSocketContext";
import AddIcon from "@mui/icons-material/Add";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { useEffect } from "react";
import Leaderboard from "./componenets/Leaderboard";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  color: 'black'
};

function App() {
  
  const { leaderBoard, change } = useWS();
  const [admin, setAdmin] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleName = (e) => {
    setName(e.target.value);
  }
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
              onClick={
                //() =>change({ action: "add", name: leaderBoard.length + 1 })
                handleOpen    
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField placeholder="enter name" onChange={(e)=>{handleName(e)}} />
          <Button onClick={()=>change({ action: "add", name: name })}>Enter</Button>
        </Box>
      </Modal>
    </>
  );
}

export default App;
