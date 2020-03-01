import React from 'react';
import './style.css'

function Smallbox(props) {
    const img = props.img
    return (
        <>
            <div className="smallimg">
                <img src={img}></img>
            </div>
        </>
    )
}
export default Smallbox;