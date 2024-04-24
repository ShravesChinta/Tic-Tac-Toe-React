import React, { useState } from "react";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";
import "./TicTacToe.css";

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winner, setWinner] = useState("");

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
    setWinner("");
  };

  const toggle = (index) => {
    if (lock || data[index] !== "") {
      return;
    }
    const newData = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    setCount(count + 1);
    setLock(true);
    setTimeout(() => {
      setLock(false);
      setData(newData);
      checkWin(newData);
    }, 1000);
  };

  const checkWin = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        setLock(true);
        return;
      }
    }
    if (count === 8) {
      setWinner("draw");
      setLock(true);
    }
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={() => toggle(0)}>
            {data[0] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[0] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
          <div className="boxes" onClick={() => toggle(1)}>
            {data[1] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[1] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
          <div className="boxes" onClick={() => toggle(2)}>
            {data[2] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[2] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={() => toggle(3)}>
            {data[3] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[3] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
          <div className="boxes" onClick={() => toggle(4)}>
            {data[4] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[4] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
          <div className="boxes" onClick={() => toggle(5)}>
            {data[5] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[5] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={() => toggle(6)}>
            {data[6] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[6] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
          <div className="boxes" onClick={() => toggle(7)}>
            {data[7] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[7] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
          <div className="boxes" onClick={() => toggle(8)}>
            {data[8] === "x" && <img src={cross_icon} alt="Cross" />}
            {data[8] === "o" && <img src={circle_icon} alt="Circle" />}
          </div>
        </div>
      </div>
      {winner && (
        <div className="result">
          {winner === "draw" ? (
            <p>It's a draw!</p>
          ) : (
            <p>{winner.toUpperCase()} wins!</p>
          )}
        </div>
      )}
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
    </div>
  );
};

export default TicTacToe;
