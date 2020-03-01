import React from 'react';
import './style.css'

function Bigbox(props) {
    const text = props.text
    return (
        <>
            <div className="bigtext">{text}</div>
        </>
    )
}
export default Bigbox;