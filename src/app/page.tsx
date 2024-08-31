"use client";
import { calculateWinner } from "@/utils/calculateSqure";
import Square from "./components/Square";
import { useState } from "react";

export default function Home() {
  const [xNext, setXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  const handleClick = (i: number) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXNext(!xNext);
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xNext ? "X" : "O");
  }

  const handleRestart = () => {
    setXNext(true);
    setSquares(Array(9).fill(null));
    calculateWinner([0]);
  };

  console.log("calculate", calculateWinner(squares));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-white shadow-xl w-auto p-10 border border-black-500 relative">
        <div
          className={`text-black text-center  pb-7 ${
            winner && "text-green-500"
          }`}
        >
          {status}
        </div>
        {winner && (
          <span
            onClick={() => handleRestart()}
            className=" cursor-pointer absolute top-2 right-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#17ac86"
              width="30px"
              height="30px"
              viewBox="0 0 1920 1920"
            >
              <path
                d="M960 0v213.333c411.627 0 746.667 334.934 746.667 746.667S1371.627 1706.667 960 1706.667 213.333 1371.733 213.333 960c0-197.013 78.4-382.507 213.334-520.747v254.08H640V106.667H53.333V320h191.04C88.64 494.08 0 720.96 0 960c0 529.28 430.613 960 960 960s960-430.72 960-960S1489.387 0 960 0"
                fill-rule="evenodd"
              />
            </svg>
          </span>
        )}
        <div className="flex">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </main>
  );
}
