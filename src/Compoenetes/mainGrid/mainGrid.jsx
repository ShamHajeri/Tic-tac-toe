import React, { useState } from 'react';
import './mainGrid.css';
import cross from '../Assert/x.png';
import round from '../Assert/o.png'

let data = ["", "", "", "", "", "", "", "", ""];
const MainGrid = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);

  const toggle = (e, num) => {

    if (lock) {
      return 0;
    }

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num] = "x";
      setCount(++count);
    }
    else {
      e.target.innerHTML = `<img src='${round}'>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  }

  const checkWin=()=>{
    if (data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
      won(data);
    }
   else if (data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
      won(data);
    }
   else if (data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
      won(data);
    }
   else if (data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
      won(data);
    }
   else if (data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
      won(data);
    }
    else if (data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
      won(data);
    }
   else if (data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
      won(data);
    }
    else  if (data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
      won(data);
    }
    else  if (data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
      won(data);
    }
  }
 
  const won=(winner)=>{
    setLock(true);
  }

  return (

    <div class='grid'>
      <div class="box b1" onClick={(e) => { toggle(e, 0) }}></div>
      <div class="box b1" onClick={(e) => { toggle(e, 1) }}></div>
      <div class="box b2" onClick={(e) => { toggle(e, 2) }}></div>
      <div class="box b1" onClick={(e) => { toggle(e, 3) }}></div>
      <div class="box b1" onClick={(e) => { toggle(e, 4) }}></div>
      <div class="box b2" onClick={(e) => { toggle(e, 5) }}></div>
      <div class="box b3" onClick={(e) => { toggle(e, 6) }}></div>
      <div class="box b3" onClick={(e) => { toggle(e, 7) }}></div>
      <div class="box" onClick={(e) => { toggle(e, 8) }}></div>
    </div>
  )
}

export default MainGrid
