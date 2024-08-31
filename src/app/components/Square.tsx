import React from "react";

const Square = ({
  value,
  onSquareClick,
}: {
  value: any;
  onSquareClick: any;
}) => {
  return (
    <button
      onClick={onSquareClick}
      className="w-16 h-16 text-black text-4xl border border-black font-bold bg-white"
    >
      {value}
    </button>
  );
};

export default Square;
