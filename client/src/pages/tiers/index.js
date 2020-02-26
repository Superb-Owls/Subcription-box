import React, { Component } from 'react';
import './layout.css'
import './style.css'
// import HeroCard from '../../components/HeroCard';
// import data from '../../components/HeroCard/heroinfo.json';

function Tiers() {
    return (
        <div className="container" >
            <div className="title">TITLE: CHOOSE YOUR TIER</div>
            <div className="tier1"></div>
            <div className="tier2"></div>
            <div className="hero1 heroCard">
                <div className="hoverImage hover1"></div>
            </div>
            <div className="hero2 heroCard">
                <div className="hoverImage hover2"></div>
            </div>
            <div className="hero3 heroCard">
                <div className="hoverImage hover3"></div>
            </div>
            <div className="hero4 heroCard">
                <div className="hoverImage hover4"></div>
            </div>
            <div className="hero5 heroCard">
                <div className="hoverImage hover5"></div>
            </div>
            <div className="hero6 heroCard">
                <div className="hoverImage hover6"></div>
            </div>
        </div>
    )
}


export default Tiers;




{/* <HeroCard shadow={element["shadow-image"]} gif={element["gif"]} key={"box-" + element.name} name={element.name} /> */ }