import React from "react";
const Square = ({ value, onClick }) => {
  return (
    <>
      <button className="btn" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
