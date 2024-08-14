import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";

const TimeCaculate = () => {
  const [time, setTime] = useState(0);
  const [game, dispatch] = useContext(GameContext);

  useEffect(() => {
    let interval = null;
    if (typeof game.win === "boolean") {
      dispatch({ type: "UPDATE_TIME", payload: time });
      return () => clearInterval(interval);
    }

    setTime(0);

    if (game.isStart) {
      interval = setInterval(() => {
        setTime((prev) => Math.round((prev + 0.1) * 10) / 10);
      }, 100);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [game.isStart, game.reset, game.win]);

  return <span>{time.toFixed(1)}s</span>;
};

export default TimeCaculate;
