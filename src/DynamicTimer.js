import React from "react";
import "./DynamicTimer.css";

const msToTime = ms => {
  //La fonction Math.floor(x) renvoie le plus grand entier qui est inférieur ou égal à un nombre x.
  const hours = Math.floor(ms / (1000 * 60 * 60));

  const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor(((ms % (1000 * 60 * 60)) % (1000 * 60)) / 1000);
  return (
    String(hours).padStart(2, "0") +
    ":" +
    String(minutes).padStart(2, "0") +
    ":" +
    String(seconds).padStart(2, "0")
  );
};

const DynamicTimer = ({ ms }) => {
  return (
    <div className="time">
      <div className="time-container">
        <div className="time-number">{msToTime(ms)}</div>
        <div className="time-text">
          <div className="time-text-item">Hour</div>
          <div className="time-text-item">Minute</div>
          <div className="time-text-item">Second</div>
        </div>
      </div>
    </div>
  );
};

export default DynamicTimer;
