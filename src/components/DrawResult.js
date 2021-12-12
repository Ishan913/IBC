import React from 'react'
import './AddDrawPopup.css';

function DrawResult(props) {
    return (props.trigger) ?(
        <div className="popup">
            <div className="popup-inner">
                {/* <button className="close-button" onClick={() => props.setTrigger(false)}><i class="fas fa-times"></i></button> */}
                <h3>Draw Result</h3>
                <p>Congratulations you WON 0.50 eth</p>
                <button className="createDrawBtn" onClick={() => props.setTrigger(false)} >Done</button>
                {props.children}
            </div>
        </div>
    ) :"";
}

export default DrawResult
