import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef('');
  const [enterPlayerName , setEnterPlayerName] = useState('');
 
  function handleClick(){
    setEnterPlayerName(playerName.current.value);
    playerName.current.value = '';

  }
  return (
    <section id="player">
      <h2>Welcome {playerName ? enterPlayerName : 'unknown entity' }</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
} 
