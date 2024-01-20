import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Alert from "@mui/material/Alert";

import { TextField } from "@mui/material";

const colours = ["#FF0000", "#FFA500", "#FFFF00", "#008000", "#00eeffp"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function AdminModal({ open, change, handleClose, leaderBoard }) {
  const [name, setName] = useState("");
  const [alert, setAlert] = useState(false);
  const [colour, setColour] = useState(
    colours.filter(
      (colour) => !leaderBoard.map((x) => x.colour).includes(colour)
    )[0]
  );

  const handleSubmit = () => {
    console.log(name, leaderBoard.map((x) => x.name).includes(name));
    if (name === "") return setAlert("Name cannot be empty");
    if (leaderBoard.map((x) => x.name).includes(name))
      return setAlert("Name taken");
    change({ action: "add", name: name, colour: colour });
    setColour(
      colours.filter(
        (x) => !leaderBoard.map((x) => x.colour).includes(x) && x !== colour
      )[0]
    );
    setAlert(false);
    handleClose();
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {leaderBoard.length >= 5 ? (
          <Alert severity={"error"}> Max 5 players </Alert>
        ) : (
          <>
            {alert && <Alert severity={"error"}> {alert} </Alert>}
            <Box
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Box margin={"1em"}>
                <InputLabel id="name-select-label">Name</InputLabel>
                <TextField
                  placeholder="Name"
                  onChange={(e) => {
                    handleName(e);
                  }}
                />
              </Box>
              <Box margin={"1em"}>
                <InputLabel id="colour-select-label">Colour</InputLabel>
                <Select
                  labelId="colour-select-label"
                  id="colour-select"
                  value={colour}
                  label="Colour"
                  onChange={(e) => setColour(e.target.value)}
                >
                  {colours
                    .filter(
                      (colour) =>
                        !leaderBoard.map((x) => x.colour).includes(colour)
                    )
                    .map((colour) => (
                      <MenuItem key={colour} value={colour}>
                        <div
                          style={{
                            backgroundColor: colour,
                            width: "20px",
                            height: "20px",
                          }}
                        ></div>
                      </MenuItem>
                    ))}
                </Select>
              </Box>
            </Box>
            <Button onClick={handleSubmit}>Enter</Button>
          </>
        )}
      </Box>
    </Modal>
  );
}
