import React from 'react'

function AddStakePopup(props) {
    return (props.trigger) ?(
        <div className="popup">
            <div className="popup-inner">
                <button className="close-button" onClick={() => props.setTrigger(false)}><i class="fas fa-times"></i></button>
                <h3>Add Stake</h3>
                <a>Current Stake: 2.5 eth</a>
                <div className="inputFields2">
                <label for="inc">Increment (eth)</label>
                <form>
                    <input type="number" id="inc" placeholder="amount"></input>
                </form>
                </div>
                <button className="increaseStakeBtn" onClick={() => props.setTrigger(false)} >Increase Stake</button>
                {props.children}
            </div>
        </div>
    ) :"";
}

export default AddStakePopup
