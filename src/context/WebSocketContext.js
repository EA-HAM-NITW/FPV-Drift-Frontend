import { useContext } from "react";
import { createContext } from "react";

export const WebSocketContext = createContext(null);

export const useWS = () => useContext(WebSocketContext);

	
