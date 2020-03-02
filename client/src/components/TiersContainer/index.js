import React, { useState } from 'react';
import './style.css'
// import HeroCard from '../HeroCard'
import data from './heroinfo.json'

function TiersContainer() {
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
                                    opacity: 0.8
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

            {comics}{<div className='buy'>
                <button>Hey</button>
                </div>}
        </>

    )
}
export default TiersContainer;