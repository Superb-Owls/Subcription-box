import React from 'react';
import './style.css'


function HeroCard({ shadow, gif, name, }) {

    console.log(name)
    console.log(shadow)
    console.log(gif)
    return (
        <>
            <div className="hero-card" style={{ backgroundImage: "url(" + shadow + ")" }}>
                <div className="hover-image" style={{ backgroundImage: "url(" + gif + ")" }}>
                    {name}
                </div>
            </div>
        </>
    );
}

export default HeroCard;