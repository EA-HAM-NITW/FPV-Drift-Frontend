import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownon from "@mui/icons-material/KeyboardArrowDown";
import IconButton from "@mui/material/IconButton";
import { motion, AnimatePresence } from "framer-motion";
import "./Leaderboard.css";

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
            className={`leaderBoardItem ${i == 0 ? "leaderBoardFirst" : i == 1 ? "leaderBoardSecond" : i == 2 ? "leaderBoardThird" : ""}`}
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
                  disabled={i === 5}
                  onClick={() =>
                    change({ action: "move", name: x.name, dir: "down" })
                  }
                >
                  <KeyboardArrowDownon
                    style={{
                      fill: i === 6 ? "grey" : "white",
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
