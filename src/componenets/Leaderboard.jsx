import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";

export default function Leaderboard({ leaderBoard, admin, change }) {
  return leaderBoard.map((x) => (
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
            onClick={() => change({ action: "move", name: x.name, dir: "up" })}
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
  ));
}
