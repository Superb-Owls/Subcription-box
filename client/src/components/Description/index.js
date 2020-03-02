import React from 'react';
import Smallbox from '../Smallbox'
import Bigbox from '../Bigbox'
import './style.css'
import info from './description.json'


function Description() {
    return (
        <>
            <div className="descCont">
                <Smallbox img={info[0].img}></Smallbox>
                <Bigbox text={info[3].text}></Bigbox>
            </div>
            <div className="descCont">
                <Bigbox text={info[4].text}></Bigbox>
                <Smallbox img={info[1].img}></Smallbox>
            </div>
            <div className="descCont">
                <Smallbox img={info[2].img}></Smallbox>
                <Bigbox text={info[5].text}></Bigbox>
            </div>

        </>
    )
}

export default Description;