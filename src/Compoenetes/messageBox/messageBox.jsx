import React from 'react';
import happyFace from '../Assert/happy.png';
import sadFace from '../Assert/sad.png';
import './messageBox.css';
const MessageBox = (props) => {
    let imgFace = happyFace;
    let message = "Congulation " + props.winner + " won";
    if (props.winner === 'd') {
        imgFace = sadFace;
        message = " IT IS DRAW "
    }


    return (props.trigger) ? (
        <div class='mbox'>
            <div><h1>{message}</h1>
                <img class='imgFace' src={imgFace} alt="" />
            </div>
            <button class='playBtn' onClick={() => window.location.reload(false)}>Play Again</button>
        </div>) : ''
}

export default MessageBox
