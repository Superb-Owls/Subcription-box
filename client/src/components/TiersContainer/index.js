import React, { useState } from 'react';
import './style.css'
// import HeroCard from '../HeroCard'
import data from './heroinfo.json'

function TiersContainer() {

    const [state, setState] = useState({ herosArray: data, firstName: '', lastName: '' });

    //this component has a shared context between row 1 and 2 with showCollapsible, setCollapsible?
    function handleClick(e, heroName) {
        e.preventDefault();

        var newState = state.herosArray
        newState.map((hero) => {
            if (hero.name === heroName) {
                console.log('We found the match!!!!!', hero)
                hero['show-collapsible'] = true
            } else {
                hero['show-collapsible'] = false
            }
        })

        setState({ ...state, herosArray: newState })

    }
    function setCollapsible() {

    }
    let comics = []
    return (
        <>

            {state.herosArray.map((hero, i) => {

                if (hero['show-collapsible']) {
                    var comicsGrid = ["comic1", "comic2", "comic3", "comic4", "comic5"]
                    comicsGrid.map((gridPlace) => {
                        const html = (

                            <div className={gridPlace} style={{ backgroundColor: 'red' }}>
                                <h1>{hero.name}</h1>

                            </div>
                        )

                        comics.push(html)
                    })
                }
                return (
                    <>
                        <div key={i} className={`${hero['grid-name']} heroCard`} onClick={(e) => { handleClick(e, hero.name) }}>
                            <div className={"hoverImage hover" + `${hero.index}`}></div>
                        </div>
                    </>
                )
            })}

            {comics}
        </>

    )
}
export default TiersContainer;