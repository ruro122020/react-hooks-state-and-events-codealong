import React, {useState} from "react";

function Toggle() {
  const [toggle, setToggle] = useState(false)
  function handleClick(){
    setToggle((toggle => !toggle))
  }
  const color = toggle ? 'red':'white'
  return <button style={{background: color}}onClick={handleClick}>{toggle ? "ON":"OFF"}</button>;
}

export default Toggle;
