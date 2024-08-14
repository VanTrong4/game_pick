import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import TimeCaculate from "./TimeCaculate";

const HandleGame = () => {
  const [game, dispatch] = useContext(GameContext);

  const changePoint = (e) => {
    dispatch({ type: "CHANGE_POINTS", payload: e.target.validity.valid ? Number(e.target.value) : game.points });
  };

  const btnClick = (e) => {
    e.preventDefault();
    if (game.points === 0) return;

    if (!game.isStart) {
      dispatch({ type: "START" });
    } else {
      dispatch({ type: "RESTART" });
    }
  };

  return (
    <>
      <h1>{game.win ? <span className="win">ALL CLEARED</span> : game.win === false ? <span className="fail">GAME OVER</span> : "LET'S PLAY"}</h1>

      <div className="game__wrap-line">
        <div className="txt">Points:</div>
        <input type="text" name="point" pattern="[0-9]*" value={game.points} onChange={changePoint} />
      </div>

      <div className="game__wrap-line time">
        <div className="txt">Time:</div>
        <TimeCaculate />
      </div>

      <button onClick={btnClick}>{game.isStart ? "Restart" : "play"}</button>
    </>
  );
};

export default HandleGame;
