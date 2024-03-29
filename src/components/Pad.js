import React from "react";
import { bank1 } from "./App";

/*pad component*/
function Pad({ handleClick, power, element, id }) {
  const backgroundStyle = power ? "orange" : "gray";
    
    
  return (
    <button
      data-tag={id}
      type="button"
      className="drum-pad"
      onClick={handleClick}
      id={bank1[element].name}
      disabled={!power}
      style={{ background: `${backgroundStyle}` }}
    >
      {element}
      <audio
        id={element}
        src={bank1[element].source}
        className="clip"
      ></audio>
    </button>
  );
}


export default Pad;
