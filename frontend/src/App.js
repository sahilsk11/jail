import React, { useState } from 'react';
import "./App.css";
const bonkFile = require("./bonk1.mp3");

function App() {
  const [batDown, updateBatState] = useState(true);
  const bonk = () => {
    if (batDown) {
      const audio = new Audio(bonkFile);
      audio.play();
    }

    updateBatState(!batDown);
  }
  const batClass = batDown ? "bat" : "bat-down";
  return (
    <div className="frame" onClick={() => bonk()}>
      <Message batDown={batDown}/>
      <img className={batClass} src="./bat1.png" />
      <img src="./doggo.png" className="doggo" />
      <img src="./bonker.png" className="bonker" />
    </div>
  );
}

function Message({ batDown }) {
  if (!batDown) {
    return <p className="message">go to horny jail</p>
  }
  return null;
}

export default App;
