import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { motion, AnimatePresence } from "framer-motion";
import "./Leaderboard.css";
import { PlusOneRounded } from "@mui/icons-material";

export default function Leaderboard({ leaderBoard, admin, change }) {
  // bronze color rgb 205,127,50
  return (
    <div
      style={{
        width: "75vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        {leaderBoard.map((x, i) => (
          <motion.div
            layout
            layoutId={x.name}
            key={x.name}
            className={`leaderBoardItem ${
              i == 0
                ? "leaderBoardFirst"
                : i == 1
                ? "leaderBoardSecond"
                : i == 2
                ? "leaderBoardThird"
                : ""
            }`}
          >
            <div
              style={{
                backgroundColor: x.colour,
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                marginRight: "1vw",
              }}
            ></div>
            <p>{x.name}</p>
            <Typography marginLeft={"2em"}>{x.lap}</Typography>
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
                  disabled={i === 0}
                  onClick={() =>
                    change({ action: "move", name: x.name, dir: "up" })
                  }
                >
                  <KeyboardArrowUpIcon
                    style={{
                      fill: i === 0 ? "grey" : "white",
                    }}
                  />
                </IconButton>
                <IconButton
                  disabled={i === leaderBoard.length - 1}
                  onClick={() =>
                    change({ action: "move", name: x.name, dir: "down" })
                  }
                >
                  <KeyboardArrowDownon
                    style={{
                      fill: i === leaderBoard.length - 1 ? "grey" : "white",
                    }}
                  />
                </IconButton>
                <IconButton
                  onClick={() => {
                    change({ action: "lap", name: x.name });
                  }}
                >
                  <PlusOneRounded
                    style={{
                      fill: "white",
                    }}
                  />
                </IconButton>
              </div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
