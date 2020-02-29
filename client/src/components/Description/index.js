import React from 'react';
import Smallbox from '../Smallbox'
import Bigbox from '../Bigbox'
import './style.css'


function Description() {
    return (
        <>
            <div className="descCont">
                <Smallbox></Smallbox>
                <Bigbox></Bigbox>
            </div>

        </>
    )
}

export default Description;