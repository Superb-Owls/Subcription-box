import React, { useState, useEffect } from 'react';
import './style.css'
// import HeroCard from '../HeroCard'
import data from './heroinfo.json'
import { marvelHeroes } from "../../utils/marvelRd2"

function TiersContainer() {

    useEffect(() => {
        var thor = 1009664
        var wolverine = 1009718
        var ironman = 1009368
        var spiderMan = 1009610
        var hulk = 1009351
        var captainAmerica = 1009220

        marvelHeroes(thor).then((res) => {
            var thorData = res
            console.log("This is Thor:", thorData)
        })
        marvelHeroes(wolverine).then((res) => {
            var wolverineData = res
            console.log("This is wolverine:", wolverineData)
        })
        marvelHeroes(ironman).then((res) => {
            var ironmanData = res
            console.log("This is Ironman:", ironmanData)
        })
        marvelHeroes(spiderMan).then((res) => {
            var spiderManData = res
            console.log("This is Spiderman:", spiderManData)
        })
        marvelHeroes(hulk).then((res) => {
            var hulkData = res
            console.log("This is Hulk:", hulkData)
        })
        marvelHeroes(captainAmerica).then((res) => {
            var captainAmericaData = res
            console.log("This is captainAmerica:", captainAmericaData)
        })
    })

    // state = {
    //     herosArray: data,
    //     showCollapsible: false,
    //     targetCollapsible: "",
    //     targetIndex: null
    // }

    const [state, setState] = useState({ herosArray: data, firstName: '', lastName: '', descriptionIndex: '' });

    function showDescription(i) {
        console.log('SHOW DESCRIPTION')
        setState({ ...state, descriptionIndex: i })

    }

    function hideDescription(i) {
        console.log('HIDE DESCRIPTION')
        setState({ ...state, descriptionIndex: '' })
    }

    //this component has a shared context between row 1 and 2 with showCollapsible, setCollapsible?
    function handleClick(e, heroName) {
        e.preventDefault();
        // paul
        // this.setState({ targetCollapsible: heroName, showCollapsible: true, targetIndex: e.target.index })
        //
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
    let comics = []
    console.log('this is the staet', state)
    return (
        <>
            {state.herosArray.map((hero, comic, i) => {

                if (hero['show-collapsible']) {
                    hero.comics.map((comic, i) => {
                        const html = (


                            <div onMouseLeave={() => { hideDescription(i) }} onMouseEnter={() => { showDescription(i) }} className={comic.gridSpot} style={{
                                color: 'white',
                                backgroundImage: `url(${comic.image})`,
                                backgroundSize: 'cover',

                            }}>

                                {state.descriptionIndex === i ? (<div style={{
                                    backgroundColor: 'grey',
                                    height: "100%",
                                    width: '100%',
                                    opacity: 0.4
                                }}>
                                    <h1 style={{
                                        margin: '0px',
                                        opacity: 1

                                    }}>{comic.title}</h1>
                                </div>) : ''}


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