// Drum.js

import React from "react";

function Drum({ letter, sound, img, className }) {
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  return (
    <div className={className} onClick={playSound}>
      <img src={img} alt={`Drum ${letter}`} />
      <span>{letter}</span>
    </div>
  );
}

export default Drum;
