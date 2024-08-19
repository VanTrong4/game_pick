import React, { useContext, useEffect, useRef, useState } from "react";
import { GameContext } from "../context/GameContext";

const AreaGame = () => {
  const [points, setPoints] = useState([]);
  const [game, dispatch] = useContext(GameContext);
  const area = useRef(null);
  const timeout = useRef([]);

  useEffect(() => {
    removeTimeout();
    setPoints([...Array(game.points)].map((ele, idx) => ({ index: idx + 1, posX: getRandomPos(area.current.offsetWidth - 50), posY: getRandomPos(area.current.offsetHeight - 50) })));
    return () => {
      removeTimeout();
    };
  }, [game.isStart, game.reset]);

  const getRandomPos = (dimensionDir) => {
    return Math.floor(Math.random() * dimensionDir) + "px";
  };

  const removeTimeout = () => {
    timeout.current.forEach((ele) => clearTimeout(ele));
    timeout.current = [];
  };

  const removePoint = (e, idx) => {
    if (idx === game.nextPoint && game.win === null) {
      e.target.classList.add("active");
      const timeoutId = setTimeout(() => {
        setPoints((prev) => prev.filter((element) => idx !== element.index));
        if (idx === game.points) {
          dispatch({ type: "WIN" });
        }
      }, 1000);
      timeout.current.push(timeoutId);

      dispatch({ type: "INCREASE_NEXT_POINT", payload: idx + 1 });
    } else {
      dispatch({ type: "LOSE" });
    }
  };

  return (
    <div className="game__wrap-area" ref={area}>
      {points.length > 0 &&
        points.map((ele) => (
          <div key={ele.posX + "-" + ele.posY} onClick={(e) => removePoint(e, ele.index)} className="cir" style={{ "--x": ele.posX, "--y": ele.posY, zIndex: -ele.index }}>
            {ele.index}
          </div>
        ))}
    </div>
  );
};

export default AreaGame;
