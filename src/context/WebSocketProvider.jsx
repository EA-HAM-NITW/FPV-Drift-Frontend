import { useEffect, useState } from "react";
import useWebSocket from "react-use-websocket";
import { WebSocketContext } from "./WebSocketContext";

const WebSocketProvider = ({ url, children }) => {
  const { sendMessage, lastMessage } = useWebSocket(url, {
    retryOnError: true,
    reconnectAttempts: 10,
    reconnectInterval: 3000,
  });
  const [leaderBoard, setLeaderBoard] = useState([]);
  useEffect(() => {
    if (!lastMessage) return;
    const message = lastMessage.data.toString();
    const data = JSON.parse(message);
    if (data.action === "update") {
      setLeaderBoard(data.leaderBoard);
    }
  }, [lastMessage]);

  function change({ action, name, dir }) {
    const constLeaderBoard = [...leaderBoard];
    if (action === "move") {
      const index = constLeaderBoard.findIndex((item) => item.name === name);
      // swap the item position based on dir
      if (index === 0 && dir === "up") return;
      if (index === constLeaderBoard.length - 1 && dir === "down") return;
      const dirIndex = dir === "up" ? -1 : 1;
      const temp = constLeaderBoard[index];
      constLeaderBoard[index] = constLeaderBoard[index + dirIndex];
      constLeaderBoard[index + dirIndex] = temp;
      setLeaderBoard(constLeaderBoard);
      sendMessage(
        JSON.stringify({ action: "update", leaderBoard: constLeaderBoard })
      );
    } else if (action === "add") {
      console.log(name);
      constLeaderBoard.push({ name });
      sendMessage(
        JSON.stringify({ action: "update", leaderBoard: constLeaderBoard })
      );

      setLeaderBoard(constLeaderBoard);
    } else if (action === "delete") {
      setLeaderBoard([]);
      sendMessage(JSON.stringify({ action: "update", leaderBoard: [] }));
    }
  }
  return (
    <WebSocketContext.Provider value={{ leaderBoard, change }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export { WebSocketProvider };
