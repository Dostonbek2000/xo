import { useContext } from "react";
import Board from "./components/board";
import Modal from "./components/modal";
import { GameContext } from "./context/GameContex";
import Logo from './assets/logo.png'
function App() {
  const { handleReset } = useContext(GameContext);
  return (
    <div className="App">
      <div className="logo-this">
      <img onClick={handleReset} src={Logo} alt="" />
      <div className="container">
         <Board />
      </div>
      </div>
      <Modal />
    </div>
  );
}

export default App;
