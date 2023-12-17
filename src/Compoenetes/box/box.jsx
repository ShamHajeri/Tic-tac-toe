import React from 'react';
import './box.css';
import cross from '../Assert/x.png';
import round from '../Assert/o.png'

const crossOrRound = () => {
    console.log('hi');
    let boo =true;
    if (boo) {
        return <img src={cross}></img>;
    }
    return <img src={round}></img>;
}

const rCBox = () => {
    return (
        <div class="box">
            {crossOrRound()}
        </div>
    )
}

export default rCBox;
