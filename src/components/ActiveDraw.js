import React from 'react'
import AddStakePopup from './AddStakePopup';
import {useState} from 'react';

function ActiveDraw() {

    const [stakePopup,SetStakePopup]=useState(false);

    return (
        <div class="drawBox">
            <p class="drawId">1024445 </p>
            <a class="drawl date"><i class="fas fa-clock"></i> 9-10-21 09:00</a>
            <a class="drawr people"> 2 <i class="fas fa-user-friends"></i></a>
            <p>
            <a class="drawl minAmount"><i class="fas fa-coins"></i> 0.10 eth</a>
            <a class="drawr totalPot">0.50 eth <i class="fas fa-trophy"></i></a>
            </p>
            <button onClick={() => SetStakePopup(true)} class="stakeButton">Add Stake</button>

            <AddStakePopup trigger ={stakePopup} setTrigger={SetStakePopup}></AddStakePopup>
            
          </div>
    )
}

export default ActiveDraw
