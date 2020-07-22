import React, { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";
// import { Winnerplayer } from "./Timer";

import Timer from "./Timer";
// {
//   console.log(Winnerplayer, "winner of game");
// }

const Game = () => {
  const [player1, setPlayer1] = useState("Player1");
  const [player2, setPlayer2] = useState("Player2");

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  console.log(xIsNext, "next value fnhajadan");

  const winner = calculateWinner(board);
  const handleClick = (i) => {
    const boardCopy = [...board];
    // If user click an occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    // Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const renderMoves = () => (
    <button
      className="start-btn"
      onClick={() => window.location.reload() && setBoard(Array(9).fill(null))}
    >
      Start Game
    </button>
  );
  return (
    <>
      <div className="box grid-col">
        <div>
          <p
            className={xIsNext ? "player-name" : ""}
            contenteditable="true"
            onChange={(e) => {
              setPlayer1(e.target.value);
            }}
          >
            {!winner
              ? player1
              : player1 && winner
              ? "Winner: " + winner
              : "Player1" + (xIsNext ? "X" : "O")}
            {xIsNext ? <Timer seconds={5} player="first" /> : null}
          </p>
        </div>
        {renderMoves()}
        <div>
          <p
            className={xIsNext ? "" : "player-name"}
            contenteditable="true"
            onChange={(e) => {
              setPlayer2(e.target.value);
            }}
            placeholder="Enter Player2"
          >
            {winner ? player2 : player2}
            {xIsNext ? null : <Timer seconds={5} player="second" />}
          </p>
        </div>
      </div>
      <Board squares={board} onClick={handleClick} />

      <div className="winner-name">
        {winner ? "Winner player: " + winner : "show winner"}
      </div>
    </>
  );
};

export default Game;
