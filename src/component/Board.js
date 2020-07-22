import React from "react";
import Square from "./Square";
const Board = ({ squares, onClick }) => (
  <div className="square-box">
    {squares.map((square, i) => {
      return <Square key={i} value={square} onClick={() => onClick(i)} />;
    })}
  </div>
);

export default Board;
