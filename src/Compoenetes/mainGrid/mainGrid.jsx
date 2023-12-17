import React, { useState } from 'react';
import './mainGrid.css';
import cross from '../Assert/x.png';
import round from '../Assert/o.png';
import MessageBox from '../messageBox/messageBox';

let data = ["", "", "", "", "", "", "", "", ""];
const MainGrid = () => {

  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let [trigger, setTrigger] = useState(false);
  let [winner, setWinner] = useState('');

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
    if (count === 9) {
      setTrigger(true);
      setWinner('d');
    }
  }

  const checkWin = () => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (data[a] === data[b] && data[b] === data[c] && data[c] !== "") {
        won(data[c]);
        break; // If a winning combination is found, exit the loop
      }
    }
  }

  const won = (win) => {
    setLock(true);
    setTrigger(true);
    setWinner(win);
    console.log(winner);
  }

  return (
    <div>
      <MessageBox trigger={trigger} winner={winner} />
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
    </div>
  )
}

export default MainGrid
