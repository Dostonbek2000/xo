import React, { useContext } from "react";

import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Start = () => {
  const { activeUser, setActiveUser, handleStart } = useContext(GameContext);

  return (
    <div className="start">
      <div className="start__header">
        <Xicon />
        <Oicon />
      </div>
    </div>
  );
};

export default Start;
