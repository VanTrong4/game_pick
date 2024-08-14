import { createContext, useReducer } from "react";
import { initState, reducer } from "../reducer/myReducer";

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {

    const [game, dispatch] = useReducer(reducer, initState);
    
    return (
        <GameContext.Provider value={[game, dispatch]}>
            {children}
        </GameContext.Provider>
    )
};
