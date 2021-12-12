import React from 'react'
import './AddDrawPopup.css';

function AddDrawPopUp(props) {
    return (props.trigger) ?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={() => props.setTrigger(false)}><i class="fas fa-times"></i></button>
                <h3>New Draw</h3>
                <div className="inputFields">
                <label for="dur">Duration</label>
                <form>
                    <input type="number" id="dur" placeholder="in seconds..."></input>
                </form>
                <label for="name">Name</label>
                <form>
                    <input type="text" id="name"></input>
                </form>
                </div>
                <button className="createDrawBtn" onClick={() => props.setTrigger(false)} >Create</button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default AddDrawPopUp
