import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";
import { useState } from "react";

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

  const toggle = (e, index) => {
    if (lock || data[index] !== "") {
      return;
    }
    const newData = [...data];
    newData[index] = count % 2 === 0 ? "x" : "o";
    const source = count % 2 === 0 ? cross_icon : circle_icon;

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
        Tic Tac Toe Game in <span> React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={() => toggle(e, 0)}></div>
          <div className="boxes" onClick={() => toggle(e, 1)}></div>
          <div className="boxes" onClick={() => toggle(e, 2)}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={() => toggle(e, 3)}></div>
          <div className="boxes" onClick={() => toggle(e, 4)}></div>
          <div className="boxes" onClick={() => toggle(5)}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={() => toggle(6)}></div>
          <div className="boxes" onClick={() => toggle(7)}></div>
          <div className="boxes" onClick={() => toggle(8)}></div>
        </div>
      </div>
      {winner && (
        <div className="result">
          {winner === "draw" ? (
            <p>Its a draw!</p>
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
