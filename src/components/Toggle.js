import React, {useState} from "react";

function Toggle() {

 const [isOn, setIsOn] = useState(true);

 const handleClick = () => {
  setIsOn((isOn) => !isOn)
 }
  const rangi = isOn? 'red' : 'white';

 return(
  <button style={{ background: rangi }}  onClick ={handleClick}>{isOn? 'ON' : 'OFF'}</button>
 )
}

export default Toggle;
