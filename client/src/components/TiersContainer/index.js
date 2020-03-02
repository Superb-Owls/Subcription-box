import React, { useState, useEffect } from 'react';
import './style.css'
// import HeroCard from '../HeroCard'
import data from './heroinfo.json'
import { marvelHeroes } from "../../utils/marvelRd2"
import Comics from './Comics';


var realData = new Array(6, null)

function TiersContainer() {

    const [state, setState] = useState({ herosArray: data, realData: new Array(6, null), firstName: '', lastName: '', descriptionIndex: '' });

    useEffect(() => {
        var thor = 1009664
        var wolverine = 1009718
        var ironman = 1009368
        var spiderMan = 1009610
        var hulk = 1009351
        var captainAmerica = 1009220
        
        marvelHeroes(thor).then((res) => {
            // console.log(res.images)
            
            realData[3] = Comics(res)
            setState({ ...state, realData: realData })
            // console.log(realData[2]);

           
            // console.log("This is Thor:", thorData)
        })
        marvelHeroes(wolverine).then((res) => {
            realData[6] = Comics(res) 
            // console.log(realData[5])           
            // console.log("This is wolverine:", wolverineData)
        })
        marvelHeroes(ironman).then((res) => {
            realData[4] = Comics(res)
            // console.log(realData[3]);
            // realData.push({ironmanData:res})
            // console.log("This is Ironman:", ironmanData)
        })
        marvelHeroes(spiderMan).then((res) => {
            // realData.push({spiderManData:res})
            realData[1] = Comics(res)
            console.log(realData);
            // console.log("This is Spiderman:", spiderManData)
        })
        marvelHeroes(hulk).then((res) => {
            realData[5] = Comics(res)
            // console.log(realData[4]);
            // realData.push({hulk:res})
            // console.log("This is Hulk:", hulkData)
        })
        marvelHeroes(captainAmerica).then((res) => {
            // realData.push({captainAmericaData:res})
            realData[2] = Comics(res)
            // console.log(realData[1]);

            // console.log("This is captainAmerica:", captainAmericaData)
        })

        //then set the state with realData array
        // console.log(realData)
    })


    // console.log(realData.length);
    

    // const [dataState, setDatastate] = useState({
    //     title: "",
    //     description: "",
    //     date: "",
    //     pictures: ""
    // })
    
    

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
    console.log('this is the state', state)
    console.log('this is the real data!!!!', realData)
    return (
        <>
            {state.realData.length > 4 ? state.herosArray.map((hero, comic, i) => {

                if (hero['show-collapsible']) {
                    realData[hero.index].map((comic, i) => {
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
            }) : (<div class="loader"></div>)}

            {comics}
        </>

    )
}
export default TiersContainer;