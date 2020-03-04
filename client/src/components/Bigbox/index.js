import React from 'react';
import './style.css'

function Bigbox(props) {
    const text = props.text
    const title = props.title
    return (
        <>
            <div className="bigboxwrapper">
                <div className="bigtitle">{title}</div>
                <div className="bigtext">{text}</div>
            </div>

        </>
    )
}
export default Bigbox;