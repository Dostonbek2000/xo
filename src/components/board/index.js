import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import { ModalContext } from "../../context/ModalContext";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";
import BoardCard from "./BoardCard";

const Board = () => {
  const { showModal, setModalMode } = useContext(ModalContext);

  const handleRestart = () => {
    showModal();
    setModalMode("start");
  };

  const { squares, winner, winnerLine, } =
    useContext(GameContext);

  

  return (
    <div className="board">
      <div className="board__body">
        {squares.map((sq, ix) => (
          <BoardCard
            key={ix}
            user={sq}
            index={ix}
            active={winner && winnerLine && winnerLine.includes(ix)}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
