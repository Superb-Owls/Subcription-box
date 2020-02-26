import React, { useState } from 'react';
import './style.css'
// import HeroCard from '../HeroCard'
import data from './heroinfo.json'

function TiersContainer() {

    const [state, setState] = useState(data);

    //this component has a shared context between row 1 and 2 with showCollapsible, setCollapsible?
    function handleClick(e, heroName) {
        e.preventDefault();
        console.log(`you clicked`, heroName)
    }

    console.log('this is our state!!', state);
    return (
        <>

            {state.map((hero, i) => {
                console.log('single hero in map!!!', hero)
                return (
                    <div key={i} className={`${hero['grid-name']} heroCard`} onClick={(e) => { handleClick(e, hero.name) }}>
                        <div className={"hoverImage hover" + `${hero.index}`} ></div>
                    </div>
                )
            })}

        </>

    )
}
export default TiersContainer;